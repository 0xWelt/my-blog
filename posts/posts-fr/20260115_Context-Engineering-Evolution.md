---
title: Le chapitre suivant de l'écosystème - Quand le Context devient le code évolutif de l'AGI
date: 2026-01-15 00:00:00
cover: https://pic1.zhimg.com/v2-f71be8249d714baa2ee5ccaab20ae8ba_r.jpg
categories:
  - tech
tags:
  - AI
  - Context Engineering
  - AGI
---

> Auteur : 0xWelt, kimi-k2-thinking-turbo

L'AGI n'a jamais été la création en chambre d'une seule entreprise, mais un voyage bidirectionnel entre l'écosystème et l'intelligence. Dans ce voyage, le « Context » (contexte) évolue d'un concept technique vers une théorie de l'évolution co-écrite par l'ensemble de la communauté. Ce n'est pas seulement la fenêtre par laquelle les modèles comprennent le monde, mais aussi la toile sur laquelle l'écosystème étend les frontières de l'intelligence.

Aujourd'hui, nous nous tenons à un autre point d'inflexion. Alors que la communauté commence à fournir un Context structuré et contextualisé pour l'IA, plutôt que de simples Prompts ou outils, la trajectoire évolutive de l'AGI est en train d'être discrètement réécrite. Jetons d'abord un regard rétrospectif sur le chemin parcouru, et voyons comment la stratégie de gestion du Context est arrivée là où elle en est aujourd'hui.

## Chapitre 1 : L'ère des incantations — L'exploration naïve du System Prompt et du User Input

Tout a commencé pendant l'hiver de fin 2022 qui a enflammé le monde. Le premier système ChatGPT était construit sur une structure binaire simple de « System Prompt + User Input », qui définissait le modèle d'interaction homme-machine le plus fondamental. La communauté a rapidement découvert qu'en concevant soigneusement des « formules magiques » — ces User Prompts longs et précis — les modèles pouvaient démontrer des performances étonnantes au-delà de leurs capacités de base dans des domaines spécifiques.

Un cas typique était le « Academic GPT », autrefois très populaire : les utilisateurs devaient saisir de longues instructions, demander au modèle de jouer le rôle d'expert en révision d'articles académiques, et stipuler des dizaines de règles détaillées allant de la grammaire et de la logique aux formats de citation. Ces Prompts étaient comme les recettes des alchimistes, transmises de bouche à oreille au sein de la communauté.

Mais le plafond de cette approche est rapidement apparu :

- **Faible limite de capacité** : À l'époque, la capacité d'Instruction Following (suivi des instructions) du modèle en était encore à ses balbutiements, les instructions complexes étaient souvent mal exécutées
- **Faible transférabilité** : Les « formules » optimisées pour le modèle A échouaient souvent sur le modèle B, chaque nouveau modèle signifiait repartir de zéro
- **Expérience fragmentée** : Les utilisateurs devaient mémoriser et saisir un grand nombre de modèles, l'interaction était naturellement lourde

L'héritage de cette phase est presque vide, mais il laisse un aperçu crucial : les modèles ont besoin d'une guidance de capacités plus structurée, et non d'incantations textuelles fragmentées.

