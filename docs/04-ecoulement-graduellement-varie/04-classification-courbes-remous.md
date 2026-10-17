---
title: Classification des courbes de remous
sidebar_label: Classification des courbes de remous
sidebar_position: 4
---

import BackwaterProfiles from '@site/src/components/BackwaterProfiles';

# Classification des courbes de remous

On étudie le signe de

$$
\frac{\mathrm{d}h}{\mathrm{d}x} = i\,\frac{1 - \left(\dfrac{h_n}{h}\right)^{10/3}}{1 - \left(\dfrac{h_c}{h}\right)^{3}} = i\,\frac{\text{Num.}}{\text{Dén.}}
\qquad\text{ou, en général,}\qquad
\frac{\mathrm{d}h}{\mathrm{d}x} = \frac{i - J}{1 - \mathrm{Fr}^2}
$$

en fonction de la pente $i$ et de la position de $h$ par rapport à $h_n$ et à
$h_c$.

## Classification des pentes

| Pente $i$ | Comparaison avec $i_c$ | Type de canal | Courbes |
|---|---|---|---|
| $i > 0$ | $i < i_c$ ($h_n > h_c$) | canal à **pente faible** (*mild*) | **M** |
| $i > 0$ | $i > i_c$ ($h_n < h_c$) | canal à **forte pente** (*steep*) | **S** |
| $i > 0$ | $i = i_c$ ($h_n = h_c$) | canal à **pente critique** | **C** |
| $i = 0$ | — ($h_n$ infinie) | canal à **pente nulle** (horizontal) | **H** |
| $i < 0$ | — ($h_n$ n'existe pas) | canal à **contre-pente** (*adverse*) | **A** |

Les lettres viennent de l'anglais : *Mild*, *Steep*, *Critical*,
*Horizontal*, *Adverse*.

## Les trois zones

Les droites parallèles au fond tracées aux profondeurs $h_n$ (ligne **N**) et
$h_c$ (ligne **C**) découpent l'écoulement en **trois zones**, numérotées de
haut en bas :

- **zone 1** : $h$ au-dessus des deux lignes ;
- **zone 2** : $h$ entre les deux lignes ;
- **zone 3** : $h$ au-dessous des deux lignes.

Une courbe de remous est désignée par la lettre de la pente suivie du numéro
de la zone : M1, M2, M3, S1, S2, S3, C1, C3, H2, H3, A2, A3, soit **12 courbes**
au total. (C2 se réduit à l'écoulement uniforme critique ; H1 et A1 n'existent
pas puisque $h_n$ n'est pas définie.)

## Comportement aux limites

Quatre règles, lisibles directement sur l'équation, permettent de dessiner
l'allure de toute courbe de remous :

| Lorsque… | alors… | Interprétation |
|---|---|---|
| $h \to h_n$ | Num. $\to 0$, $\mathrm{d}h/\mathrm{d}x \to 0$ | la courbe tend **asymptotiquement** vers la ligne N : on retrouve l'écoulement uniforme |
| $h \to h_c$ | Dén. $\to 0$, $\mathrm{d}h/\mathrm{d}x \to \infty$ | la courbe devient **perpendiculaire** à la ligne C : les hypothèses de l'EGV tombent en défaut, il se produit un **ressaut** ou une **chute** |
| $h \to \infty$ | Num. et Dén. $\to 1$, $\mathrm{d}h/\mathrm{d}x \to i$ | la surface libre tend vers l'**horizontale** (cas d'une retenue) |
| $h \to 0$ | $\mathrm{d}h/\mathrm{d}x \approx i\,(h_n/h_c)^{3}\,(h_n/h)^{1/3} \to +\infty$ | situation théorique : en pratique, une petite profondeur est toujours imposée par un ouvrage (vanne) |

:::caution La traversée de la profondeur critique
Une courbe de remous ne traverse **jamais** la ligne C de façon continue :

- passage **fluvial → torrentiel** : il se fait au niveau d'une **section
  critique** (chute, rupture de pente faible → forte) ;
- passage **torrentiel → fluvial** : il se fait toujours par un **ressaut
  hydraulique**, qui est un écoulement **rapidement** varié.
:::

## Tableau récapitulatif des signes

| Courbe | Pente | Zone | Num. | Dén. | $\mathrm{d}h/\mathrm{d}x$ | Évolution de $h$ vers l'aval |
|---|---|---|---|---|---|---|
| **M1** | $0 < i < i_c$ | $h > h_n > h_c$ | $+$ | $+$ | $> 0$ | augmente |
| **M2** | $0 < i < i_c$ | $h_n > h > h_c$ | $-$ | $+$ | $< 0$ | diminue |
| **M3** | $0 < i < i_c$ | $h_n > h_c > h$ | $-$ | $-$ | $> 0$ | augmente |
| **S1** | $i > i_c$ | $h > h_c > h_n$ | $+$ | $+$ | $> 0$ | augmente |
| **S2** | $i > i_c$ | $h_c > h > h_n$ | $+$ | $-$ | $< 0$ | diminue |
| **S3** | $i > i_c$ | $h_c > h_n > h$ | $-$ | $-$ | $> 0$ | augmente |
| **C1** | $i = i_c$ | $h > h_c = h_n$ | $+$ | $+$ | $> 0$ | augmente |
| **C3** | $i = i_c$ | $h < h_c = h_n$ | $-$ | $-$ | $> 0$ | augmente |
| **H2** | $i = 0$ | $h > h_c$ | $-$ | $+$ | $< 0$ | diminue |
| **H3** | $i = 0$ | $h < h_c$ | $-$ | $-$ | $> 0$ | augmente |
| **A2** | $i < 0$ | $h > h_c$ | $-$ | $+$ | $< 0$ | diminue |
| **A3** | $i < 0$ | $h < h_c$ | $-$ | $-$ | $> 0$ | augmente |

:::note Fond horizontal et contre-pente
Pour un fond horizontal ou en contre-pente, la forme
$i\,(1 - (h_n/h)^{10/3})$ n'a plus de sens, puisque $h_n$ n'existe pas. On
revient alors à la forme générale : le numérateur vaut $i - J$, qui est
**toujours négatif** ($J > 0$ et $i \le 0$). Le signe de
$\mathrm{d}h/\mathrm{d}x$ est donc donné par le seul dénominateur.
:::

## Les douze profils

Les profils ci-dessous ne sont pas dessinés à main levée : ils sont **calculés**
en intégrant l'équation de la courbe de remous pour un canal rectangulaire
large, depuis la profondeur imposée par la section de contrôle (barrage,
vanne, chute…).

<BackwaterProfiles />

### Courbes M — canal à pente faible

C'est le cas le plus fréquent en rivière et en assainissement : l'écoulement
uniforme y est **fluvial**.

- **M1** ($h > h_n$) : **courbe de remous** proprement dite. La surface
  remonte vers l'aval et tend vers l'horizontale à l'approche de l'obstacle.
  Exemple : retenue à l'amont d'un barrage. Sa longueur peut atteindre
  plusieurs kilomètres (voire des dizaines de kilomètres en rivière de plaine).
- **M2** ($h_c < h < h_n$) : **courbe d'abaissement**. La profondeur diminue
  vers l'aval jusqu'à $h_c$. Exemple : approche d'une chute brusque ou d'un
  élargissement vers un tronçon à forte pente.
- **M3** ($h < h_c$) : écoulement torrentiel qui ralentit. Exemple : à l'aval
  d'une vanne de fond ; la profondeur augmente jusqu'à ce qu'un **ressaut**
  ramène l'écoulement à la profondeur fluviale.

**Exemple d'enchaînement** (canal à faible pente avec un barrage déversant) :
courbe **M1** à l'amont du barrage, lame déversante, écoulement torrentiel
**M3** au pied de l'ouvrage, **ressaut**, puis retour vers $h_n$ et, si le
canal se termine par une chute, courbe **M2** à l'extrémité aval.

### Courbes S — canal à forte pente

L'écoulement uniforme y est **torrentiel**.

- **S1** ($h > h_c$) : la profondeur augmente vers l'aval et la surface tend
  vers l'horizontale. Elle commence par un **ressaut** à l'amont et se termine
  contre l'obstacle (barrage) à l'aval.
- **S2** ($h_n < h < h_c$) : courbe d'abaissement **courte**, qui raccorde la
  section critique à l'écoulement uniforme torrentiel. Exemple : juste à
  l'aval d'une rupture de pente faible → forte.
- **S3** ($h < h_n$) : la profondeur augmente vers $h_n$. Exemple : à l'aval
  d'une vanne de fond dont l'ouverture est plus petite que $h_n$.

**Exemple d'enchaînement** (canal à forte pente avec un barrage) : arrivée
torrentielle, **ressaut**, courbe **S1** jusqu'au barrage, puis à l'aval du
barrage, courbe **S3** ou **S2** qui tend vers $h_n$.

### Courbes C — canal à pente critique

Les lignes N et C sont confondues : il n'y a que deux zones.

- **C1** ($h > h_c$) : la surface libre est **presque horizontale**.
- **C3** ($h < h_c$) : la surface libre est elle aussi presque horizontale.

Avec Chézy, la surface est exactement horizontale ($\mathrm{d}h/\mathrm{d}x = i$) ;
avec Manning, elle remonte très légèrement. Comme le régime est critique,
la surface y est **instable** et ondulée : on évite de concevoir des canaux à
pente critique.

### Courbes H — canal horizontal

$h_n$ est infinie : seules les zones 2 et 3 existent.

- **H2** ($h > h_c$) : la profondeur diminue vers l'aval jusqu'à $h_c$.
  Exemple : canal horizontal se terminant par une chute.
- **H3** ($h < h_c$) : la profondeur augmente vers l'aval jusqu'au ressaut.
  Exemple : à l'aval d'une vanne de fond, comme dans le cas d'un bassin de
  dissipation à fond plat.

**Exemple d'enchaînement** : vanne de fond, écoulement **H3**, **ressaut**,
puis courbe **H2** qui s'abaisse jusqu'à la chute aval.

### Courbes A — canal à contre-pente

Le fond **remonte** dans le sens de l'écoulement : aucun écoulement uniforme
n'est possible.

- **A2** ($h > h_c$) : analogue à H2, la profondeur diminue vers l'aval.
- **A3** ($h < h_c$) : analogue à H3, la profondeur augmente vers l'aval
  jusqu'au ressaut.

Les contre-pentes sont rares sur de longues distances ; on les rencontre
localement (seuils, remontées du fond à l'aval d'un bassin de dissipation).

## Sections de contrôle et sens de calcul

Le tracé d'une courbe de remous part toujours d'une **section de contrôle** :
une section où la relation hauteur-débit est connue (barrage, vanne, chute,
section critique, réservoir).

:::important Règle fondamentale
- En régime **fluvial**, les perturbations remontent le courant : la ligne
  d'eau est commandée par l'**aval**. On la calcule **de l'aval vers
  l'amont** (courbes M1, M2, S1, C1, H2, A2).
- En régime **torrentiel**, les perturbations sont emportées vers l'aval : la
  ligne d'eau est commandée par l'**amont**. On la calcule **de l'amont vers
  l'aval** (courbes M3, S2, S3, C3, H3, A3).
:::

On retrouve ici l'**influence aval** vue au chapitre
[Régime d'écoulement](../02-regime-ecoulement/01-ondes-froude.md). Pour un
canal composé de plusieurs tronçons, on procède donc ainsi :

1. calculer, pour le débit, $h_c$ et $h_n$ de chaque tronçon, en déduire le
   type de pente ;
2. repérer les sections de contrôle ;
3. tracer les courbes fluviales depuis l'aval et les courbes torrentielles
   depuis l'amont ;
4. localiser les **ressauts** là où une courbe torrentielle rencontre une
   courbe fluviale (par la condition des hauteurs conjuguées, établie au
   chapitre suivant sur le ressaut hydraulique).

Il reste à **calculer** effectivement ces courbes : c'est l'objet des méthodes
de résolution numérique (méthode directe et méthode standard par pas).
