# my-blog

Hexo 8 多语言博客，8 种语言（zh/en/ja/ko/ar/fr/de/it）合并在**单个 Cloudflare Pages 项目**中 serve。

## i18n

### Build & Serve（2026-08 整合后）

- **单 Pages 项目** `blog`（`blog-5up.pages.dev`），自定义域名 `blog.0xwelt.com`（唯一 DNS 记录：CNAME）
  - `/` → 中文（默认语言，无前缀）
  - `/{lang}/` → 其他 7 种语言
  - 无 Worker、无代理层（旧架构 blog-proxy + 8 个 Pages 项目已退役）
- **合并构建**：`npm run build:all` → `scripts/build-all.sh`
  - 逐个语言切换 config symlink + `hexo generate`，产物合并到 `public-all/`（zh 在根，其余在 `/<lang>/`）
  - 新增语言：加 `configs/_config.xx.yml` + `posts/posts-xx/`，再把 xx 加进 build-all.sh 的 `LANGS` 即可，**无需新建 Pages 项目**
- **部署**：push 到 GitHub `main` → Pages 自动构建（build command: `npm run build:all`，destination: `public-all`），无需手动部署
- 基础设施管理用 cf CLI，详见 `my-blog/.agents/skills/cloudflare-cf/SKILL.md`

- **Hexo 配置**：
  - 中文版：`root: /`（根路径，无语言前缀）
  - 非中文语言：`root: /{lang}/`（带语言前缀，统一配置）
  - 各语言配置在 `configs/_config.{lang}.yml`，通过 symlink 切换

### Language Switcher

- 固定重定向到 `blog.0xwelt.com`（不使用相对路径）
- `switchLanguage('zh')`: 移除语言前缀，`blog.0xwelt.com/{lang}/xxx` → `blog.0xwelt.com/xxx`
- `switchLanguage('lang')`: 添加语言前缀，`blog.0xwelt.com/xxx` → `blog.0xwelt.com/{lang}/xxx`（非中文语言统一处理）
- 支持的语言在 `source/js/language-switcher-utils.js` 的 `supportedLanguageCodes` 中配置
- 核心逻辑提取到独立模块，浏览器脚本和测试共享同一套逻辑

## 本地开发

```bash
npm install
npm run server -- zh     # 本地预览中文版（其他语言同理：npm run server -- en）
npm run build:all        # 合并构建全部语言到 public-all/
npm test                 # 运行测试（language-switcher 等）
```