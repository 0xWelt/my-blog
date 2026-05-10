---
title: Persönliches Blog erstellen
date: 2026-01-14 12:00:00
cover: https://0xwelt-public-images.oss-cn-shanghai.aliyuncs.com/images/default_cover.jpg
categories:
  - tech
tags:
  - tech
---

Dies ist das erste Mal, dass ich ein persönliches Blog erstelle, und dieser Artikel dokumentiert den gesamten Erstellungsprozess und die verwendeten Referenzmaterialien, um das Konzept von learn in public zu praktizieren.

## Hexo-Framework

Vor dem Start habe ich die gängigen persönlichen Blog-Frameworks über [Kimi](https://www.kimi.com/share/19bbcf69-c152-8446-8000-0000cce9efbe) recherchiert und mich schließlich für **Hexo + GitHub Pages** als Technologie-Stack für das Blog entschieden.

Hexo ist ein schnelles, prägnantes und effizientes statisches Blog-Framework, das kostenlos mit GitHub Pages gehostet werden kann und sehr gut für die Anforderungen persönlicher Blogs geeignet ist. Weitere Informationen finden Sie auf der [offiziellen Hexo-Website](https://hexo.io/de/).

## Butterfly-Theme

Nach der Festlegung des Frameworks begann ich, nach einem passenden Theme zu suchen. Nach dem Vergleich mehrerer Hexo-Themes (ich habe mich auf [diesen Theme-Empfehlungsartikel](https://luhuadong.com/hexo/hexo-themes) bezogen) habe ich mich schließlich für das **Butterfly**-Theme entschieden, hauptsächlich wegen seiner reichhaltigen Anpassungsoptionen und des eleganten Interface-Designs.

Detaillierte Informationen zum Butterfly-Theme finden Sie in der [offiziellen Butterfly-Dokumentation](https://butterfly.js.org/).

### Theme-Verschönerung

Ich habe die [Theme-Konfigurationsdokumentation](https://butterfly.js.org/posts/4aa8abbe/) von Butterfly vollständig gelesen, die relevanten Einstellungen nach meinen persönlichen Vorlieben angepasst und benutzerdefinierte Bildressourcen hinzugefügt, um das Blog besser an meinen persönlichen Stil anzupassen.

### Giscus-Kommentarsystem

Als Kommentarsystem habe ich **Giscus** gewählt, ein Kommentarsystem basierend auf GitHub Discussions, das einfach zu konfigurieren ist und keine zusätzlichen Dienste erfordert. Da das Butterfly-Theme Giscus nativ unterstützt, habe ich die Konfiguration des Kommentarsystems während der Theme-Konfiguration abgeschlossen. Für die detaillierte Konfigurationsmethode siehe die [Giscus-Konfigurationsdokumentation von Butterfly](https://butterfly.js.org/posts/4aa8abbe/).

Weitere Informationen finden Sie auf der [offiziellen Giscus-Website](https://giscus.app/de-DE#category).

### iconfont-Icons

Bei der Konfiguration der Social-Icons habe ich mich auf [social](https://butterfly.js.org/posts/4aa8abbe/#%E7%A4%BE%E4%BA%A4%E5%9C%96%E6%A8%99) in der Butterfly-Dokumentation bezogen und [Font Awesome](https://fontawesome.com/) verwendet, um Zhihu- und E-Mail-Icons hinzuzufügen. Font Awesome bietet jedoch kein Xiaohongshu-Icon.

Mit Bezug auf den Abschnitt [icon](https://butterfly.js.org/posts/4073eda/) in der Butterfly-Dokumentation habe ich schließlich das Xiaohongshu-Icon in [iconfont](https://www.iconfont.cn/) (die Icon-Bibliothek von Alibaba) gefunden und es für die Social-Links des Blogs verwendet. Nach dem Hinzufügen des Icon-Stil-Links in der `inject`-Konfiguration stellte ich fest, dass Größe, Position und Animationseffekte der iconfont-Icons von den Font Awesome-Icons abweichen. Ich ließ cursor mir helfen, indem ich benutzerdefiniertes CSS hinzufügte, um den Icon-Stil zu vereinheitlichen und rotierende Animationseffekte hinzuzufügen, die mit den Font Awesome-Icons übereinstimmen.

## i18n Internationalisierung

Als AI-native-Blog habe ich mehrsprachige Unterstützung geplant und unterstütze derzeit Chinesisch und Englisch.

### Architektur-Design

Um mehrsprachige Unterstützung zu realisieren, habe ich eine Architektur aus **mehreren Cloudflare Pages + einem Cloudflare Worker-Proxy** übernommen:

1. **Mehrsprachige Cloudflare Pages**: Jede Sprache wird als unabhängige Cloudflare Page bereitgestellt
   - Chinesisch: `blog-zh.0xwelt.com` (Standardsprache, Pfad ohne Präfix)
   - Andere Sprachen: `blog-{lang}.0xwelt.com` (Pfad mit `/{lang}/`-Präfix)

2. **Cloudflare Worker-Proxy (blog-proxy)**: Einheitlicher Einstiegspunkt, Routing zur entsprechenden Sprach-Site basierend auf dem Pfad
   - Hauptdomain: `blog.0xwelt.com`
   - Routing-Regeln:
     - `blog.0xwelt.com/xxx` → Proxy zu `blog-zh.0xwelt.com/xxx` (Chinesisch, Standard)
     - `blog.0xwelt.com/{lang}/xxx` → Proxy zu `blog-{lang}.0xwelt.com/{lang}/xxx` (andere Sprachen)

3. **Hexo-Konfiguration**: Jede Sprache verwendet eine unabhängige Konfigurationsdatei
   - Chinesisch: `root: /` (ohne Präfix, Root-Pfad)
   - Andere Sprachen: `root: /{lang}/` (mit Sprachpräfix)

### Sprachumschaltung

Ich habe die clientseitige Sprachumschaltung über Frontend-JavaScript (`source/js/language-switcher.js`) implementiert, und alle Umschaltungen werden über die einheitliche Domain `blog.0xwelt.com` durchgeführt, um die Konsistenz der URL zu gewährleisten.

## Bildhosting: Aliyun OSS + PicGo

Beim Schreiben von Blogbeiträgen muss ich Bilder einbinden; dafür nutze ich einen Bildhoster zum Speichern und Erzeugen externer Links. Nach [Kimis](https://www.kimi.com/share/19c8b1ea-3db2-8970-8000-0000a0d0e185) Anleitung habe ich ein Aliyun-OSS-Ressourcenpaket für die Speicherung gekauft und verwende den **[PicGo](https://github.com/Molunerfinn/PicGo)**-Desktopclient für Uploads. Die gesamte Konfiguration habe ich anhand der Kimi-Anleitung übernommen – beim ersten Versuch erfolgreich.
