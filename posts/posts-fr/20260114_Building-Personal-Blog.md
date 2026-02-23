---
title: Créer un blog personnel
date: 2026-01-14 12:00:00
categories:
  - tech
tags:
  - tech
---

C'est la première fois que je crée un blog personnel, et cet article documente tout le processus de création et les matériaux de référence utilisés, mettant en pratique le concept de learn in public.

## Framework Hexo

Avant de commencer, j'ai recherché les frameworks de blog personnel populaires via [Kimi](https://www.kimi.com/share/19bbcf69-c152-8446-8000-0000cce9efbe), et j'ai finalement choisi **Hexo + GitHub Pages** comme stack technologique du blog.

Hexo est un framework de blog statique rapide, concis et efficace, qui peut être hébergé gratuitement avec GitHub Pages, très adapté aux besoins des blogs personnels. Pour plus d'informations, consultez le [site officiel de Hexo](https://hexo.io/fr/).

## Thème Butterfly

Après avoir déterminé le framework, j'ai commencé à chercher un thème approprié. Après avoir comparé plusieurs thèmes Hexo (j'ai consulté [cet article de recommandation de thèmes](https://luhuadong.com/hexo/hexo-themes)), j'ai finalement choisi le thème **Butterfly**, principalement pour ses riches options de personnalisation et son design d'interface élégant.

Pour des informations détaillées sur le thème Butterfly, consultez la [documentation officielle de Butterfly](https://butterfly.js.org/).

### Personnalisation du thème

J'ai lu entièrement la [documentation de configuration du thème](https://butterfly.js.org/posts/4aa8abbe/) de Butterfly, ajusté les paramètres pertinents selon mes préférences personnelles et ajouté des ressources d'images personnalisées pour rendre le blog plus conforme à mon style personnel.

### Système de commentaires Giscus

J'ai choisi **Giscus** comme système de commentaires, un système de commentaires basé sur GitHub Discussions, simple à configurer et sans besoin de services supplémentaires. Comme le thème Butterfly prend en charge Giscus nativement, j'ai terminé la configuration du système de commentaires lors de la configuration du thème. Pour la méthode de configuration détaillée, consultez la [documentation de configuration Giscus de Butterfly](https://butterfly.js.org/posts/4aa8abbe/).

Pour plus d'informations, consultez le [site officiel de Giscus](https://giscus.app/fr-FR#category).

### Icônes iconfont

Lors de la configuration des icônes sociales, j'ai consulté [social](https://butterfly.js.org/posts/4aa8abbe/#%E7%A4%BE%E4%BA%A4%E5%9C%96%E6%A8%99) dans la documentation de Butterfly, utilisé [Font Awesome](https://fontawesome.com/) pour ajouter des icônes Zhihu et email. Cependant, Font Awesome ne fournit pas d'icône Xiaohongshu.

En référence à la section [icon](https://butterfly.js.org/posts/4073eda/) de la documentation de Butterfly, j'ai finalement trouvé l'icône Xiaohongshu dans [iconfont](https://www.iconfont.cn/) (la bibliothèque d'icônes d'Alibaba) et l'ai utilisée pour les liens sociaux du blog. Après avoir ajouté le lien de style d'icône dans la configuration `inject`, j'ai découvert que la taille, la position et les effets d'animation des icônes iconfont diffèrent des icônes Font Awesome. J'ai demandé à cursor de m'aider en ajoutant du CSS personnalisé pour unifier le style des icônes et ajouter des effets d'animation rotatifs cohérents avec les icônes Font Awesome.

## i18n Internationalisation

En tant que blog AI native, j'ai prévu le support multilingue, et je prends actuellement en charge le chinois et l'anglais.

### Conception de l'architecture

Pour réaliser le support multilingue, j'ai adopté une architecture de **plusieurs Cloudflare Pages + un proxy Cloudflare Worker**:

1. **Cloudflare Pages multilingues**: chaque langue est déployée comme une Cloudflare Page indépendante
   - Chinois: `blog-zh.0xwelt.com` (langue par défaut, chemin sans préfixe)
   - Autres langues: `blog-{lang}.0xwelt.com` (chemin avec préfixe `/{lang}/`)

2. **Proxy Cloudflare Worker (blog-proxy)**: point d'entrée unifié, routage vers le site de langue correspondant en fonction du chemin
   - Domaine principal: `blog.0xwelt.com`
   - Règles de routage:
     - `blog.0xwelt.com/xxx` → proxy vers `blog-zh.0xwelt.com/xxx` (chinois, par défaut)
     - `blog.0xwelt.com/{lang}/xxx` → proxy vers `blog-{lang}.0xwelt.com/{lang}/xxx` (autres langues)

3. **Configuration Hexo**: chaque langue utilise un fichier de configuration indépendant
   - Chinois: `root: /` (sans préfixe, chemin racine)
   - Autres langues: `root: /{lang}/` (avec préfixe de langue)

### Changement de langue

J'ai implémenté le changement de langue côté client via JavaScript frontend (`source/js/language-switcher.js`), et tous les changements sont effectués via le domaine unifié `blog.0xwelt.com` pour maintenir la cohérence de l'URL.

## Hébergement d'images : Aliyun OSS + PicGo

Pour insérer des images dans les articles, j'utilise un hébergeur d'images pour les stocker et générer des liens externes. En suivant le [guide Kimi](https://www.kimi.com/share/19c8b1ea-3db2-8970-8000-0000a0d0e185), j'ai acheté un forfait de ressources Aliyun OSS pour le stockage et j'utilise le client desktop **[PicGo](https://github.com/Molunerfinn/PicGo)** pour les téléversements. J'ai suivi la procédure du guide Kimi et tout a fonctionné du premier coup.
