---
name: cloudflare-cf
description: "0xWelt 博客 / my-blog 专属 Cloudflare 拓扑与账号（Pages 项目 blog、Zone 0xwelt.com、构建与本站排障）。通用 Cloudflare CLI/API（安装、Token、cf/wrangler/API）见 skill cloudflare-cli。触发词：cloudflare、cf、pages、dns、0xwelt.com、blog.0xwelt.com、博客托管排障。"
---

# Cloudflare（my-blog 专属）

本 skill **只记博客项目专属信息**（账号/Zone、serve 拓扑、构建部署、本站排障）。

## 通用用法

安装、认证（API Token）、`cf` / `wrangler` / Cloudflare API 的命令与通用踩坑，一律见 **`cloudflare-cli`**（welt-skills / Grok Bot 已登记）。写操作前先跟 0xWelt 确认；通用工具选择（何时用 cf / wrangler / API）也以该 skill 为准。

## 当前项目账号信息（0xWelt 博客）

| 项目 | 值 |
|---|---|
| 账号 | bd45de5571a7c2900fab29f2152e16ec（standard 计划） |
| Zone | 0xwelt.com（e14cefea108f24c26419ea30d048612d，active） |
| Pages | **blog**（blog-5up.pages.dev，唯一项目，GitHub 源自动构建） |
| Worker | 无（blog-proxy 已退役） |

常用环境变量（与通用 skill 一致，值仅本站）：

```bash
export CLOUDFLARE_ACCOUNT_ID='bd45de5571a7c2900fab29f2152e16ec'
export CLOUDFLARE_ZONE_ID='e14cefea108f24c26419ea30d048612d'
```

## 博客 serve 拓扑（2026-08 整合后）

**单 Pages 项目 + 单 DNS 记录**，8 种语言合并在一个站点里，无代理层：

```
blog.0xwelt.com → CNAME → blog-5up.pages.dev（Pages 项目 blog，唯一 DNS 记录）
  ├── /        → zh 构建产物（config root: /）
  ├── /en/     → en 构建产物（config root: /en/）
  ├── /ja/ /ko/ /ar/ /fr/ /de/ /it/ → 各语言子目录
```

- **构建**：`npm run build:all` → `bin/build-all.sh`，逐个语言 symlink + hexo generate 后合并到 `public-all/`（zh 在根，其余在 `/<lang>/`）
- **部署**：push 到 GitHub `main` 触发 Pages 自动构建（build_command: `npm run build:all`，destination: `public-all`）
- **语言切换**：前端 `language-switcher.js` 纯路径变换（`blog.0xwelt.com/{lang}/xxx`），无需后端
- 旧架构（8 个 Pages 项目 + blog-proxy Worker 反代）已于 2026-08 清理退役
- **wrangler**：作为 my-blog 的 `devDependency` 保留（本地预览 / 偶发直传）；日常部署只靠 `git push`，不依赖 CLI

## 新增一种语言（无需新建 Pages 项目）

```bash
# 1. 新增 configs/_config.xx.yml + configs/_config.butterfly.xx.yml（root: /xx/）
# 2. 新建 posts/posts-xx/ 目录放该语言文章
# 3. 在 bin/build-all.sh 的 LANGS 变量加 xx
# 4. git push → Pages 自动构建部署，新语言在 https://blog.0xwelt.com/xx/
```

## 本站排障：站点打不开时

```bash
# 1. Pages 部署是否成功（项目名固定为 blog）
cf pages projects deployments list --project-name blog
# 2. DNS 是否指向正确（应只有一条 CNAME blog.0xwelt.com → blog-5up.pages.dev）
cf dns records list -z 0xwelt.com
# 3. 自定义域名是否 active
cf pages projects domains list --project-name blog
# 4. 实测响应（各语言前缀）
curl -sI https://blog.0xwelt.com/ && curl -sI https://blog.0xwelt.com/en/
```

## 项目专属踩坑

1. **构建脚本必须用 bash**：`bin/build.sh` / `bin/build-all.sh` 使用 `${BASH_SOURCE[0]}`，本地 `sh`（dash）会报 Bad substitution；Pages 构建环境 `sh=bash`，线上正常。本地请用 `bash bin/build-all.sh` 或 `npm run build:all`。
