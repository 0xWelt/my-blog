# my-blog

## i18n

### Proxy & Serve

- **Cloudflare Worker Proxy** (`blog-proxy/`):
  - `blog.0xwelt.com/xxx` → 代理到 `blog-zh.0xwelt.com/xxx` (中文博客，部署在独立域名)
  - `blog.0xwelt.com/en/xxx` → 代理到 `blog-en.0xwelt.com/en/xxx` (英文博客，部署在独立域名)
  - 部署：`npm run blog-proxy:deploy` 或查看 `blog-proxy/README.md`

- **Hexo 配置**:
  - 中文版：`root: /` (根路径，无语言前缀)
  - 英文版：`root: /en/` (带语言前缀)
  - 所有链接使用相对路径（基于各自的 root 配置）

### Language Switcher

- 固定重定向到 `blog.0xwelt.com`（不使用相对路径）
- `switchLanguage('zh')`: 移除语言前缀，`blog.0xwelt.com/{lang}/xxx` → `blog.0xwelt.com/xxx`
- `switchLanguage('lang')`: 添加语言前缀，`blog.0xwelt.com/xxx` → `blog.0xwelt.com/{lang}/xxx`
