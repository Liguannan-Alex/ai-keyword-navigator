window.AI_NAV_DATA = {
  categories: [
    { id: "all", name: "全部", accent: "#117b72" },
    { id: "basics", name: "基础概念", accent: "#117b72" },
    { id: "model", name: "模型与架构", accent: "#386cb0" },
    { id: "prompt", name: "提示词与交互", accent: "#c98313" },
    { id: "knowledge", name: "知识检索", accent: "#4f7d3a" },
    { id: "training", name: "训练与评估", accent: "#b84a3b" },
    { id: "product", name: "产品应用", accent: "#7a5c27" },
    { id: "deploy", name: "部署与安全", accent: "#5f6d7a" }
  ],
  providers: [
    { id: "google", name: "Google", url: "https://www.google.com/search?q={query}" },
    { id: "bing", name: "Bing", url: "https://www.bing.com/search?q={query}" },
    { id: "baidu", name: "百度", url: "https://www.baidu.com/s?wd={query}" },
    { id: "baike", name: "百科", url: "https://baike.baidu.com/search/word?word={query}" },
    { id: "wiki", name: "维基", url: "https://zh.wikipedia.org/w/index.php?search={query}" }
  ],
  models: [
    { id: "kimi", name: "Kimi", url: "https://www.kimi.com/", owner: "Moonshot AI" },
    { id: "chatglm", name: "智谱清言", url: "https://chatglm.cn/", owner: "智谱 AI" },
    { id: "qianwen", name: "通义千问", url: "https://www.qianwen.com/", owner: "阿里云" },
    { id: "doubao", name: "豆包", url: "https://www.doubao.com/chat/", owner: "字节跳动" },
    { id: "deepseek", name: "DeepSeek", url: "https://chat.deepseek.com/", owner: "DeepSeek" },
    { id: "yuanbao", name: "腾讯元宝", url: "https://yuanbao.tencent.com/", owner: "腾讯" },
    { id: "spark", name: "讯飞星火", url: "https://xinghuo.xfyun.cn/", owner: "科大讯飞" },
    { id: "baidu", name: "百度文心助手", url: "https://chat.baidu.com/", owner: "百度" }
  ],
  keywords: [
    {
      id: "ai",
      zh: "人工智能",
      en: "Artificial Intelligence",
      category: "basics",
      aliases: ["AI", "智能系统"],
      summary: "让机器执行感知、推理、生成、决策等智能任务的技术集合。"
    },
    {
      id: "machine-learning",
      zh: "机器学习",
      en: "Machine Learning",
      category: "basics",
      aliases: ["ML", "统计学习"],
      summary: "通过数据训练模型，让系统从样本中学习规律并用于预测或决策。"
    },
    {
      id: "deep-learning",
      zh: "深度学习",
      en: "Deep Learning",
      category: "basics",
      aliases: ["DL", "神经网络"],
      summary: "使用多层神经网络学习复杂特征，是现代语音、视觉和大模型的核心方法。"
    },
    {
      id: "generative-ai",
      zh: "生成式 AI",
      en: "Generative AI",
      category: "basics",
      aliases: ["AIGC", "生成式人工智能"],
      summary: "根据输入生成文本、图片、音频、视频、代码等新内容的 AI 类型。"
    },
    {
      id: "llm",
      zh: "大语言模型",
      en: "Large Language Model",
      category: "basics",
      aliases: ["LLM", "语言大模型"],
      summary: "在大规模文本和代码上训练，能够理解与生成自然语言的基础模型。"
    },
    {
      id: "foundation-model",
      zh: "基础模型",
      en: "Foundation Model",
      category: "basics",
      aliases: ["基座模型", "底座模型"],
      summary: "经过大规模预训练，可迁移到多类任务的大型通用模型。"
    },
    {
      id: "multimodal",
      zh: "多模态",
      en: "Multimodal",
      category: "basics",
      aliases: ["跨模态", "图文音视频"],
      summary: "同时处理文本、图像、音频、视频、表格等多种信息形态。"
    },
    {
      id: "nlp",
      zh: "自然语言处理",
      en: "Natural Language Processing",
      category: "basics",
      aliases: ["NLP", "语言处理"],
      summary: "让机器理解、分析、生成和转换人类语言的技术方向。"
    },
    {
      id: "computer-vision",
      zh: "计算机视觉",
      en: "Computer Vision",
      category: "basics",
      aliases: ["CV", "视觉识别"],
      summary: "让机器理解图像、视频和空间场景的 AI 技术方向。"
    },
    {
      id: "speech-recognition",
      zh: "语音识别",
      en: "Speech Recognition",
      category: "basics",
      aliases: ["ASR", "自动语音识别"],
      summary: "把语音信号转换成文本或结构化指令的能力。"
    },
    {
      id: "text-to-image",
      zh: "文生图",
      en: "Text to Image",
      category: "basics",
      aliases: ["AI 绘图", "T2I"],
      summary: "根据文字描述生成图片，常用于设计、插画、广告和创意草图。"
    },
    {
      id: "text-to-video",
      zh: "文生视频",
      en: "Text to Video",
      category: "basics",
      aliases: ["T2V", "AI 视频"],
      summary: "根据文本、图片或分镜生成视频片段的多模态生成能力。"
    },
    {
      id: "transformer",
      zh: "Transformer",
      en: "Transformer",
      category: "model",
      aliases: ["变换器架构"],
      summary: "以注意力机制为核心的神经网络架构，是主流大语言模型的基础。"
    },
    {
      id: "attention",
      zh: "注意力机制",
      en: "Attention Mechanism",
      category: "model",
      aliases: ["Self-Attention", "自注意力"],
      summary: "让模型在处理信息时动态关注更相关的上下文片段。"
    },
    {
      id: "token",
      zh: "Token",
      en: "Token",
      category: "model",
      aliases: ["词元", "标记"],
      summary: "模型处理文本的基本单位，可以是字、词、词片段或符号。"
    },
    {
      id: "embedding",
      zh: "向量表示",
      en: "Embedding",
      category: "model",
      aliases: ["词向量", "语义向量"],
      summary: "把文本、图片或其他对象转换成可计算相似度的数字向量。"
    },
    {
      id: "context-window",
      zh: "上下文窗口",
      en: "Context Window",
      category: "model",
      aliases: ["上下文长度", "长上下文"],
      summary: "模型一次对话或推理中能接收和保留的最大信息范围。"
    },
    {
      id: "inference",
      zh: "推理",
      en: "Inference",
      category: "model",
      aliases: ["模型推理", "生成阶段"],
      summary: "模型根据输入生成输出的运行过程，区别于训练过程。"
    },
    {
      id: "reasoning",
      zh: "推理能力",
      en: "Reasoning",
      category: "model",
      aliases: ["逻辑推理", "复杂推理"],
      summary: "模型进行分解、比较、规划、演算和多步判断的能力。"
    },
    {
      id: "chain-of-thought",
      zh: "思维链",
      en: "Chain of Thought",
      category: "model",
      aliases: ["CoT", "逐步推理"],
      summary: "通过中间步骤组织复杂问题求解的一类提示或训练方法。"
    },
    {
      id: "agent",
      zh: "智能体",
      en: "AI Agent",
      category: "model",
      aliases: ["代理", "自主智能体"],
      summary: "能围绕目标进行规划、调用工具、观察结果并继续行动的 AI 系统。"
    },
    {
      id: "tool-use",
      zh: "工具调用",
      en: "Tool Use",
      category: "model",
      aliases: ["函数调用", "Function Calling"],
      summary: "模型通过调用搜索、数据库、代码执行、业务 API 等外部工具完成任务。"
    },
    {
      id: "mcp",
      zh: "模型上下文协议",
      en: "Model Context Protocol",
      category: "model",
      aliases: ["MCP"],
      summary: "一种把模型与工具、数据源、应用上下文连接起来的开放协议思路。"
    },
    {
      id: "moe",
      zh: "专家混合",
      en: "Mixture of Experts",
      category: "model",
      aliases: ["MoE"],
      summary: "把多个专家子网络组合起来，按输入动态激活部分专家以提升效率。"
    },
    {
      id: "distillation",
      zh: "模型蒸馏",
      en: "Model Distillation",
      category: "model",
      aliases: ["知识蒸馏"],
      summary: "用大模型或强模型指导较小模型学习，以降低成本并保留能力。"
    },
    {
      id: "alignment",
      zh: "模型对齐",
      en: "Alignment",
      category: "model",
      aliases: ["价值对齐", "安全对齐"],
      summary: "让模型输出更符合人类意图、规范、安全边界和任务目标。"
    },
    {
      id: "prompt",
      zh: "提示词",
      en: "Prompt",
      category: "prompt",
      aliases: ["指令", "提问词"],
      summary: "给模型的输入指令，决定任务目标、上下文、约束和输出形式。"
    },
    {
      id: "system-prompt",
      zh: "系统提示词",
      en: "System Prompt",
      category: "prompt",
      aliases: ["系统指令", "system message"],
      summary: "高优先级指令，用于设定模型角色、边界、风格和行为规则。"
    },
    {
      id: "prompt-engineering",
      zh: "提示词工程",
      en: "Prompt Engineering",
      category: "prompt",
      aliases: ["Prompt 设计"],
      summary: "系统化设计输入指令，使模型更稳定地完成目标任务。"
    },
    {
      id: "zero-shot",
      zh: "零样本",
      en: "Zero-shot",
      category: "prompt",
      aliases: ["无样例提示"],
      summary: "不给示例，直接让模型根据指令完成新任务。"
    },
    {
      id: "few-shot",
      zh: "少样本",
      en: "Few-shot",
      category: "prompt",
      aliases: ["样例提示", "in-context examples"],
      summary: "在提示中提供少量示例，让模型模仿格式、标准或推理方式。"
    },
    {
      id: "role-prompt",
      zh: "角色设定",
      en: "Role Prompting",
      category: "prompt",
      aliases: ["角色扮演", "专家角色"],
      summary: "通过身份、职责和判断标准约束模型的输出角度。"
    },
    {
      id: "prompt-template",
      zh: "提示词模板",
      en: "Prompt Template",
      category: "prompt",
      aliases: ["模板化提示"],
      summary: "把任务指令、变量、输出格式固定下来，便于重复使用和流程化。"
    },
    {
      id: "temperature",
      zh: "温度",
      en: "Temperature",
      category: "prompt",
      aliases: ["采样温度"],
      summary: "控制生成随机性的参数，越高通常越发散，越低通常越稳定。"
    },
    {
      id: "top-p",
      zh: "Top-p",
      en: "Top-p Sampling",
      category: "prompt",
      aliases: ["核采样", "nucleus sampling"],
      summary: "从累计概率达到阈值的一组候选词中采样，影响输出多样性。"
    },
    {
      id: "hallucination",
      zh: "幻觉",
      en: "Hallucination",
      category: "prompt",
      aliases: ["编造", "事实错误"],
      summary: "模型生成看似可信但实际不准确、无来源或虚构的信息。"
    },
    {
      id: "citation",
      zh: "引用溯源",
      en: "Citation",
      category: "prompt",
      aliases: ["来源标注", "出处"],
      summary: "要求模型给出信息来源、证据链或可核查链接，降低不可验证输出。"
    },
    {
      id: "rag",
      zh: "检索增强生成",
      en: "Retrieval-Augmented Generation",
      category: "knowledge",
      aliases: ["RAG", "知识库问答"],
      summary: "先检索外部知识，再把相关内容交给模型生成回答。"
    },
    {
      id: "vector-database",
      zh: "向量数据库",
      en: "Vector Database",
      category: "knowledge",
      aliases: ["向量库", "vector store"],
      summary: "存储和检索语义向量，常用于相似度搜索和 RAG。"
    },
    {
      id: "semantic-search",
      zh: "语义搜索",
      en: "Semantic Search",
      category: "knowledge",
      aliases: ["语义检索"],
      summary: "按含义而不是字面关键词查找相关内容。"
    },
    {
      id: "reranker",
      zh: "重排序",
      en: "Reranking",
      category: "knowledge",
      aliases: ["Reranker", "召回排序"],
      summary: "对初步检索结果重新打分排序，把更相关的内容排在前面。"
    },
    {
      id: "chunking",
      zh: "分块",
      en: "Chunking",
      category: "knowledge",
      aliases: ["切片", "文档分段"],
      summary: "把长文档切成适合检索和模型读取的小片段。"
    },
    {
      id: "knowledge-graph",
      zh: "知识图谱",
      en: "Knowledge Graph",
      category: "knowledge",
      aliases: ["实体关系图"],
      summary: "用实体、关系和属性组织知识，便于推理和结构化查询。"
    },
    {
      id: "ocr",
      zh: "OCR",
      en: "Optical Character Recognition",
      category: "knowledge",
      aliases: ["文字识别"],
      summary: "从图片、扫描件或截图中识别文字，常用于文档数字化。"
    },
    {
      id: "document-parsing",
      zh: "文档解析",
      en: "Document Parsing",
      category: "knowledge",
      aliases: ["PDF 解析", "版面理解"],
      summary: "把 PDF、Word、表格、图片等文件转换成可被模型处理的结构化内容。"
    },
    {
      id: "data-cleaning",
      zh: "数据清洗",
      en: "Data Cleaning",
      category: "knowledge",
      aliases: ["数据预处理"],
      summary: "修正缺失、重复、噪声和格式问题，提高训练或检索质量。"
    },
    {
      id: "pretraining",
      zh: "预训练",
      en: "Pretraining",
      category: "training",
      aliases: ["大规模预训练"],
      summary: "用海量数据训练模型的通用能力，形成可迁移的基础参数。"
    },
    {
      id: "fine-tuning",
      zh: "微调",
      en: "Fine-tuning",
      category: "training",
      aliases: ["模型微调", "FT"],
      summary: "在已有模型基础上用特定数据继续训练，使其适配领域或任务。"
    },
    {
      id: "sft",
      zh: "监督微调",
      en: "Supervised Fine-tuning",
      category: "training",
      aliases: ["SFT"],
      summary: "用人工标注或高质量示例对模型进行指令跟随训练。"
    },
    {
      id: "rlhf",
      zh: "人类反馈强化学习",
      en: "Reinforcement Learning from Human Feedback",
      category: "training",
      aliases: ["RLHF"],
      summary: "利用人类偏好反馈训练奖励模型，再优化模型输出。"
    },
    {
      id: "rlaif",
      zh: "AI 反馈强化学习",
      en: "Reinforcement Learning from AI Feedback",
      category: "training",
      aliases: ["RLAIF"],
      summary: "用 AI 评审或偏好信号替代部分人工反馈来优化模型。"
    },
    {
      id: "lora",
      zh: "LoRA",
      en: "Low-Rank Adaptation",
      category: "training",
      aliases: ["低秩适配"],
      summary: "只训练少量低秩参数来适配模型，降低微调成本。"
    },
    {
      id: "peft",
      zh: "参数高效微调",
      en: "Parameter-Efficient Fine-Tuning",
      category: "training",
      aliases: ["PEFT"],
      summary: "只更新少量参数或附加模块，以更低资源完成模型适配。"
    },
    {
      id: "dataset",
      zh: "数据集",
      en: "Dataset",
      category: "training",
      aliases: ["训练数据", "样本集"],
      summary: "用于训练、验证或评估模型的数据集合。"
    },
    {
      id: "benchmark",
      zh: "基准测试",
      en: "Benchmark",
      category: "training",
      aliases: ["评测榜单", "评估基准"],
      summary: "用统一任务和指标比较模型能力的测试集合。"
    },
    {
      id: "eval",
      zh: "模型评估",
      en: "Evaluation",
      category: "training",
      aliases: ["Eval", "评测"],
      summary: "通过自动指标、人工评审或任务结果判断模型表现。"
    },
    {
      id: "mmlu",
      zh: "MMLU",
      en: "Massive Multitask Language Understanding",
      category: "training",
      aliases: ["多任务语言理解评测"],
      summary: "覆盖多学科知识和推理能力的大语言模型评测集。"
    },
    {
      id: "humaneval",
      zh: "HumanEval",
      en: "HumanEval",
      category: "training",
      aliases: ["代码评测"],
      summary: "用于评估代码生成能力的编程题基准测试。"
    },
    {
      id: "ab-testing",
      zh: "A/B 测试",
      en: "A/B Testing",
      category: "training",
      aliases: ["实验对照"],
      summary: "用不同版本对照真实用户反馈，验证模型或产品改动效果。"
    },
    {
      id: "copilot",
      zh: "智能副驾",
      en: "Copilot",
      category: "product",
      aliases: ["AI 助手", "副驾驶"],
      summary: "嵌入工作流中协助写作、分析、编码、检索或操作的软件助手。"
    },
    {
      id: "ai-search",
      zh: "AI 搜索",
      en: "AI Search",
      category: "product",
      aliases: ["答案引擎", "智能搜索"],
      summary: "结合搜索、摘要和推理，直接生成可读答案的检索体验。"
    },
    {
      id: "workflow-automation",
      zh: "自动化工作流",
      en: "Workflow Automation",
      category: "product",
      aliases: ["AI 工作流", "流程自动化"],
      summary: "把模型、工具和业务步骤串联起来自动完成多步任务。"
    },
    {
      id: "ai-office",
      zh: "AI 办公",
      en: "AI Office",
      category: "product",
      aliases: ["智能办公"],
      summary: "用 AI 辅助文档、表格、会议、邮件、汇报和知识管理。"
    },
    {
      id: "ai-coding",
      zh: "AI 编程",
      en: "AI Coding",
      category: "product",
      aliases: ["代码助手", "编程智能体"],
      summary: "用模型辅助代码生成、解释、调试、测试和重构。"
    },
    {
      id: "ai-writing",
      zh: "AI 写作",
      en: "AI Writing",
      category: "product",
      aliases: ["写作助手"],
      summary: "用 AI 辅助选题、提纲、改写、润色、摘要和多版本表达。"
    },
    {
      id: "ai-design",
      zh: "AI 设计",
      en: "AI Design",
      category: "product",
      aliases: ["AI 绘画", "设计助手"],
      summary: "用模型生成或辅助修改视觉方案、界面、图片和品牌素材。"
    },
    {
      id: "digital-human",
      zh: "数字人",
      en: "Digital Human",
      category: "product",
      aliases: ["虚拟人", "AI 主播"],
      summary: "结合形象、语音、表情和对话能力的虚拟角色。"
    },
    {
      id: "rpa",
      zh: "机器人流程自动化",
      en: "Robotic Process Automation",
      category: "product",
      aliases: ["RPA"],
      summary: "自动执行重复性软件操作，可与 AI 结合处理非结构化任务。"
    },
    {
      id: "ai-native",
      zh: "AI 原生应用",
      en: "AI-native Application",
      category: "product",
      aliases: ["AI Native"],
      summary: "以模型能力为核心交互和业务逻辑，而不是把 AI 作为附加按钮的应用。"
    },
    {
      id: "api",
      zh: "API",
      en: "Application Programming Interface",
      category: "deploy",
      aliases: ["接口", "模型 API"],
      summary: "应用调用模型、工具或数据服务的标准接口。"
    },
    {
      id: "sdk",
      zh: "SDK",
      en: "Software Development Kit",
      category: "deploy",
      aliases: ["开发工具包"],
      summary: "把 API、示例和工具封装成便于开发者集成的软件包。"
    },
    {
      id: "ai-gateway",
      zh: "模型网关",
      en: "AI Gateway",
      category: "deploy",
      aliases: ["LLM Gateway", "模型路由"],
      summary: "统一管理模型调用、鉴权、缓存、限流、日志和多模型切换。"
    },
    {
      id: "private-deploy",
      zh: "私有化部署",
      en: "Private Deployment",
      category: "deploy",
      aliases: ["本地部署", "专有云部署"],
      summary: "把模型或 AI 系统部署在企业自有环境中，便于控制数据和权限。"
    },
    {
      id: "local-model",
      zh: "本地模型",
      en: "Local Model",
      category: "deploy",
      aliases: ["离线模型", "端侧模型"],
      summary: "在个人电脑、服务器或设备端运行的模型，不完全依赖云端服务。"
    },
    {
      id: "open-source-model",
      zh: "开源模型",
      en: "Open-source Model",
      category: "deploy",
      aliases: ["开放权重", "开源大模型"],
      summary: "公开模型权重、代码或使用许可，便于下载、改造和部署的模型。"
    },
    {
      id: "cloud-inference",
      zh: "云端推理",
      en: "Cloud Inference",
      category: "deploy",
      aliases: ["云模型调用"],
      summary: "通过云服务运行模型推理，通常便于弹性扩展和快速接入。"
    },
    {
      id: "token-cost",
      zh: "Token 成本",
      en: "Token Cost",
      category: "deploy",
      aliases: ["调用成本", "用量计费"],
      summary: "按输入和输出 token 数计算的模型调用费用。"
    },
    {
      id: "latency",
      zh: "延迟",
      en: "Latency",
      category: "deploy",
      aliases: ["响应时间"],
      summary: "从发出请求到收到模型输出所需的时间，是产品体验关键指标。"
    },
    {
      id: "content-safety",
      zh: "内容安全",
      en: "Content Safety",
      category: "deploy",
      aliases: ["安全审核", "内容审核"],
      summary: "识别和控制违法、危险、仇恨、色情、欺诈等不当内容。"
    },
    {
      id: "privacy",
      zh: "隐私保护",
      en: "Privacy Protection",
      category: "deploy",
      aliases: ["隐私合规"],
      summary: "控制个人信息、商业机密和敏感数据在 AI 流程中的采集与使用。"
    },
    {
      id: "data-masking",
      zh: "数据脱敏",
      en: "Data Masking",
      category: "deploy",
      aliases: ["敏感信息处理"],
      summary: "对身份证、手机号、姓名、地址等敏感字段进行隐藏或替换。"
    },
    {
      id: "prompt-injection",
      zh: "提示注入",
      en: "Prompt Injection",
      category: "deploy",
      aliases: ["指令注入"],
      summary: "攻击者通过输入内容诱导模型忽略原有规则或泄露敏感信息。"
    },
    {
      id: "jailbreak",
      zh: "越狱攻击",
      en: "Jailbreak",
      category: "deploy",
      aliases: ["绕过安全规则"],
      summary: "诱导模型突破安全策略、输出受限内容或执行不该执行的指令。"
    },
    {
      id: "bias",
      zh: "模型偏见",
      en: "Model Bias",
      category: "deploy",
      aliases: ["算法偏见"],
      summary: "模型因训练数据或设计问题，对群体、观点或场景产生系统性偏差。"
    },
    {
      id: "watermark",
      zh: "AI 水印",
      en: "AI Watermark",
      category: "deploy",
      aliases: ["生成内容标识"],
      summary: "在 AI 生成内容中加入可见或不可见标记，便于识别来源。"
    },
    {
      id: "audit-log",
      zh: "审计日志",
      en: "Audit Log",
      category: "deploy",
      aliases: ["调用日志", "操作日志"],
      summary: "记录模型调用、权限、输入输出摘要和操作轨迹，便于追踪与合规。"
    }
  ]
};
