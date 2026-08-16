---
name: cloudflare-cf
description: 使用 Cloudflare 官方统一 CLI（cf）管理博客托管基础设施：Pages 项目、Worker 路由、DNS 记录、Zone 域名。当用户需要操作 Cloudflare 资源、查询/修改 0xwelt.com 的 DNS、创建新语言 Pages 项目、查看部署状态、排查博客站点托管问题时触发。触发词包括"cloudflare"、"cf CLI"、"pages"、"worker"、"dns"、"0xwelt.com"、"图床以外的基础设施"以及 my-blog 项目中与 Cloudflare 托管相关的任务。
---

# Cloudflare cf CLI（博客基础设施管理）

Cloudflare 官方统一 CLI，覆盖全部产品（~3000 个 API 操作），专为 AI agent 设计：全 JSON 输出、统一命令动词、`agent-context`/MCP 工具定义。

## 安装与认证

- 已全局安装：`cf v0.6.0`（路径 `~/.nvm/versions/node/v24.13.0/bin/cf`，需 Node.js 22+）
- **认证用 API Token**（`CLOUDFLARE_API_TOKEN` 环境变量），已写入 `~/.zshrc` 和 `~/.bashrc`
- ⚠️ **不要用 `cf auth login` 浏览器 OAuth**：WSL 下回调端口 8877 无法监听，流程会卡死
- 常用环境变量（避免每条命令重复传参）：

```bash
export CLOUDFLARE_API_TOKEN='cfut_...'   # 已持久化，新 shell 自动生效
export CLOUDFLARE_ACCOUNT_ID='bd45de5571a7c2900fab29f2152e16ec'
export CLOUDFLARE_ZONE_ID='e14cefea108f24c26419ea30d048612d'

cf auth whoami   # 验证认证 → {"authenticated": true, ...}
```

## 当前项目账号信息（0xWelt 博客）

| 项目 | 值 |
|---|---|
| 账号 | bd45de5571a7c2900fab29f2152e16ec（standard 计划） |
| Zone | 0xwelt.com（e14cefea108f24c26419ea30d048612d，active） |
| Worker | blog-proxy（唯一 Worker） |
| Pages | blog-zh/en/ja/ko/ar/fr/de/it（8 个语言站，GitHub 源自动构建） |

## 博客 serve 拓扑（实测确认）

```
blog.0xwelt.com（入口）
  └── Workers 路由: blog.0xwelt.com/* → blog-proxy（按语言前缀反代，地址栏不变）
        ├── /zh → blog-zh.0xwelt.com → CNAME → blog-zh-ak4.pages.dev
        ├── /en → blog-en.0xwelt.com → CNAME → my-blog-en.pages.dev
        ├── /ja /ko /ar /fr /de /it → 各自 CNAME → *.pages.dev
```

- DNS 记录共 9 条：`blog.0xwelt.com` A 记录指向占位 IP 192.3.2.1（proxy 开启，流量实际走 Worker），其余 8 条 CNAME 指向各 pages.dev
- 各语言 Pages 项目均为 **GitHub 源自动构建**（github:push 触发），日常更新靠 git push，无需 CLI 上传

## 常用命令速查

```bash
# 认证与账号
cf auth whoami
cf accounts list

# Zone / 域名
cf zones list
cf zones get 0xwelt.com

# DNS 记录（-z 指定 zone；需 token 有 Zone→DNS 权限）
cf dns records list -z 0xwelt.com
cf dns records create -z 0xwelt.com --name blog-xx.0xwelt.com --type CNAME --content xxx.pages.dev --proxied
cf dns records edit -z 0xwelt.com <record-id> ...
cf dns records delete -z 0xwelt.com <record-id>

# Pages 项目
cf pages projects list
cf pages projects get <project-name>
cf pages projects create <project-name> [--build-config-build-command ...]
cf pages projects deployments list --project-name blog-zh
cf pages projects domains list --project-name blog-zh

# Workers
cf workers scripts list
cf workers routes list -z 0xwelt.com
```

## Agent 使用最佳实践

- **输出全 JSON**：所有命令 stdout 只输出 JSON，管道接 `jq` 或 python 解析（状态信息在 stderr）
- **写操作先 `--dry-run`**：create/update/delete 前先 dry-run 验证
- **`cf agent-context <product>`**：输出某产品的完整 agent 使用手册（如 `cf agent-context pages`）
- **`cf schema <command>`**：查看某命令的请求/响应 API schema，避免猜参数
- **`cf tools`**：获取 MCP 工具定义，可直接接入 coding agent
- **统一动词**：`get/list/create/edit/delete`，无 info/show 等变体
- **上下文解析优先级**：CLOUDFLARE_ACCOUNT_ID 环境变量 > 项目 .cfrc > ~/.config/cf/config.json

## cf vs wrangler 分工（本项目现状）

| 操作 | 工具 |
|---|---|
| 资源管理（DNS/Zone/Pages 项目/Worker 路由/账号） | **cf** |
| Pages 静态文件上传（hexo 产物直传） | wrangler（`wrangler pages deploy ./public`；cf 暂无此命令） |
| 本地开发预览 | wrangler（`wrangler dev`/`pages dev` 成熟） |
| blog-proxy Worker 部署 | wrangler（`npm run blog-proxy:deploy`）；cf `cf deploy` 可尝鲜（preview） |

cf 是 wrangler 的超集演进（technical preview），未来会整合 wrangler 全部功能；当前并轨使用：**cf 管账号资源，wrangler 管项目构建部署**。wrangler 作为 my-blog 的 devDependency 保留。

## 踩坑记录

1. **WSL 下 OAuth 回调失效**：`cf auth login` 打印的浏览器授权链接重定向到 `localhost:8877`，但该端口在 WSL 侧从不监听（浏览器显示成功但 cf 收不到 code）。→ 一律用 API Token。
2. **DNS 403**：token 缺 `Zone → DNS → Edit` 权限时，`cf dns records list` 报 `[10000] Authentication error 403`。→ 在 dash.cloudflare.com/profile/api-tokens 补权限（token 值不变，权限即时生效）。
3. **A 记录占位 IP**：blog.0xwelt.com 的 A 记录 192.3.2.1 是挂 Worker 路由的常规做法，不要删改。

## 完整工作流示例：新增一个语言站

```bash
export CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" CLOUDFLARE_ACCOUNT_ID='bd45de5571a7c2900fab29f2152e16ec'

# 1. 创建 Pages 项目（GitHub 源，hexo 构建）
cf pages projects create blog-xx --build-config-build-command "npm run build -- zh" --build-config-destination-dir public

# 2. 绑定自定义域名（在 Pages 项目里加 domain）
cf pages projects domains create blog-xx --name blog-xx.0xwelt.com

# 3. 加 DNS CNAME 记录
cf dns records create -z 0xwelt.com --name blog-xx.0xwelt.com --type CNAME --content <pages-dev-hostname> --proxied

# 4. 更新 blog-proxy 的 supportedLanguages 映射 → 部署 Worker（wrangler）
cd my-blog/blog-proxy && wrangler deploy
```

## 排障：站点打不开时

```bash
# 1. Worker 路由是否在
cf workers routes list -z 0xwelt.com
# 2. Pages 部署是否成功（看 production 环境）
cf pages projects deployments list --project-name blog-zh
# 3. DNS 是否指向正确
cf dns records list -z 0xwelt.com | grep blog-zh
# 4. 实测响应
curl -sI https://blog.0xwelt.com/zh/
```
