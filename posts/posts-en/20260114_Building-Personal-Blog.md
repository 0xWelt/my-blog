---
title: Building Personal Blog
date: 2026-01-14 12:00:00
categories:
  - tech
tags:
  - tech
---

This is my first time building a personal blog. This article documents the entire setup process and the reference materials used, following the principle of "learn in public".

## Hexo Framework

Before starting, I researched mainstream personal blog frameworks through [Kimi](https://www.kimi.com/share/19bbcf69-c152-8446-8000-0000cce9efbe) and ultimately chose **Hexo + GitHub Pages** as the tech stack for the blog.

Hexo is a fast, concise, and efficient static blog framework. Combined with GitHub Pages for free hosting, it's perfect for personal blog needs. For more information, refer to the [Hexo official website](https://hexo.io/).

## Butterfly Theme

After determining the framework, I started looking for a suitable theme. After comparing multiple Hexo themes (referenced [this theme recommendation article](https://luhuadong.com/hexo/hexo-themes)), I ultimately chose the **Butterfly** theme, mainly for its rich customization options and beautiful interface design.

For detailed information about the Butterfly theme, refer to the [Butterfly official documentation](https://butterfly.js.org/).

### Theme Customization

I thoroughly read Butterfly's [theme configuration documentation](https://butterfly.js.org/posts/4aa8abbe/) and adjusted the relevant settings according to personal preferences, adding custom image resources to make the blog more aligned with my personal style.

### Giscus Comment System

I chose **Giscus** as the comment system, which is a comment system based on GitHub Discussions, simple to configure and requiring no additional services. Since the Butterfly theme natively supports Giscus, I completed the comment system setup while configuring the theme. For detailed configuration methods, refer to [Butterfly's Giscus configuration documentation](https://butterfly.js.org/posts/4aa8abbe/).

For more information, refer to the [Giscus official website](https://giscus.app/).

### iconfont Icons

When configuring social icons, I referenced Butterfly documentation's [social](https://butterfly.js.org/posts/4aa8abbe/#%E7%A4%BE%E4%BA%A4%E5%9C%96%E6%A8%99) section, using [Font Awesome](https://fontawesome.com/) to add Zhihu and email icons. However, Font Awesome does not provide a Xiaohongshu icon.

Referencing Butterfly documentation's [icon](https://butterfly.js.org/posts/4073eda/) chapter, I finally found the Xiaohongshu icon in [iconfont](https://www.iconfont.cn/) (Alibaba's icon library) and used it for the blog's social links. After adding the icon style link in the `inject` configuration, I found that iconfont icons had differences in size, position, and animation effects compared to Font Awesome icons. I asked cursor to help me unify the icon styles by adding custom CSS and adding the same rotation animation effect as Font Awesome icons.

## i18n Internationalization

As an AI-native blog, I plan to support multiple languages. Currently, Chinese and English are supported.

### Architecture Design

To achieve multi-language support, I adopted an architecture of **multiple Cloudflare Pages + one Cloudflare Worker proxy**:

1. **Multi-language Cloudflare Pages**: Each language is deployed as an independent Cloudflare Page
   - Chinese: `blog-zh.0xwelt.com` (default language, paths without prefix)
   - Other languages: `blog-{lang}.0xwelt.com` (paths with `/{lang}/` prefix)

2. **Cloudflare Worker Proxy (blog-proxy)**: Unified entry point that routes to corresponding language sites based on paths
   - Main domain: `blog.0xwelt.com`
   - Routing rules:
     - `blog.0xwelt.com/xxx` → proxy to `blog-zh.0xwelt.com/xxx` (Chinese, default)
     - `blog.0xwelt.com/{lang}/xxx` → proxy to `blog-{lang}.0xwelt.com/{lang}/xxx` (other languages)

3. **Hexo Configuration**: Each language uses an independent configuration file
   - Chinese: `root: /` (no prefix, root path)
   - Other languages: `root: /{lang}/` (with language prefix)

### Language Switching

Client-side language switching is implemented through frontend JavaScript (`source/js/language-switcher.js`). All switching is done through the unified domain `blog.0xwelt.com` to maintain URL consistency.
