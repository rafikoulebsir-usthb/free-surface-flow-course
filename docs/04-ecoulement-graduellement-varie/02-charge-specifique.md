---
title: Charge, charge spécifique et régime critique
sidebar_label: Charge spécifique
sidebar_position: 2
---

import SpecificEnergyCurve from '@site/src/components/SpecificEnergyCurve';

# Charge, charge spécifique et régime critique

## Charge hydraulique

La charge $H$, ou énergie totale par unité de poids, dans une section par
rapport à un plan de référence est la somme de trois termes : la **cote du
fond** $z$ (hauteur de position), la **hauteur d'eau** $h\cos\theta$ (hauteur
de pression au fond) et la **hauteur cinétique** $\alpha U^2/2g$ :

$$
H = z + h\cos\theta + \alpha\frac{U^2}{2g} \;\approx\; z + h + \alpha\frac{U^2}{2g}
$$

où $\theta$ est l'angle du fond avec l'horizontale, $U = Q/S$ la vitesse
moyenne et $\alpha$ le coefficient de Coriolis ($\alpha \approx 1$ à
$1{,}1$ ; on prend souvent $\alpha = 1$). L'approximation $\cos\theta \approx 1$
est celle des faibles pentes déjà vue au chapitre
[Écoulement uniforme](../03-ecoulement-uniforme/02-charge-hydraulique.md).

La somme $z + h$ est la **cote piézométrique** : c'est la cote de la surface
libre.

:::important À retenir
En l'absence d'apport d'énergie (pompe), la ligne de charge **descend
toujours** dans le sens de l'écoulement. Entre deux sections, la charge $H$
diminue d'une quantité égale aux **pertes par frottement** :

$$
\frac{\mathrm{d}H}{\mathrm{d}x} = -J
$$

où $J$ est la pente de la ligne de charge (pente énergétique).
:::

## Charge spécifique

La **charge spécifique** $H_s$ est la charge mesurée par rapport au **fond**
du canal :

$$
H_s = H - z = h + \alpha\frac{U^2}{2g} = h + \alpha\frac{Q^2}{2g\,S(h)^2}
$$

Tandis que la charge totale $H$ décroît toujours dans le sens de
l'écoulement, la charge spécifique $H_s$ peut :

- rester **constante**, comme en régime uniforme ($h$ et $U$ constants) ;
- **croître** ou **décroître**, suivant les caractéristiques de l'écoulement
  (en régime graduellement varié).

Pour une **section donnée**, l'équation de la charge spécifique établit une
relation entre $H_s$, $h$ et $Q$, valable pour **n'importe quel type
d'écoulement**. On l'étudie de deux façons :

- à **débit constant** : courbe $H_s(h)$ ;
- à **charge constante** : courbe $Q(h)$.

### Courbe $H_s(h)$ à débit constant

$H_s(h)$ est la somme de deux termes :

- $h$, qui croît avec la profondeur : la courbe admet la droite $H_s = h$
  comme asymptote pour $h \to \infty$ ;
- $\alpha Q^2 / 2gS^2$, qui tend vers l'infini quand $h \to 0$ : l'axe
  $h = 0$ est l'autre asymptote.

La courbe présente donc un **minimum** $H_c$, atteint pour la profondeur
critique $h_c$. Pour toute charge $H_s > H_c$, il existe **deux profondeurs**
possibles, dites **profondeurs alternées** (ou conjuguées au sens de la
charge) :

- $h' < h_c$ : régime **torrentiel** ;
- $h'' > h_c$ : régime **fluvial**.

Pour $H_s < H_c$, aucun écoulement n'est possible avec ce débit dans cette
section.

<SpecificEnergyCurve />

### Courbe $Q(h)$ à charge constante

En isolant le débit dans l'équation de la charge spécifique :

$$
Q = S(h)\sqrt{\frac{2g}{\alpha}\,(H_s - h)}
$$

$Q$ est nul pour $h = 0$ et pour $h = H_s$ ; il passe par un **maximum**
$Q_c$ pour la profondeur critique. Pour un débit $Q < Q_c$, il existe là encore
deux profondeurs possibles, l'une torrentielle, l'autre fluviale.

