# my-blog

## i18n

### Proxy & Serve

- **Cloudflare Worker Proxy** (`blog-proxy/`):
  - `blog.0xwelt.com/xxx` → 代理到 `blog-zh.0xwelt.com/xxx` (中文博客，默认语言)
  - `blog.0xwelt.com/{lang}/xxx` → 代理到 `blog-{lang}.0xwelt.com/{lang}/xxx` (非中文语言，统一处理)
  - 支持的语言在 `blog-proxy/src/proxy-utils.js` 的 `supportedLanguages` 中配置
  - 部署：`npm run blog-proxy:deploy` 或查看 `blog-proxy/README.md`

- **Hexo 配置**:
  - 中文版：`root: /` (根路径，无语言前缀)
  - 非中文语言：`root: /{lang}/` (带语言前缀，统一配置)
  - 所有链接使用相对路径（基于各自的 root 配置）

### Language Switcher

- 固定重定向到 `blog.0xwelt.com`（不使用相对路径）
- `switchLanguage('zh')`: 移除语言前缀，`blog.0xwelt.com/{lang}/xxx` → `blog.0xwelt.com/xxx`
- `switchLanguage('lang')`: 添加语言前缀，`blog.0xwelt.com/xxx` → `blog.0xwelt.com/{lang}/xxx` (非中文语言统一处理)
- 支持的语言在 `source/js/language-switcher-utils.js` 的 `supportedLanguageCodes` 中配置
- 核心逻辑提取到独立模块，浏览器脚本和测试共享同一套逻辑
