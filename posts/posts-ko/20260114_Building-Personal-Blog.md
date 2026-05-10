---
title: 개인 블로그 구축
date: 2026-01-14 12:00:00
cover: https://0xwelt-public-images.oss-cn-shanghai.aliyuncs.com/images/default_cover.jpg
categories:
  - tech
tags:
  - tech
---

이것은 제가 처음으로 개인 블로그를 구축한 것이며, 이 글은 전체 구축 과정과 사용한 참고 자료를 기록하여 learn in public의 이념을 실천합니다.

## Hexo 프레임워크

시작하기 전에 [Kimi](https://www.kimi.com/share/19bbcf69-c152-8446-8000-0000cce9efbe)를 통해 주류 개인 블로그 프레임워크를 조사했고, 최종적으로 **Hexo + GitHub Pages**를 블로그의 기술 스택으로 선택했습니다.

Hexo는 빠르고 간결하며 효율적인 정적 블로그 프레임워크로, GitHub Pages와 함께 무료 호스팅이 가능하여 개인 블로그 요구에 매우 적합합니다. 자세한 내용은 [Hexo 공식 사이트](https://hexo.io/ko/)를 참고하세요.

## Butterfly 테마

프레임워크를 결정한 후, 적합한 테마를 찾기 시작했습니다. 여러 Hexo 테마를 비교한 결과(이 [테마 추천 글](https://luhuadong.com/hexo/hexo-themes) 참고), 최종적으로 **Butterfly** 테마를 선택했으며, 주로 풍부한 커스터마이징 옵션과 아름다운 인터페이스 디자인을 중시했습니다.

Butterfly 테마의 자세한 정보는 [Butterfly 공식 문서](https://butterfly.js.org/)를 참고하세요.

### 테마 꾸미기

Butterfly의 [테마 설정 문서](https://butterfly.js.org/posts/4aa8abbe/)를 완전히 읽고, 개인 취향에 맞게 관련 설정을 조정하고 사용자 정의 이미지 리소스를 추가하여 블로그를 더 개인적인 스타일에 맞췄습니다.

### Giscus 댓글 시스템

댓글 시스템으로 **Giscus**를 선택했으며, 이는 GitHub Discussions 기반의 댓글 시스템으로 설정이 간단하고 추가 서비스가 필요하지 않습니다. Butterfly 테마가 Giscus를 기본 지원하므로 테마 설정 시 댓글 시스템 설정도 함께 완료했습니다. 자세한 설정 방법은 [Butterfly의 Giscus 설정 문서](https://butterfly.js.org/posts/4aa8abbe/)를 참고하세요.

자세한 내용은 [Giscus 공식 사이트](https://giscus.app/ko-KR#category)를 참고하세요.

### iconfont 아이콘

소셜 아이콘을 설정할 때 Butterfly 문서의 [social](https://butterfly.js.org/posts/4aa8abbe/#%E7%A4%BE%E4%BA%A4%E5%9C%96%E6%A8%99)을 참고하여 [Font Awesome](https://fontawesome.com/)을 사용해 지후(知乎)와 이메일 아이콘을 추가했습니다. 그러나 Font Awesome에는 샤오홍슈(小红书) 아이콘이 제공되지 않았습니다.

Butterfly 문서의 [icon](https://butterfly.js.org/posts/4073eda/) 섹션을 참고하여 최종적으로 [iconfont](https://www.iconfont.cn/)(알리바바의 아이콘 라이브러리)에서 샤오홍슈 아이콘을 찾아 블로그의 소셜 링크에 사용했습니다. `inject` 설정에 아이콘 스타일 링크를 추가한 후, iconfont 아이콘의 크기, 위치 및 애니메이션 효과가 Font Awesome 아이콘과 차이가 있음을 발견했습니다. cursor의 도움을 받아 사용자 정의 CSS를 추가하여 아이콘 스타일을 통일하고 Font Awesome 아이콘과 일치하는 회전 애니메이션 효과를 추가했습니다.

## i18n 국제화

AI native 블로그로서 다국어 지원을 계획했으며, 현재는 중국어와 영어를 지원합니다.

### 아키텍처 설계

다국어 지원을 구현하기 위해 **여러 개의 Cloudflare Pages + 하나의 Cloudflare Worker 프록시** 아키텍처를 채택했습니다:

1. **다국어 Cloudflare Pages**: 각 언어를 독립적인 Cloudflare Page로 배포
   - 중국어: `blog-zh.0xwelt.com`(기본 언어, 경로에 접두사 없음)
   - 기타 언어: `blog-{lang}.0xwelt.com`(경로에 `/{lang}/` 접두사 포함)

2. **Cloudflare Worker 프록시(blog-proxy)**: 경로에 따라 해당 언어 사이트로 라우팅하는 통합 진입점
   - 메인 도메인: `blog.0xwelt.com`
   - 라우팅 규칙:
     - `blog.0xwelt.com/xxx` → `blog-zh.0xwelt.com/xxx`로 프록시(중국어, 기본값)
     - `blog.0xwelt.com/{lang}/xxx` → `blog-{lang}.0xwelt.com/{lang}/xxx`로 프록시(기타 언어)

3. **Hexo 설정**: 각 언어가 독립적인 설정 파일 사용
   - 중국어: `root: /`(접두사 없음, 루트 경로)
   - 기타 언어: `root: /{lang}/`(언어 접두사 포함)

### 언어 전환

프론트엔드 JavaScript(`source/js/language-switcher.js`)를 통해 클라이언트 측 언어 전환을 구현했으며, 모든 전환은 `blog.0xwelt.com` 통합 도메인을 통해 완료되어 URL의 일관성을 유지합니다.

## 이미지 호스팅: 알리云 OSS + PicGo

블로그에 이미지를 넣기 위해 이미지를 저장하고 외부 링크를 만들 이미지 호스팅을 사용합니다. [Kimi](https://www.kimi.com/share/19c8b1ea-3db2-8970-8000-0000a0d0e185) 가이드를 참고해 알리云 OSS 리소스 팩을 구매했고, **[PicGo](https://github.com/Molunerfinn/PicGo)** 데스크톱 클라이언트로 업로드합니다. 설정은 위 Kimi 가이드대로 진행했고 한 번에 성공했습니다.
