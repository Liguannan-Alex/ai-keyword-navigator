# 国内访问部署方案

当前公网地址是 Cloudflare Workers 的默认域名：

```text
https://ai-keyword-navigator.glossy-chokeberry.workers.dev
```

如果国内朋友打不开，通常不是网站代码问题，而是 `workers.dev` 默认域名和 Cloudflare 全球网络在国内访问不稳定。

## 推荐方案一：部署到国内静态托管

这个项目是纯静态站，不需要服务器后端。把 `site/` 目录里的文件上传到任意国内静态托管即可：

```text
site/index.html
site/styles.css
site/data.js
site/app.js
site/_headers
```

适合的国内平台：

- 腾讯云 EdgeOne Pages
- 腾讯云 COS 静态网站托管
- 阿里云 OSS 静态网站托管
- 华为云 OBS 静态网站托管

上传后把默认首页设置为：

```text
index.html
```

如果平台要求错误页，也设置为：

```text
index.html
```

如果平台支持从 GitHub 导入项目，推荐直接连接 GitHub 仓库，并把发布目录设置为：

```text
site
```

这样后续在手机上改 GitHub 文件并提交，就能自动重新发布。

## 推荐方案二：绑定自己的域名

如果你有自己的域名，可以把它绑定到 Cloudflare Worker，避免继续使用 `workers.dev` 默认域名。

注意：这只能避开默认域名问题，不能保证国内访问质量一定稳定。真正面向国内稳定访问，仍建议走国内云或国内 CDN。

需要你提供：

```text
域名，例如 ai.example.com
域名 DNS 当前托管在哪里
是否已经备案
```

## 推荐方案三：国内 CDN

如果要稳定分享给国内用户，建议：

1. 使用已备案域名。
2. 静态文件放到 OSS/COS/OBS。
3. 开启国内 CDN。
4. CDN 源站指向静态托管地址。
5. 首页和错误页都指向 `index.html`。

## 本项目已准备好的发布包

可以直接上传：

```text
release/ai-keyword-navigator-root.zip
```

这个包的根目录直接就是 `index.html`，更适合手机网页上传。

也可以直接上传整个 `site/` 目录。
