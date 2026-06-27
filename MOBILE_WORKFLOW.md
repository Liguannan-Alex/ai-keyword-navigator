# 手机远程维护流程

这个项目已经放到 GitHub：

```text
https://github.com/Liguannan-Alex/ai-keyword-navigator
```

## 推荐长期部署方式

国内访问推荐使用腾讯云 EdgeOne Pages，并从 GitHub 导入此仓库。

EdgeOne Pages 项目配置：

```text
仓库：Liguannan-Alex/ai-keyword-navigator
分支：main
构建命令：留空
输出目录：site
默认首页：index.html
错误页：index.html
```

这样以后每次 GitHub 仓库更新，EdgeOne Pages 会自动重新部署。

## GitHub Pages 预览

仓库已经包含 GitHub Pages 自动部署工作流：

```text
.github/workflows/pages.yml
```

它会把 `site/` 目录部署为 GitHub Pages。这个地址可作为海外/临时预览，不建议作为国内正式访问地址。

当前 GitHub Pages 预览地址：

```text
https://liguannan-alex.github.io/ai-keyword-navigator/
```

## 手机下载发布包

当前 Release 地址：

```text
https://github.com/Liguannan-Alex/ai-keyword-navigator/releases/tag/v1.0.0
```

下载资产：

```text
ai-keyword-navigator-root.zip
```

## 手机上修改关键词

1. 打开 GitHub 仓库：

   ```text
   https://github.com/Liguannan-Alex/ai-keyword-navigator
   ```

2. 进入：

   ```text
   site/data.js
   ```

3. 点编辑。
4. 修改 `keywords` 数组里的关键词。
5. 提交到 `main` 分支。
6. 等 EdgeOne Pages 自动部署完成。

## 手机上更新整个网站包

如果国内平台只支持上传 zip，不支持连接 GitHub，使用这个包：

```text
release/ai-keyword-navigator-root.zip
```

这个 zip 根目录直接包含：

```text
index.html
styles.css
data.js
app.js
_headers
```

上传后设置：

```text
默认首页：index.html
错误页：index.html
```

## 不推荐作为长期方案

不要把 `workers.dev` 作为国内正式分享地址。

原因：

```text
国内访问不稳定
临时部署需要认领
默认域名不可控
```

Cloudflare 可以作为海外预览或临时应急，但国内正式访问建议走 EdgeOne Pages、COS、OSS、OBS 或国内 CDN。
