---
title: 搭建个人博客
date: 2026-01-14 12:00:00
cover: https://0xwelt-public-images.oss-cn-shanghai.aliyuncs.com/images/default_cover.jpg
categories:
  - tech
tags:
  - tech
---

这是我第一次搭建个人博客，本文记录整个搭建过程以及用到的参考资料，践行 learn in public 的理念。

## Hexo 框架

在开始之前，我通过 [Kimi](https://www.kimi.com/share/19bbcf69-c152-8446-8000-0000cce9efbe) 调研了主流的个人博客框架，最终选择了 **Hexo + GitHub Pages** 作为博客的技术栈。

Hexo 是一个快速、简洁且高效的静态博客框架，配合 GitHub Pages 可以免费托管，非常适合个人博客的需求。更多信息可参考 [Hexo 官网](https://hexo.io/zh-cn/)。

## Butterfly 主题

在确定框架后，我开始寻找合适的主题。经过对比多个 Hexo 主题（参考了[这篇主题推荐文章](https://luhuadong.com/hexo/hexo-themes)），最终选择了 **Butterfly** 主题，主要看中其丰富的定制化选项和美观的界面设计。

Butterfly 主题的详细信息可参考 [Butterfly 官方文档](https://butterfly.js.org/)。

### 主题美化

我完整阅读了 Butterfly 的[主题配置文档](https://butterfly.js.org/posts/4aa8abbe/)，根据个人喜好调整了相关设置，并添加了自定义图片资源，让博客更符合个人风格。

### Giscus 评论系统

评论系统选择了 **Giscus**，这是一个基于 GitHub Discussions 的评论系统，配置简单且无需额外服务。由于 Butterfly 主题原生支持 Giscus，在配置主题时便一并完成了评论系统的设置。详细配置方法可参考 [Butterfly 的 Giscus 配置文档](https://butterfly.js.org/posts/4aa8abbe/)。

更多信息可参考 [Giscus 官网](https://giscus.app/zh-CN#category)。

### iconfont 图标

在配置社交图标时，我参考了 Butterfly 文档的[social](https://butterfly.js.org/posts/4aa8abbe/#%E7%A4%BE%E4%BA%A4%E5%9C%96%E6%A8%99)，使用 [Font Awesome](https://fontawesome.com/) 添加了知乎和邮箱图标。然而，Font Awesome 中并没有提供小红书图标。

参考 Butterfly 文档的[icon](https://butterfly.js.org/posts/4073eda/) 章节，最终在 [iconfont](https://www.iconfont.cn/)（阿里巴巴的图标库）找到了小红书图标，并将其用于博客的社交链接。在 `inject` 配置中添加了图标样式链接后，发现 iconfont 图标的大小、位置和动效与 Font Awesome 图标存在差异。我让 cursor 帮我通过添加自定义 CSS，统一了图标样式，并为其添加了与 Font Awesome 图标一致的旋转动效。

## i18n 国际化

作为 AI native 的博客，我计划支持多语言，目前已支持中文和英文。

### 架构设计

为了实现多语言支持，我采用了**多个 Cloudflare Pages + 一个 Cloudflare Worker 代理**的架构：

1. **多语言 Cloudflare Pages**：每种语言部署一个独立的 Cloudflare Page
   - 中文：`blog-zh.0xwelt.com`（默认语言，路径不带前缀）
   - 其他语言：`blog-{lang}.0xwelt.com`（路径带 `/{lang}/` 前缀）

2. **Cloudflare Worker 代理（blog-proxy）**：统一入口，根据路径路由到对应的语言站点
   - 主域名：`blog.0xwelt.com`
   - 路由规则：
     - `blog.0xwelt.com/xxx` → 代理到 `blog-zh.0xwelt.com/xxx`（中文，默认）
     - `blog.0xwelt.com/{lang}/xxx` → 代理到 `blog-{lang}.0xwelt.com/{lang}/xxx`（其他语言）

3. **Hexo 配置**：每种语言使用独立的配置文件
   - 中文：`root: /`（无前缀，根路径）
   - 其他语言：`root: /{lang}/`（带语言前缀）

### 语言切换

通过前端 JavaScript（`source/js/language-switcher.js`）实现客户端语言切换，所有切换都通过 `blog.0xwelt.com` 统一域名完成，保持 URL 的一致性。

## 图床：阿里云 OSS + PicGo

写博客时需要插入图片，我选择用图床存储图片并生成外链。在参考 [Kimi](https://www.kimi.com/share/19c8b1ea-3db2-8970-8000-0000a0d0e185) 的建议后，购买了阿里云 OSS 资源包做云存储，并配合 **[PicGo](https://github.com/Molunerfinn/PicGo)** 桌面客户端做上传。整个配置流程全部照抄上面的 kimi 攻略，一次成功。
