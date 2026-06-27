const { categories, providers, models, keywords } = window.AI_NAV_DATA;

const state = {
  query: "",
  category: "all",
  selectedId: keywords[0]?.id
};

const els = {
  searchInput: document.querySelector("#searchInput"),
  clearSearch: document.querySelector("#clearSearch"),
  categoryList: document.querySelector("#categoryList"),
  keywordGrid: document.querySelector("#keywordGrid"),
  resultTitle: document.querySelector("#resultTitle"),
  resultCount: document.querySelector("#resultCount"),
  detailContent: document.querySelector("#detailContent"),
  emptyState: document.querySelector("#emptyState"),
  toast: document.querySelector("#toast"),
  canvas: document.querySelector("#signalCanvas")
};

const categoryMap = new Map(categories.map((category) => [category.id, category]));
const keywordMap = new Map(keywords.map((keyword) => [keyword.id, keyword]));

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[\s\-_/|·，。,.()（）:：]+/g, "");
}

function buildSearchText(keyword) {
  return normalize([keyword.zh, keyword.en, keyword.category, ...(keyword.aliases || [])].join(" "));
}

function queryFor(keyword) {
  return encodeURIComponent(`${keyword.zh} ${keyword.en} AI 概念`);
}

function makePrompt(keyword) {
  return [
    `请用中文解释 AI 概念「${keyword.zh}（${keyword.en}）」：`,
    "1. 一句话定义",
    "2. 它解决什么问题",
    "3. 典型应用场景",
    "4. 和相近概念的区别",
    "5. 初学者容易误解的地方",
    "请用结构化小标题回答。"
  ].join("\n");
}

function filteredKeywords() {
  const query = normalize(state.query);
  return keywords.filter((keyword) => {
    const categoryMatch = state.category === "all" || keyword.category === state.category;
    const queryMatch = !query || buildSearchText(keyword).includes(query);
    return categoryMatch && queryMatch;
  });
}

function countByCategory(categoryId) {
  if (categoryId === "all") return keywords.length;
  return keywords.filter((keyword) => keyword.category === categoryId).length;
}

function renderCategories() {
  els.categoryList.innerHTML = categories
    .map((category) => {
      const active = state.category === category.id ? " active" : "";
      return `
        <button class="category-button${active}" type="button" data-category="${category.id}">
          <span class="category-name">${category.name}</span>
          <span class="category-count">${countByCategory(category.id)}</span>
        </button>
      `;
    })
    .join("");
}

function renderKeywords() {
  const items = filteredKeywords();
  if (!items.some((keyword) => keyword.id === state.selectedId)) {
    state.selectedId = items[0]?.id || keywords[0]?.id;
  }
  const activeCategory = categoryMap.get(state.category);
  els.resultTitle.textContent = state.query ? "搜索结果" : activeCategory?.name || "全部关键词";
  els.resultCount.textContent = `${items.length} / ${keywords.length}`;
  els.emptyState.hidden = items.length > 0;
  els.keywordGrid.innerHTML = items
    .map((keyword) => {
      const category = categoryMap.get(keyword.category);
      const active = state.selectedId === keyword.id ? " active" : "";
      const alias = keyword.aliases?.[0] || category?.name || "";
      return `
        <button class="keyword-card${active}" type="button" data-keyword="${keyword.id}">
          <span class="keyword-topline">
            <strong>${keyword.zh}</strong>
            <span class="tag amber">${category?.name || ""}</span>
          </span>
          <p class="keyword-en">${keyword.en}</p>
          <p class="keyword-summary">${keyword.summary}</p>
          <span class="keyword-meta">
            <span class="tag">${alias}</span>
          </span>
        </button>
      `;
    })
    .join("");

}

