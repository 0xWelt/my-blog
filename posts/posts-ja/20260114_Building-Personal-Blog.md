---
title: 個人ブログの構築
date: 2026-01-14 12:00:00
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

AIネイティブブログとして、複数言語をサポートする予定です。現在、日本語のみサポートされています。

- [x] 完了