![Chapitre 1](https://pic1.zhimg.com/v2-f71be8249d714baa2ee5ccaab20ae8ba_r.jpg)

## Chapitre 2 : L'avancée du workflow — La tentative industrialisée du Fixed Agent Workflow

En 2023, des plateformes comme Dify.ai, Coze et LlamaIndex se sont imposées, apportant le nouveau paradigme du « workflow fixe ». Les développeurs construisaient des Agents multi-tours et concevaient des chaînes d'appels d'outils pour des scénarios spécifiques via des interfaces visuelles, associés à des bases de connaissances externes RAG, amenant réellement les LLM dans l'ère de l'Agent.

C'était un saut qualitatif : les modèles passaient des conversations uniques à des tâches de longue durée, de l'interaction textuelle pure à l'invocation d'outils. Sur cette base, la communauté a créé d'innombrables produits Agent, des assistants d'exploitation automatisée open-source aux systèmes de Q&A de bases de connaissances industrielles propriétaires. La technologie Workflow a permis aux LLM de fonctionner plus longtemps et d'acquérir plus de capacités d'interaction.

Cependant, ses défauts étaient tout aussi évidents :

- **Personnalisation cas par cas** : Chaque fonctionnalité nécessitait un workflow lourd et complet ; déployer un système de commande complet juste pour prendre un café
- **Coûts de migration élevés** : Les workflows optimisés pour GPT-4 pouvaient avoir des performances très différentes sur Claude
- **Manque de flexibilité** : Une fois le processus figé, il devenait difficile de répondre aux changements dynamiques du monde réel

Néanmoins, cette phase a laissé des actifs cognitifs précieux :

- Les interactions multiples peuvent dépasser la limite de capacité d'un seul LLM — le paradoxe « plus artificiel, plus intelligent » se manifeste ici
- L'Agent Workflow n'a pas disparu, mais a évolué. Aujourd'hui, nous utilisons des harnesses (cadres) ou des scaffolds (échafaudages) pour exprimer des concepts similaires, mais en accordant aux Agents un plus grand espace de décision autonome

![Chapitre 2](https://picx.zhimg.com/v2-5680bd96bb7f5254d6f6c535f4b455d6_r.jpg)

## Chapitre 3 : La révolution MCP — Le carnaval des outils des agents dynamiques

De fin 2024 à début 2025, une révolution silencieuse a balayé le paysage avec la norme MCP (Model Control Protocol). Ce n'est pas un concept entièrement nouveau — OpenAI avait déjà défini les spécifications Tool Declaration et Tool Call dès juin 2023 — mais MCP a réellement fait chuter le coût de mise en œuvre des outils au minimum.

La communauté a répondu de manière explosive : un grand nombre d'APIs du monde numérique ont été rapidement alignées sur le format MCP, des opérations GitHub à la commande de nourriture, des requêtes de bases de données au contrôle des maisons intelligentes. Un vaste marché MCP s'est formé instantanément. Pendant ce temps, les modèles de base représentés par Claude ont démontré de puissantes capacités de toolcall multi-étapes, capables d'itérer et d'invoquer des outils de manière autonome pour accomplir des tâches complexes.

Les chaînes du Fixed Workflow ont été brisées : les Agents n'avaient plus besoin de processus rigides préétablis, mais pouvaient planifier dynamiquement des chemins en fonction des objectifs. Les limites de capacité et la généralisabilité se sont améliorées simultanément, l'AGI semblait à portée de main.

Mais des problèmes sont vite apparus :

- **Inondation de pseudo-besoins** : MCP n'est essentiellement qu'un wrapper de format pour les APIs. Pour les scénarios avec des APIs existantes, les coûts de développement sont extrêmement faibles, conduisant à la situation absurde où il y a « plus de développeurs que d'utilisateurs »
- **Hallucination AGI** : La communauté est tombée dans l'illusion que « connecter suffisamment de MCP permettrait d'atteindre l'AGI », ignorant le plafond de capacité des modèles eux-mêmes
- **Pollution du Context** : L'utilisation abusive à plat des déclarations d'outils a conduit à des catastrophes contextuelles, avec des centaines de définitions d'outils encombrant la fenêtre, mettant gravement au défi la capacité d'Instruction Following du modèle. Pour atténuer cela, les frameworks Agent mainstream ont commencé à limiter le nombre d'outils — l'éditeur Cursor a un moment fixé la limite supérieure à 80

La crise engendre la sagesse. L'expérience de cette phase a profondément changé la philosophie de conception ultérieure :

- Des normes unifiées peuvent libérer la force immense de la communauté — la standardisation est la pierre angulaire de la prospérité de l'écosystème
- La gestion du Context doit être affinée — l'émergence de stratégies simples comme « hide tool result » annonçait des mécanismes de sortie de Context plus systématiques

![Chapitre 3](https://pic1.zhimg.com/v2-1156e8714d712477c0cb269d74bbe3da_r.jpg)

## Chapitre 4 : L'essor des Skills — La guerre de montée en dimension de la gestion du Context

Lorsque l'exposition à plat du MCP a atteint ses limites, les Skills sont apparus. Ce n'est pas une simple restructuration d'outils, mais une montée en dimension de la stratégie de gestion du Context.

Pourquoi les Skills sont-ils meilleurs ? Ils réalisent une triple percée :

- **Exposition hiérarchisée** : Organisation des listes d'outils plates en structures arborescentes, déploiement à la demande, évitant la pollution du Context tout en économisant l'espace précieux de la fenêtre contextuelle
- **Context proactif** : Le modèle décide de manière autonome quand et quelle couche de Context acquérir, plutôt que de recevoir passivement toutes les informations
- **Instructions de niveau SOP** : Pas seulement « ce qui peut être fait » (le « j'ai un outil XX » du MCP), mais « comment le faire » — procédures d'exploitation standard détaillées intégrées, équivalent à appliquer des correctifs intelligents aux outils

Plus disruptif encore, de nombreux Skills sont entièrement définis en langage naturel, sans programmation. Cela abaisse considérablement la barrière à la participation de la communauté, permettant aux experts métier plutôt qu'aux programmeurs de contribuer des actifs Context à l'écosystème. Dans un certain sens, c'est une renaissance et un dépassement de la deuxième phase de l'Agent Workflow — utilisant la flexibilité du langage naturel pour faire revivre les avantages structuraux du workflow.

Mais cela pose également de nouveaux défis au modèle :

- **Capacité de contrôle proactif du contexte** : Le modèle peut-il encore se souvenir de l'existence d'un certain Skill initialement indiqué après des dizaines d'appels d'outils ?
- **Capacité de mémoire de long contexte** : Comment maintenir la conscience du Context de haut niveau dans des chaînes d'appels profondes ?

Les leçons sont déjà claires :

- Le Context doit être hiérarchisé + exposé de manière proactive
- Ce que la communauté co-construit, ce ne sont pas seulement des outils, mais des connaissances de processus — SOP, meilleures pratiques, méthodologie de domaine

![Chapitre 4](https://picx.zhimg.com/v2-3616c627dc540fb165ba03ee22003595_r.jpg)

## Tendances en cours : L'évolution raffinée de la gestion du Context

De l'histoire évolutive ci-dessus, nous pouvons clairement voir trois fils conducteurs continus :

### 1. De plat à hiérarchique : La victoire de l'évolutivité

L'ère de l'acquisition passive de tout le Context touche à sa fin. Une exposition hiérarchisée plus raffinée, plus économique et plus évolutive devient la norme. Ce n'est pas seulement une optimisation d'ingénierie, mais un changement de paradigme cognitif — l'acquisition du Context devrait être une recherche d'information, et non un bombardement d'informations.

### 2. Amélioration continue de l'autonomie des modèles

La Bitter Lesson (leçon amère) continue de s'appliquer ici : à mesure que l'intelligence des modèles de base s'améliore et que les capacités d'Instruction Following progressent sans cesse, les développeurs peuvent définir des structures plus complexes, et les modèles peuvent les comprendre et les exécuter. L'Agent Workflow devient « moins structuré » — évoluant des processus rigides nécessitant une définition par code vers des Skills flexibles décrits en langage naturel. Moins de structure, plus d'intelligence.

### 3. Abaissement continu des barrières à la participation communautaire

La largeur de l'écosystème détermine la hauteur de l'intelligence. Lorsque contribuer au Context ne nécessite plus de compétences en programmation, lorsque les experts métier peuvent définir directement des Skills en langage naturel, la créativité de la communauté est complètement libérée. Ce processus de démocratisation élargit rapidement les limites de capacité des modèles de base.

## Chapitre suivant : Du prédéfini au natif-scénario

Mais l'histoire n'est pas finie. De nouvelles tendances germeront et vont remodeler la façon dont le Context est fourni.

### Tendance 1 : Du « prédéfini » au « fourni par le scénario »

Le Context passé était entièrement prédéfini : les développeurs écrivaient des serveurs MCP, empaquetaient des Skills, et les utilisateurs les sélectionnaient et les chargeaient manuellement. Le Context futur sera fourni de manière proactive par les scénarios.

Imaginez un monde : les exploitants de cafés n'ont plus besoin de développer des Apps ou des mini-programmes, mais implémentent une « interface Context » — lorsque l'Agent d'un utilisateur entre dans une géofence ou scanne un QR code en magasin, il reçoit automatiquement le package Context de ce scénario. Ce Context comprend :

- Menu et recommandations (non plus des GUIs pour les humains, mais des données structurées pour les Agents)
- Protocoles de commande (SOPs en langage naturel similaires aux Skills)
- Processus de paiement
- Modèles de temps d'attente

De la création de GUIs pour les humains à la création de protocoles Context pour les Agents — c'est un transfert fondamental du paradigme d'interaction du monde numérique.

### Tendance 2 : Du « on entre mais on ne sort pas » à la « sortie flexible »

La gestion actuelle du Context est fondamentalement unidirectionnelle : charger, charger, et recharger encore, jusqu'à ce que la fenêtre explose. Ce qui sera nécessaire à l'avenir, c'est quelque chose comme un gestionnaire de contexte similaire à l'instruction `with` de Python : définissant à la fois l'entrée et la sortie.

Lorsqu'un utilisateur quitte un scénario de café, l'Agent devrait automatiquement :

- Archiver des journaux d'interaction détaillés (« a commandé un latte, caramel remplacé par vanille, peu de glace »)
- Retirer les MCPs/Skills de ce scénario du Context actif
- Conserver uniquement un résumé condensé (« a dépensé 35 yuans chez Blue Bottle Coffee »)

Ce mécanisme de sortie de Context peut à la fois éviter la pollution à long terme et réaliser une mémoire précise, ce qui en fait une capacité essentielle pour les systèmes Agent fonctionnant sur le long terme.

## Une tasse de café pour voir l'avenir

Utilisons un exemple simple pour relier les anciens et nouveaux mondes :

**Ancien paradigme** :

Entrer dans le café → Scanner le QR code → Sauter vers la page mini-programme/H5 → L'utilisateur commande et paie manuellement

**Nouveau paradigme** :

Entrer dans le café → L'Agent découvre automatiquement le Context du scénario → Informe proactivement l'utilisateur : « J'ai détecté le menu de Blue Bottle Coffee, souhaitez-vous que je vous le présente ? » → L'utilisateur en langage naturel : « Un Americano peu glacé, grains éthiopiens » → L'Agent achève autonomement la sélection, la personnalisation, la commande, le paiement → Prédit le temps d'attente et définit un rappel → Nettoie automatiquement le Context après le départ, ne conserve que les enregistrements de consommation

Les utilisateurs retournent à une expression d'intention pure, tous les processus intermédiaires sont achevés de manière autonome par l'Agent sous la guidance du Context contextualisé.

## Conclusion : Vers un écosystème intelligent natif au Context

Des incantations au Workflow, du MCP aux Skills, puis au Context natif-scénario, nous voyons un fil conducteur clair : le Context évolue d'une annexe à l'entrée humaine vers une infrastructure symbiotique pour l'écosystème.

Le mot de passe de l'AGI ne réside pas dans le nombre de paramètres d'un modèle propriétaire, mais dans la capacité de la communauté à construire un monde numérique riche en contexte, dynamique et contextualisé. Lorsque chaque café, chaque bibliothèque, chaque laboratoire fournira un Context natif pour l'IA, l'intelligence émergera réellement.

Ce n'est pas seulement l'évolution de la technologie, mais aussi une révolution des paradigmes de collaboration. Des développeurs plus nombreux que les utilisateurs, aux participants de scénarios plus nombreux que les développeurs, le chapitre suivant de l'écosystème sera co-écrit par tous les mainteneurs des espaces numériques.

**Le Context n'est plus un problème que les modèles doivent gérer, mais une réponse que le monde offre à l'intelligence.**
