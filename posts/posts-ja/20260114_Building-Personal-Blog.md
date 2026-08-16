---
title: 個人ブログの構築
date: 2026-01-14 12:00:00
cover: https://0xwelt-public-images.oss-cn-shanghai.aliyuncs.com/images/default_cover.jpg
categories:
  - tech
tags:
  - tech
---

これは私が初めて個人ブログを構築した経験です。この記事では、「公開学習」の原則に従い、セットアッププロセス全体と使用した参考資料を記録します。

## Hexoフレームワーク

開始前に、[Kimi](https://www.kimi.com/share/19bbcf69-c152-8446-8000-0000cce9efbe)を通じて主流の個人ブログフレームワークを調査し、最終的に**Hexo + GitHub Pages**をブログの技術スタックとして選択しました。

Hexoは高速で簡潔、効率的な静的ブログフレームワークです。無料ホスティングのGitHub Pagesと組み合わせることで、個人ブログのニーズに最適です。詳細については、[Hexo公式サイト](https://hexo.io/)を参照してください。

## Butterflyテーマ

フレームワークを決定した後、適切なテーマを探し始めました。複数のHexoテーマを比較した後（[このテーマ推奨記事](https://luhuadong.com/hexo/hexo-themes)を参照）、最終的に**Butterfly**テーマを選択しました。主な理由は、豊富なカスタマイズオプションと美しいインターフェースデザインです。

Butterflyテーマの詳細については、[Butterfly公式ドキュメント](https://butterfly.js.org/)を参照してください。

### テーマのカスタマイズ

Butterflyの[テーマ設定ドキュメント](https://butterfly.js.org/posts/4aa8abbe/)を徹底的に読み、個人の好みに応じて関連設定を調整し、カスタム画像リソースを追加してブログをより個人的なスタイルに合わせました。

### Giscusコメントシステム

コメントシステムとして**Giscus**を選択しました。これはGitHub Discussionsベースのコメントシステムで、設定が簡単で追加サービスが不要です。ButterflyテーマがGiscusをネイティブサポートしているため、テーマ設定中にコメントシステムのセットアップを完了しました。詳細な設定方法については、[ButterflyのGiscus設定ドキュメント](https://butterfly.js.org/posts/4aa8abbe/)を参照してください。

詳細については、[Giscus公式サイト](https://giscus.app/)を参照してください。

### iconfontアイコン

ソーシャルアイコンを設定する際、Butterflyドキュメントの[ソーシャル](https://butterfly.js.org/posts/4aa8abbe/#%E7%A4%BE%E4%BA%A4%E5%9C%96%E6%A8%99)セクションを参照し、[Font Awesome](https://fontawesome.com/)を使用してZhihuとメールアイコンを追加しました。ただし、Font AwesomeにはXiaohongshuアイコンが提供されていません。

Butterflyドキュメントの[アイコン](https://butterfly.js.org/posts/4073eda/)章を参照し、最終的に[iconfont](https://www.iconfont.cn/)（アリババのアイコンライブラリ）でXiaohongshuアイコンを見つけ、ブログのソーシャルリンクに使用しました。`inject`設定にアイコンスタイルリンクを追加した後、iconfontアイコンがFont Awesomeアイコンとサイズ、位置、アニメーション効果に違いがあることに気づきました。cursorに依頼してカスタムCSSを追加し、Font Awesomeアイコンと同じ回転アニメーション効果を追加してアイコンスタイルを統一しました。

## i18n国際化

AIネイティブブログとして、複数言語をサポートする予定です。現在、中国語と英語をサポートしています。

### アーキテクチャの進化（2026-08 更新）

2026-08にデプロイアーキテクチャを統合・最適化しました。対応言語を2言語から8言語（中国語、英語、日本語、韓国語、アラビア語、フランス語、ドイツ語、イタリア語）に拡張し、デプロイ方式を「複数のPages + Workerプロキシ」から「単一のPagesプロジェクト」に簡素化しました：

1. **アーキテクチャ統合**：blog-proxy Workerプロキシと言語ごとに分割された8つのPagesプロジェクトを廃止し、単一のPagesプロジェクト（blog）に変更。すべての言語を1つのプロジェクトに統合
   - メインドメイン `blog.0xwelt.com` → CNAME → `blog-5up.pages.dev`
   - 中国語：`/`（プレフィックスなし）；その他の言語：`/{lang}/`（プレフィックス付き）

2. **統合ビルド（build-all）**：`scripts/build-all.sh`が各言語のHexoビルドを実行（各言語は引き続き独立した設定ファイルを使用）、成果物を`public-all/`に統合（中国語はルートディレクトリ、その他の言語は`/<lang>/`サブディレクトリ）

3. **デプロイ方式の簡素化**：GitHubのmainへのpushでPagesの自動ビルド・デプロイがトリガーされ、プロキシ層なし、手動デプロイ不要

言語切替のロジックは変更なし。引き続きフロントエンドJavaScriptにより統一ドメイン`blog.0xwelt.com`で行われます。

### アーキテクチャ設計

多言語サポートを実現するため、**複数のCloudflare Pages + 1つのCloudflare Workerプロキシ**のアーキテクチャを採用しました：

1. **多言語Cloudflare Pages**：各言語を独立したCloudflare Pageとしてデプロイ
   - 中国語：`blog-zh.0xwelt.com`（デフォルト言語、プレフィックスなしのパス）
   - その他の言語：`blog-{lang}.0xwelt.com`（`/{lang}/`プレフィックス付きのパス）

2. **Cloudflare Workerプロキシ（blog-proxy）**：パスに基づいて対応する言語サイトにルーティングする統一エントリーポイント
   - メインドメイン：`blog.0xwelt.com`
   - ルーティングルール：
     - `blog.0xwelt.com/xxx` → `blog-zh.0xwelt.com/xxx`にプロキシ（中国語、デフォルト）
     - `blog.0xwelt.com/{lang}/xxx` → `blog-{lang}.0xwelt.com/{lang}/xxx`にプロキシ（その他の言語）

3. **Hexo設定**：各言語が独立した設定ファイルを使用
   - 中国語：`root: /`（プレフィックスなし、ルートパス）
   - その他の言語：`root: /{lang}/`（言語プレフィックス付き）

### 言語切替

フロントエンドJavaScript（`source/js/language-switcher.js`）を通じてクライアントサイドの言語切替を実装しています。すべての切替は統一ドメイン`blog.0xwelt.com`を通じて行われ、URLの一貫性を維持します。

## 画像ホスティング：阿里云 OSS + PicGo

ブログを書く際に画像を挿入するため、画像を保存して外部リンクを生成する図床を利用しています。[Kimi](https://www.kimi.com/share/19c8b1ea-3db2-8970-8000-0000a0d0e185)のガイドを参考に阿里云 OSS リソースパックを購入し、**[PicGo](https://github.com/Molunerfinn/PicGo)** デスクトップクライアントでアップロードしています。設定は上記の Kimi ガイドに沿って行い、一度で成功しました。