:::tip Deux lectures d'un même résultat
Le régime critique est à la fois l'état qui transite un débit donné avec la
**charge minimale**, et l'état qui transite le **débit maximal** pour une
charge donnée (théorème de Bélanger). C'est pourquoi un déversoir dénoyé,
qui impose le passage par $h_c$, débite le maximum possible sous sa charge.
:::

## Régime critique et charge spécifique

Le point $(H_c, h_c)$ de la courbe correspond au **régime critique** ; $h_c$
est appelée **profondeur critique**.

Le minimum de la courbe est obtenu pour $\mathrm{d}H_s/\mathrm{d}h = 0$. Comme
$\mathrm{d}S = B\,\mathrm{d}h$ (avec $B$ la largeur au miroir, c'est-à-dire au
niveau de la surface libre) :

$$
\frac{\mathrm{d}H_s}{\mathrm{d}h} = 1 - \alpha\frac{Q^2 B}{g\,S^3} = 1 - \mathrm{Fr}^2 = 0
$$

d'où la condition critique, valable pour **toute forme de section** :

$$
\boxed{\,\frac{Q\sqrt{\alpha}}{\sqrt{g}} = S(h_c)\sqrt{\frac{S(h_c)}{B(h_c)}}\,}
\qquad\Longleftrightarrow\qquad
\mathrm{Fr} = 1
$$

On retrouve la définition du chapitre [Hauteur critique](../02-regime-ecoulement/02-hauteur-critique.md),
avec $S/B = H_h$ la profondeur hydraulique.

**Cas du canal rectangulaire** de largeur $b$ ($S = bh$, $B = b$, débit
unitaire $q = Q/b$, $\alpha = 1$) :

$$
h_c = \sqrt[3]{\frac{q^2}{g}}, \qquad H_c = \frac{3}{2}\,h_c
$$

:::caution Instabilité au voisinage du régime critique
Au voisinage du minimum, la courbe $H_s(h)$ est presque verticale : une
**légère variation de la charge** entraîne une **variation appréciable de la
hauteur d'eau**. C'est pourquoi, dans tout écoulement proche du régime
critique, on observe d'importantes **ondulations de la surface libre**. En
pratique, on évite de dimensionner un canal pour un nombre de Froude compris
entre environ $0{,}8$ et $1{,}2$.
:::

## Pente critique

La **pente critique** $i_c$, pour un débit donné, est la pente pour laquelle
ce débit s'écoule en régime **critique et uniforme** : la profondeur normale
est alors égale à la profondeur critique, $h_n = h_c$.

En comparant la pente $i$ du canal à la pente critique :

| Pente | Profondeurs | Régime uniforme | Dénomination |
|---|---|---|---|
| $i < i_c$ | $h_n > h_c$ | fluvial | canal à **faible pente** |
| $i = i_c$ | $h_n = h_c$ | critique | canal à **pente critique** |
| $i > i_c$ | $h_n < h_c$ | torrentiel | canal à **forte pente** |

Pour un canal rectangulaire très large ($R_h \approx h$), en écrivant
Manning-Strickler avec $h_n = h_c$, on obtient une expression explicite :

$$
i_c = \frac{g}{K_s^2\, h_c^{1/3}}
$$

:::note Exemple
Canal large en béton, $K_s = 50\ \mathrm{m^{1/3}/s}$, $q = 2\ \mathrm{m^2/s}$ :
$h_c = (4/9{,}81)^{1/3} = 0{,}74\ \mathrm{m}$ et
$i_c = 9{,}81 / (50^2 \times 0{,}74^{1/3}) \approx 4{,}3 \times 10^{-3}$.

Avec une pente $i = 10^{-3}$, ce canal est à **faible pente** pour ce
débit ($h_n = 1{,}15\ \mathrm{m} > h_c$).
:::

:::important Faible ou forte pente : une notion relative au débit
La pente critique dépend du débit (et de la rugosité). Un **même canal** peut
donc être à faible pente pour un débit et à forte pente pour un autre : on
dit qu'un canal est « à forte pente **pour ce débit** ».
:::
