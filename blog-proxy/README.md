# Blog Proxy Worker

Cloudflare Worker 用于代理博客请求，实现多语言路由。

## 功能

- `blog.0xwelt.com/xxx` → 代理到 `blog-zh.0xwelt.com/xxx` (中文博客)
- `blog.0xwelt.com/en/xxx` → 代理到 `blog-en.0xwelt.com/xxx` (英文博客)

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动本地开发服务器：
```bash
npm run blog-proxy:dev
```

## 部署到 Cloudflare

### 前置要求

1. 安装 Wrangler CLI（如果还没有安装）：
```bash
npm install -g wrangler
# 或者使用项目本地的 wrangler
npm install
```

2. 登录 Cloudflare：
```bash
wrangler login
```

### 配置步骤

1. **配置域名路由**

   编辑 `wrangler.toml`，确保 `zone_name` 或路由配置正确：
   ```toml
   routes = [
     { pattern = "blog.0xwelt.com/*", zone_name = "0xwelt.com" }
   ]
   ```

2. **部署 Worker**

   在项目根目录运行：
   ```bash
   npm run blog-proxy:deploy
   ```

   或者在 `blog-proxy` 目录下：
   ```bash
   cd blog-proxy
   wrangler deploy
   ```

3. **配置 DNS（如果还没有配置）**

   - 登录 Cloudflare Dashboard
   - 进入你的域名（0xwelt.com）的 DNS 设置
   - 确保 `blog.0xwelt.com` 的 DNS 记录存在：
     - 类型：`CNAME` 或 `A`
     - 名称：`blog`
     - 目标：指向 Cloudflare（如果使用 Cloudflare 代理）

4. **配置 Worker 路由（通过 Dashboard）**

   如果通过 Dashboard 配置：
   - 进入 Cloudflare Dashboard
   - 选择 Workers & Pages
   - 选择你的 Worker（blog-proxy）
   - 进入 Settings → Triggers
   - 添加路由：`blog.0xwelt.com/*`

### 验证部署

部署完成后，访问：
- `https://blog.0xwelt.com/` 应该显示中文博客
- `https://blog.0xwelt.com/en/` 应该显示英文博客

## 文件结构

```
blog-proxy/
├── src/
│   └── index.js      # Worker 主代码
├── wrangler.toml     # Wrangler 配置文件
└── README.md         # 本文件
```

## 注意事项

- Worker 会保持原始请求的 HTTP 方法和头部
- 查询参数会被保留
- 响应头会被传递回客户端
- 如果上游服务器出错，会返回 502 错误
