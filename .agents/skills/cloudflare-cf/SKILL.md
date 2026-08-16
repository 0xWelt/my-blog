---
name: cloudflare-cf
description: 使用 Cloudflare 官方统一 CLI（cf）管理博客托管基础设施：Pages 项目、DNS 记录、Zone 域名、部署状态。当用户需要操作 Cloudflare 资源、查询/修改 0xwelt.com 的 DNS、查看部署状态、排查博客站点托管问题时触发。触发词包括"cloudflare"、"cf CLI"、"pages"、"worker"、"dns"、"0xwelt.com"以及 my-blog 项目中与 Cloudflare 托管相关的任务。
---

# Cloudflare cf CLI（博客基础设施管理）

Cloudflare 官方统一 CLI，覆盖全部产品（~3000 个 API 操作），专为 AI agent 设计：全 JSON 输出、统一命令动词、agent-context/MCP 工具定义。

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
| Pages | **blog**（blog-5up.pages.dev，唯一项目，GitHub 源自动构建） |
| Worker | 无（blog-proxy 已退役） |

## 博客 serve 拓扑（2026-08 整合后）

**单 Pages 项目 + 单 DNS 记录**，8 种语言合并在一个站点里，无代理层：

```
blog.0xwelt.com → CNAME → blog-5up.pages.dev（Pages 项目 blog，唯一 DNS 记录）
  ├── /        → zh 构建产物（config root: /）
  ├── /en/     → en 构建产物（config root: /en/）
  ├── /ja/ /ko/ /ar/ /fr/ /de/ /it/ → 各语言子目录
```

- **构建**：`npm run build:all` → `scripts/build-all.sh`，逐个语言 symlink + hexo generate 后合并到 `public-all/`（zh 在根，其余在 `/<lang>/`）
- **部署**：push 到 GitHub main 触发 Pages 自动构建（build_command: `npm run build:all`，destination: `public-all`）
- **语言切换**：前端 `language-switcher.js` 纯路径变换（`blog.0xwelt.com/{lang}/xxx`），无需任何后端逻辑
- 旧架构（8 个 Pages 项目 + blog-proxy Worker 反代）已于 2026-08 清理退役

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
# cf 的 create/delete 用法注意：
#   create 用 --body JSON（无 --name/--type/--content 旗标）
cf dns records create -z 0xwelt.com --body '{"type":"CNAME","name":"xxx.0xwelt.com","content":"xxx.pages.dev","proxied":true}'
cf dns records delete -z 0xwelt.com <record-id> --force   # 删除需 --force

# Pages 项目
cf pages projects list
cf pages projects get blog
cf pages projects deployments list --project-name blog    # 看部署状态
cf pages projects domains list --project-name blog        # 看自定义域名
# 创建项目注意：--source-type github + --source-config-owner/repo-name + --production-branch（必需）

# Workers（已无 Worker，仅确认用）
cf workers scripts list
cf workers routes list -z 0xwelt.com
```

## Agent 使用最佳实践

- **输出全 JSON**：所有命令 stdout 只输出 JSON，管道接 `jq` 或 python 解析（状态信息在 stderr）
- **写操作先 `--dry-run`**：create/update/delete 前先 dry-run 验证
- **`cf agent-context <product>`**：输出某产品的完整 agent 使用手册（如 `cf agent-context pages`）
- **`cf schema <command>`**：查看某命令的请求/响应 API schema，避免猜参数
- **`cf tools`**：获取 MCP 工具定义，可直接接入 coding agent
- **统一动词**：`get/list/create/edit/delete`，无 info/show 等变体；删除需 `--force`
- **上下文解析优先级**：CLOUDFLARE_ACCOUNT_ID 环境变量 > 项目 .cfrc > ~/.config/cf/config.json

## cf vs wrangler 分工（本项目现状）

| 操作 | 工具 |
|---|---|
| 资源管理（DNS/Zone/Pages 项目/账号/部署状态） | **cf** |
| 本地开发预览 | wrangler（`wrangler dev`/`pages dev` 成熟） |
| 手动直传静态产物（如需） | wrangler（`wrangler pages deploy ./public-all --project-name blog`；cf 暂无此命令） |

日常部署**无需任何 CLI**：git push 触发 Pages 自动构建。wrangler 作为 my-blog 的 devDependency 保留。

## cf CLI 未覆盖时 → 回退原生 API（curl + Bearer token）

cf 是 technical preview，部分**管理类操作没有命令或参数不全**（本次整合已验证）。此时直接用 Cloudflare 原生 API：

```bash
export CLOUDFLARE_API_TOKEN='cfut_...'
export CLOUDFLARE_ACCOUNT_ID='bd45de5571a7c2900fab29f2152e16ec'
AUTH="Authorization: Bearer $CLOUDFLARE_API_TOKEN"
API="https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID"

