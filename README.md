# AI 通用关键词导航

一个静态工具站，包含 AI 通用关键词库、网页查询入口，以及 Kimi、智谱清言、通义千问、豆包、DeepSeek、腾讯元宝、讯飞星火、百度文心助手等模型跳转入口。

## 目录

```text
site/                         # 正式静态站点目录
release/                      # 手机上传/国内云上传用压缩包
tools/serve.mjs               # 本地预览服务器
wrangler.worker.jsonc         # Cloudflare Workers 静态资源部署配置
wrangler.jsonc                # Cloudflare Pages 配置
DEPLOY_CN.md                  # 国内访问部署说明
```

## 本地预览

```bash
npm run serve
```

打开：

```text
http://127.0.0.1:4173
```

## 生成手机上传包

```bash
npm run package:cn
```

推荐上传：

```text
release/ai-keyword-navigator-root.zip
```

这个 zip 的根目录直接包含 `index.html`，适合手机上传到 EdgeOne Pages、COS、OSS、OBS 等平台。

## Cloudflare Pages 部署

```bash
npx wrangler whoami
npm run deploy
```

如果未登录，先执行：

```bash
npx wrangler login
```

## Cloudflare Workers 临时预览

```bash
npm run deploy:temp
```

这个命令用于临时分享和应急预览，不适合作为长期国内访问地址。

## 推荐长期工作流

1. 代码放 GitHub 仓库。
2. 国内访问用腾讯云 EdgeOne Pages 或对象存储静态网站。
3. EdgeOne Pages 连接 GitHub 仓库，构建目录设置为 `site`。
4. 以后在手机上改 GitHub 文件并提交，平台自动重新部署。

当前 GitHub 仓库：

```text
https://github.com/Liguannan-Alex/ai-keyword-navigator
```

手机远程维护说明见：

```text
MOBILE_WORKFLOW.md
```