function renderDetail() {
  const keyword = keywordMap.get(state.selectedId) || filteredKeywords()[0] || keywords[0];
  if (!keyword) {
    els.detailContent.innerHTML = "";
    return;
  }
  const category = categoryMap.get(keyword.category);
  const searchButtons = providers
    .map((provider, index) => {
      const url = provider.url.replace("{query}", queryFor(keyword));
      const primary = index === 0 ? " primary" : "";
      return `<a class="action-button${primary}" href="${url}" target="_blank" rel="noopener noreferrer">${provider.name}</a>`;
    })
    .join("");
  const modelRows = models
    .map(
      (model) => `
        <div class="model-row">
          <span class="model-name" title="${model.owner}">${model.name}</span>
          <span class="model-actions">
            <button class="mini-button" type="button" data-copy-model="${model.id}">复制提问</button>
            <button class="mini-button" type="button" data-open-model="${model.id}">打开</button>
          </span>
        </div>
      `
    )
    .join("");

  els.detailContent.innerHTML = `
    <div class="detail-head">
      <p class="detail-kicker">${category?.name || ""}</p>
      <h2>${keyword.zh}</h2>
      <p class="detail-en">${keyword.en}</p>
      <p class="detail-summary">${keyword.summary}</p>
      <div class="keyword-meta">
        ${(keyword.aliases || []).map((alias) => `<span class="tag">${alias}</span>`).join("")}
      </div>
    </div>
    <div class="detail-links">
      <div class="link-group">
        <h3>网页查询</h3>
        <div class="button-grid">${searchButtons}</div>
      </div>
      <div class="link-group">
        <h3>模型提问</h3>
        <div class="model-list">${modelRows}</div>
      </div>
    </div>
  `;
}

function sync() {
  renderCategories();
  renderKeywords();
  renderDetail();
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("show");
  }, 2200);
}

function copyPromptForModel(modelId, shouldOpen = false) {
  const keyword = keywordMap.get(state.selectedId);
  const model = models.find((item) => item.id === modelId);
  if (!keyword || !model) return;

  copyText(makePrompt(keyword))
    .then(() => {
      showToast(`已复制给 ${model.name} 的提问词`);
      if (shouldOpen) window.open(model.url, "_blank", "noopener,noreferrer");
    })
    .catch(() => {
      showToast("复制失败，可直接打开模型后手动输入");
      if (shouldOpen) window.open(model.url, "_blank", "noopener,noreferrer");
    });
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    sync();
  });

  els.clearSearch.addEventListener("click", () => {
    state.query = "";
    els.searchInput.value = "";
    sync();
    els.searchInput.focus();
  });

  els.categoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    sync();
  });

  els.keywordGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-keyword]");
    if (!button) return;
    state.selectedId = button.dataset.keyword;
    renderKeywords();
    renderDetail();
  });

  els.detailContent.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy-model]");
    const openButton = event.target.closest("[data-open-model]");
    if (copyButton) {
      copyPromptForModel(copyButton.dataset.copyModel);
    }
    if (openButton) {
      copyPromptForModel(openButton.dataset.openModel, true);
    }
  });
}

function drawSignalMap(time = 0) {
  const canvas = els.canvas;
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
  }
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, "#10221f");
  gradient.addColorStop(0.5, "#13201d");
  gradient.addColorStop(1, "#201a12");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  const visibleCategories = categories.filter((category) => category.id !== "all");
  const center = { x: w * 0.5, y: h * 0.54 };
  const radiusX = w * 0.36;
  const radiusY = h * 0.29;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.beginPath();
  ctx.arc(center.x, center.y, Math.min(radiusX, radiusY) * 0.64, 0, Math.PI * 2);
  ctx.stroke();

  visibleCategories.forEach((category, index) => {
    const angle = (index / visibleCategories.length) * Math.PI * 2 + time * 0.00018;
    const x = center.x + Math.cos(angle) * radiusX;
    const y = center.y + Math.sin(angle) * radiusY;
    ctx.strokeStyle = `${category.accent}70`;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = category.accent;
    ctx.beginPath();
    ctx.arc(x, y, 5.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.88)";
    ctx.font = "600 11px system-ui, sans-serif";
    ctx.fillText(category.name, x + 9, y + 4);
  });

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(center.x, center.y, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.font = "700 13px system-ui, sans-serif";
  ctx.fillText("AI", center.x + 13, center.y + 5);

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  window.requestAnimationFrame(drawSignalMap);
}

bindEvents();
sync();
window.requestAnimationFrame(drawSignalMap);