# 删除 Worker 脚本（cf 无此命令）
curl -s -X DELETE "$API/workers/scripts/blog-proxy" -H "$AUTH"

# 删除 Pages 自定义域名（必须先于项目删除！）
curl -s -X DELETE "$API/pages/projects/blog/domains/blog.0xwelt.com" -H "$AUTH"

# 删除 Pages 项目（⚠️ 前置：项目上所有自定义域名必须先删，否则报 8000028）
curl -s -X DELETE "$API/pages/projects/blog" -H "$AUTH"
```

**要点**：
- 响应统一为 `{"success": bool, "errors": [...]}`，用 `python3 -c "import json,sys; ..."` 解析
- **删除 Pages 项目依赖顺序**：先删全部自定义域名 → 再删项目（错误码 8000028 提示此约束）
- 需要的权限：token 里 pages:write / workers:write 等（已配置）

## 踩坑记录

1. **WSL 下 OAuth 回调失效**：`cf auth login` 打印的浏览器授权链接重定向到 `localhost:8877`，但该端口在 WSL 侧从不监听（浏览器显示成功但 cf 收不到 code）。→ 一律用 API Token。
2. **DNS 403**：token 缺 `Zone → DNS → Edit` 权限时，`cf dns records list` 报 `[10000] Authentication error 403`。→ 在 dash.cloudflare.com/profile/api-tokens 补权限。
3. **cf create/delete 参数坑**：DNS create 只认 `--body` JSON；delete 必须 `--force`；pages project create 必须传 `--production-branch`，否则报 required。
4. **Pages 自定义域名切换**：先删旧 DNS 记录再建 CNAME，然后删 Worker 路由，新域名验证是异步的（状态 pending→active，几分钟），期间可能 522，等验证完成即可。
5. **构建脚本必须用 bash**：`scripts/build.sh`/build-all.sh 用了 `${BASH_SOURCE[0]}`，本地 `sh`（dash）会报 Bad substitution；Pages 构建环境 sh=bash 所以线上正常。

## 完整工作流示例：新增一种语言（无需新建 Pages 项目！）

```bash
# 1. 新增 configs/_config.xx.yml + configs/_config.butterfly.xx.yml（root: /xx/）
# 2. 新建 posts/posts-xx/ 目录放该语言文章
# 3. 在 scripts/build-all.sh 的 LANGS 变量加 xx
# 4. git push → Pages 自动构建部署，新语言在 https://blog.0xwelt.com/xx/
```

## 排障：站点打不开时

```bash
# 1. Pages 部署是否成功
cf pages projects deployments list --project-name blog
# 2. DNS 是否指向正确（应只有一条 CNAME blog.0xwelt.com → blog-5up.pages.dev）
cf dns records list -z 0xwelt.com
# 3. 自定义域名是否 active
cf pages projects domains list --project-name blog
# 4. 实测响应（各语言前缀）
curl -sI https://blog.0xwelt.com/ && curl -sI https://blog.0xwelt.com/en/
```
