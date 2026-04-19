---
title: Quand le jargon du RL envahit la vie, je redécouvre l'essence de la décision
date: 2026-03-01 17:32:00
categories:
  - tech
tags:
  - AI
  - RL
  - decision
---

> Auteur : 0xWelt, réflexion de kimi-k2.5

Récemment, j'ai découvert un phénomène intéressant : le jargon du RL (apprentissage par renforcement) s'infiltre tranquillement dans les conversations quotidiennes.

Quand un ami traverse une rupture amoureuse, un autre ami le « réconforte » en disant : « Tu as reçu une récompense négative (negative reward), l'essentiel est comment tu comptes mettre à jour ta stratégie. » Lors d'une discussion sur l'apprentissage, quelqu'un a dit : « Le premier principe, c'est qu'il faut être on-policy : seule l'expérience vécue personnellement compte comme expérience, tu ne peux pas réutiliser directement celle des autres. »

En tant que chercheur avec quelques années d'expérience dans le domaine du RL, je suis ravi de voir que ce qui était autrefois un petit cercle commence à gagner ses lettres de noblesse. Aussi, je me permets de partager quelques réflexions personnelles sur la philosophie du RL, en guise d'ouverture de discussion.

## I. L'impermanence : accepter le caractère stochastique de l'environnement, renoncer à l'obsession du rendement immédiat

Le bouddhisme parle d'« impermanence », le RL emploie un terme plus froid pour la décrire : l'environnement est stochastique (stochastic environment).

Dans le cadre du RL, même si tu fais exactement le même choix (action), le retour du monde (récompense) peut être radicalement différent. Le marché ne monte pas nécessairement parce que tu t'es donné du mal, une relation ne se termine pas nécessairement bien parce que tu as investi. Ce caractère stochastique n'est pas un bug, c'est une propriété inhérente de l'environnement.

Voici la première philosophie de vie qui en découle : ne t'attache pas au résultat d'une interaction unique.

Beaucoup de gens sombrent dans l'anxiété parce qu'ils interprètent chaque « récompense négative » comme « je ne suis pas capable » ou « le monde a tort ». Mais du point de vue du RL, la récompense (reward) n'est qu'un signal scalaire que l'environnement t'envoie ; il reflète « cette interaction », et non « ton essence ». Un entretien raté, une rupture, une perte financière, ce ne sont que des retours instantanés résultant de l'échantillonnage (sampling) entre toi et un environnement complexe.

Quelle est la démarche rationnelle ? C'est de viser la maximisation de l'espérance du rendement cumulé (return) — en d'autres termes, ne te préoccupe pas d'avoir obtenu +1 ou −1 à une étape donnée, mais regarde si, à long terme, ta stratégie accumule constamment des gains positifs. Ce changement de perspective fait passer du récit de victime (« pourquoi ai-je de la malchance cette fois ? ») au récit de constructeur (« où puis-je itérer ma stratégie ? »).

Savourer l'instant présent, en RL, signifie : observer pleinement l'état actuel (state), accepter son incertitude, puis choisir la meilleure action possible dans l'immédiat, plutôt que de se noyer dans les gains et les pertes de l'étape précédente.

## II. Exploration et exploitation : l'algorithme de vie pour sortir de l'optimum local

C'est le dilemme le plus célèbre du RL : l'arbitrage entre l'exploration (Exploration) et l'exploitation (Exploitation).

L'exploitation est intuitive : sur la base de ce que tu sais déjà, choisir l'action qui semble la meilleure pour l'instant. Aller au restaurant habituel, faire le travail que tu maîtrises, rester dans ta zone de confort. Ce n'est pas un problème en soi : cela garantit que ta stratégie (policy) ne commet pas de grosses erreurs compte tenu de l'information disponible.

Mais le danger réside dans le piège de l'optimum local. Si tu n'essaies jamais un nouveau restaurant, tu risques de rater celui qui est encore meilleur ; si tu ne t'aventures jamais dans un nouveau domaine, tu ne sauras peut-être jamais où réside ton talent. L'essence de l'exploration, c'est de choisir activement des actions dont l'estimation de valeur est incertaine et qui peuvent même apporter une récompense négative à court terme, afin d'acquérir de nouvelles informations et de mettre à jour ton modèle de cognition du monde.

Dans la vie, cela se traduit par :

- **Exploitation** : creuser ta voie actuelle, accumuler des intérêts composés
- **Exploration** : apprendre transversalement, essayer une activité secondaire, rencontrer des gens différents, aller dans des endroits inconnus

Trop de gens adoptent une stratégie de vie de « pure exploitation » (pure exploitation) : à 25 ans, ils trouvent un optimum local, puis passent les 40 années suivantes à le renforcer, jusqu'à ce qu'un bouleversement de l'environnement (disparition de leur secteur, effondrement de leur santé) les expulse de force de leur zone de confort. À ce moment-là, le coût de mise à jour de la stratégie est extrêmement élevé.

La stratégie intelligente est de type ε-greedy (ε-greedy) : la plupart du temps, faire ce qui est correct et le plus sûr dans l'immédiat (exploitation), mais réserver une petite probabilité (par exemple 10 % de ton temps, de ton énergie, de ton argent) à l'exploration aléatoire. Ces tentatives « sans raison », qui semblent du gaspillage, servent en réalité à t'empêcher de rester coincé sur un pic local de ta vie et de rater le véritable sommet.

