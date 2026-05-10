---
title: Costruire un blog personale
date: 2026-01-14 12:00:00
cover: https://0xwelt-public-images.oss-cn-shanghai.aliyuncs.com/images/default_cover.jpg
categories:
  - tech
tags:
  - tech
---

Questa è la prima volta che costruisco un blog personale, e questo articolo documenta l'intero processo di costruzione e i materiali di riferimento utilizzati, mettendo in pratica il concetto di learn in public.

## Framework Hexo

Prima di iniziare, ho ricercato i framework di blog personali mainstream attraverso [Kimi](https://www.kimi.com/share/19bbcf69-c152-8446-8000-0000cce9efbe), e ho infine scelto **Hexo + GitHub Pages** come stack tecnologico del blog.

Hexo è un framework di blog statico veloce, conciso ed efficiente, che può essere ospitato gratuitamente con GitHub Pages, molto adatto alle esigenze dei blog personali. Per maggiori informazioni, consultare il [sito ufficiale di Hexo](https://hexo.io/it/).

## Tema Butterfly

Dopo aver determinato il framework, ho iniziato a cercare un tema appropriato. Dopo aver confrontato diversi temi Hexo (ho fatto riferimento a [questo articolo di raccomandazione dei temi](https://luhuadong.com/hexo/hexo-themes)), ho infine scelto il tema **Butterfly**, principalmente per le sue ricche opzioni di personalizzazione e il design dell'interfaccia elegante.

Per informazioni dettagliate sul tema Butterfly, consultare la [documentazione ufficiale di Butterfly](https://butterfly.js.org/).

### Personalizzazione del tema

Ho letto completamente la [documentazione di configurazione del tema](https://butterfly.js.org/posts/4aa8abbe/) di Butterfly, ho regolato le impostazioni relative secondo le mie preferenze personali e ho aggiunto risorse di immagini personalizzate per rendere il blog più conforme al mio stile personale.

### Sistema di commenti Giscus

Ho scelto **Giscus** come sistema di commenti, un sistema di commenti basato su GitHub Discussions, semplice da configurare e senza bisogno di servizi aggiuntivi. Poiché il tema Butterfly supporta nativamente Giscus, ho completato la configurazione del sistema di commenti durante la configurazione del tema. Per il metodo di configurazione dettagliato, consultare la [documentazione di configurazione Giscus di Butterfly](https://butterfly.js.org/posts/4aa8abbe/).

Per maggiori informazioni, consultare il [sito ufficiale di Giscus](https://giscus.app/it-IT#category).

### Icone iconfont

Durante la configurazione delle icone social, ho fatto riferimento a [social](https://butterfly.js.org/posts/4aa8abbe/#%E7%A4%BE%E4%BA%A4%E5%9C%96%E6%A8%99) nella documentazione di Butterfly, ho usato [Font Awesome](https://fontawesome.com/) per aggiungere icone Zhihu ed email. Tuttavia, Font Awesome non fornisce un'icona Xiaohongshu.

Facendo riferimento alla sezione [icon](https://butterfly.js.org/posts/4073eda/) nella documentazione di Butterfly, ho infine trovato l'icona Xiaohongshu in [iconfont](https://www.iconfont.cn/) (la libreria di icone di Alibaba) e l'ho usata nei link social del blog. Dopo aver aggiunto il link dello stile dell'icona nella configurazione `inject`, ho scoperto che la dimensione, la posizione e gli effetti di animazione delle icone iconfont differiscono dalle icone Font Awesome. Ho chiesto a cursor di aiutarmi aggiungendo CSS personalizzato per unificare lo stile delle icone e aggiungere effetti di animazione rotazionale coerenti con le icone Font Awesome.

## i18n Internazionalizzazione

Come blog AI native, ho pianificato il supporto multilingue, e attualmente supporto cinese e inglese.

### Progettazione dell'architettura

Per realizzare il supporto multilingue, ho adottato un'architettura di **più Cloudflare Pages + un proxy Cloudflare Worker**:

1. **Cloudflare Pages multilingue**: ogni lingua viene distribuita come Cloudflare Page indipendente
   - Cinese: `blog-zh.0xwelt.com` (lingua predefinita, percorso senza prefisso)
   - Altre lingue: `blog-{lang}.0xwelt.com` (percorso con prefisso `/{lang}/`)

2. **Proxy Cloudflare Worker (blog-proxy)**: punto di ingresso unificato, instradamento al sito della lingua corrispondente in base al percorso
   - Dominio principale: `blog.0xwelt.com`
   - Regole di instradamento:
     - `blog.0xwelt.com/xxx` → proxy a `blog-zh.0xwelt.com/xxx` (cinese, predefinito)
     - `blog.0xwelt.com/{lang}/xxx` → proxy a `blog-{lang}.0xwelt.com/{lang}/xxx` (altre lingue)

3. **Configurazione Hexo**: ogni lingua utilizza un file di configurazione indipendente
   - Cinese: `root: /` (senza prefisso, percorso root)
   - Altre lingue: `root: /{lang}/` (con prefisso lingua)

### Cambio lingua

Ho implementato il cambio lingua lato client attraverso JavaScript frontend (`source/js/language-switcher.js`), e tutti i cambiamenti vengono completati attraverso il dominio unificato `blog.0xwelt.com` per mantenere la coerenza dell'URL.

## Hosting immagini: Aliyun OSS + PicGo

Per inserire immagini negli articoli uso un servizio di hosting per salvarle e generare link esterni. Seguendo la [guida Kimi](https://www.kimi.com/share/19c8b1ea-3db2-8970-8000-0000a0d0e185), ho acquistato un pacchetto risorse Aliyun OSS per lo storage e uso il client desktop **[PicGo](https://github.com/Molunerfinn/PicGo)** per il caricamento. Ho seguito la guida Kimi passo passo e la configurazione è andata a buon fine al primo tentativo.