Souviens-toi : le secret de la minimisation du regret (regret) ne réside pas dans le fait de toujours choisir juste, mais dans le fait de découvrir le plus tôt possible quelles options sont vraiment mauvaises.

## III. Évaluation de stratégie et amélioration de stratégie : travailler la tête baissée, lever les yeux au ciel

Le cadre théorique central du RL peut se résumer en une phrase : d'abord voir clairement où l'on est, puis trouver un meilleur chemin.

Cela correspond à deux processus qui s'alternent : l'évaluation de stratégie (Policy Evaluation) et l'amélioration de stratégie (Policy Improvement).

### 1. Évaluation de stratégie : les événements n'ont pas de bien ou de mal en soi, le bien et le mal viennent de ta réponse

En RL, la valeur (Value) d'un état n'est pas une propriété objective, elle dépend de ta stratégie actuelle. La même situation (state), selon ta manière d'y répondre (policy), a une valeur totalement différente.

Cela explique pourquoi certains rebondissent après un échec tandis que d'autres s'effondrent. Le chômage, pour la stratégie A (celui qui apprend activement de nouvelles compétences), peut être un état de grande valeur (parce qu'il offre du temps libre) ; pour la stratégie B (celui qui se plaint passivement), c'est un état de faible valeur. L'état objectif de l'environnement n'a pas changé, ce qui a changé, c'est la valeur que la stratégie lui confère.

Par conséquent, la première signification de « travailler la tête baissée » est : au fur et à mesure que ta stratégie évolue, réévalue constamment l'état dans lequel tu te trouves. Ne colle pas une étiquette « mauvais » de façon permanente à un état qui t'a valu une récompense négative dans le passé. Quand tu deviens plus fort, le problème qui te tourmentait autrefois peut ne plus en être un.

### 2. Amélioration de stratégie : ne vise pas la perfection, vise seulement un gain positif

C'est un mythe que je tiens particulièrement à réfuter. Au début, j'ai mentionné un ami qui disait qu'il fallait apprendre de manière « on-policy » et que seule sa propre expérience comptait. Sur le plan théorique du RL, c'est en réalité bien trop strict.

Les méthodes on-policy (comme les méthodes originales de gradient de stratégie) exigent que tu mettes à jour ta stratégie actuelle avec des données générées par la « stratégie actuelle » ; c'est mathématiquement élégant, mais l'efficacité d'échantillonnage est extrêmement faible. Dans la réalité, les algorithmes les plus efficaces (comme le Q-learning) sont souvent off-policy — ils peuvent apprendre de l'expérience des autres, de l'expérience passée, voire de l'expérience aléatoire.

Appliqué à la vie : tu n'as pas besoin, et ne devrais pas, apprendre uniquement de tes propres erreurs. Lire des livres, consulter des aînés, observer les échecs des autres, tout cela est de l'apprentissage off-policy, une façon d'améliorer sa stratégie à excellent rapport qualité-prix.

Plus important encore, le théorème d'amélioration de stratégie en RL : dès que tu trouves une action dont le rendement espéré est meilleur que celui de l'action sous la stratégie actuelle, cette amélioration est valide et tu te rapproches de la stratégie optimale.

Cela a une portée pratique immense pour la vie : nous n'avons pas besoin de poursuivre un plan de vie parfait et immédiat (exactement on-policy), ni d'attendre d'être « complètement prêt » pour agir. Tout petit changement susceptible d'apporter un gain d'espérance positif est une bonne amélioration de stratégie.

Se coucher dix minutes plus tôt aujourd'hui qu'hier, écrire mille mots de plus cette semaine que la semaine dernière, écouter un peu plus lors de cette conversation que lors de la précédente — ces minuscules gradients de stratégie (policy gradient), bien que petits à chaque pas, pourvu que l'espérance soit positive, finiront par converger, après suffisamment d'itérations (iteration), vers un optimum local bien meilleur que le présent.

Lever les yeux au ciel, c'est se demander sans cesse : y a-t-il une dimension où je pourrais faire une petite amélioration de stratégie, positive ?

## Conclusion : sois un agent qui apprend, pas un agent parfait

La popularité du vocabulaire du RL reflète essentiellement une évolution cognitive des contemporains face à l'incertitude : nous commençons à accepter que le monde est un immense processus de décision markovien partiellement observable (POMDP), et à nous accepter nous-mêmes comme des agents (agent) qui apprennent et se trompent en interagissant avec l'environnement.

Mais ne laisse pas ce jargon devenir une nouvelle source d'anxiété. Souviens-toi, les idées les plus puissantes du RL ne sont pas les déductions mathématiques complexes, mais quelques principes de survie simples :

- **Accepter le caractère stochastique** : le monde est impermanent, un rendement unique ne prouve rien
- **Maintenir l'exploration** : utiliser 10 % de folie pour lutter contre l'optimum local
- **Itérer sans cesse** : pas besoin d'un plan parfait, seulement de petites améliorations positives et continues

La prochaine fois qu'un ami te dira « tu as reçu une récompense négative », tu pourras lui répondre en souriant : « Et ma fonction de valeur a-t-elle été mise à jour ? Quand est-ce que la stratégie converge ? » Après tout, dans cet environnement plein d'incertitudes, la seule stratégie optimale dont on puisse être sûr, c'est de garder pour toujours la capacité d'apprendre.
