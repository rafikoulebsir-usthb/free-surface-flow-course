---
title: "Série TD N°2 — Écoulement uniforme et graduellement varié"
sidebar_label: "Série 2 : Uniforme et graduellement varié"
sidebar_position: 2
---

# Série TD N°2 — Écoulement uniforme et graduellement varié

Cette série mobilise la formule de
[Manning-Strickler](../03-ecoulement-uniforme/05-manning-strickler.md), la
[charge spécifique](../04-ecoulement-graduellement-varie/02-charge-specifique.md)
et la [classification des courbes de remous](../04-ecoulement-graduellement-varie/04-classification-courbes-remous.md).

:::info Documents
- [Énoncé de la série (PDF)](/pdf/serie-td-2-enonce.pdf)
- [Corrigé de la série (PDF)](/pdf/serie-td-2-solution.pdf)
:::

Essayez de résoudre chaque exercice avant d'ouvrir la solution.

## Exercice 1

Le canal en ciment de la figure suivante doit débiter **30 m³/s**. Trouver la
dénivellation du fond du canal par kilomètre de longueur. On prend
$n = 0{,}013$.

![Section du canal en ciment de l'exercice 1](/img/td/td2-ex1-section.png)

<details>
<summary>Solution de l'exercice 1</summary>

La pente s'obtient par la formule de Manning-Strickler :

$$
Q = \frac{1}{n}\,S\,R_h^{2/3}\,i^{1/2}
$$

La section étant de forme particulière, on la découpe en deux formes simples :
un rectangle $S_1$ et un trapèze $S_2$.

![Découpage de la section en un rectangle S1 et un trapèze S2](/img/td/td2-sol-ex1-decoupage.png)

$$
S_1 = 2 \times 3{,}6 = 7{,}2\ \mathrm{m^2}
\qquad
S_2 = (4 - 2)\times\frac{1{,}6 + 3{,}6}{2} = 5{,}2\ \mathrm{m^2}
\qquad
S = S_1 + S_2 = 12{,}4\ \mathrm{m^2}
$$

Le périmètre mouillé comprend le fond et la paroi gauche de $S_1$, puis la
berge inclinée et la paroi verticale de $S_2$ (la frontière fictive entre
$S_1$ et $S_2$ n'est pas mouillée) :

$$
P_1 = 2 + 3{,}6 = 5{,}6\ \mathrm{m}
\qquad
P_2 = \sqrt{2^2 + 2^2} + 1{,}6 = 4{,}43\ \mathrm{m}
\qquad
P = 10{,}03\ \mathrm{m}
$$

$$
R_h = \frac{S}{P} = 1{,}24\ \mathrm{m}
$$

D'où la pente :

$$
i = \left(\frac{Q\,n}{S\,R_h^{2/3}}\right)^2 = 7{,}43\times10^{-4}\ \mathrm{m/m}
$$

soit une dénivellation du fond de **0,74 m par kilomètre**.

</details>

## Exercice 2

Le débit dans un canal rectangulaire d'une largeur de **5 m** et d'une
profondeur maximale de **2 m** est de **10 m³/s**. La profondeur normale de
l'écoulement est de **1,25 m**. Déterminer la profondeur de l'écoulement en
aval d'une section dans laquelle le lit s'élève de **0,2 m** sur une distance
de **1 m**.

![Surélévation du fond du canal de l'exercice 2](/img/td/td2-ex2-seuil.png)

<details>
<summary>Solution de l'exercice 2</summary>

En négligeant les pertes de charge sur la courte distance de la surélévation,
la conservation de l'énergie entre les sections 1 et 2 s'écrit :

$$
H_{s1} = H_{s2} + \Delta z
$$

En amont, avec $U_1 = \dfrac{Q}{b\,y_1} = \dfrac{10}{5 \times 1{,}25} = 1{,}6\ \mathrm{m/s}$ :

$$
H_{s1} = y_1 + \frac{U_1^2}{2g} = 1{,}25 + \frac{1{,}6^2}{2 \times 9{,}81} = 1{,}38\ \mathrm{m}
$$

En aval, avec le débit unitaire $q = Q/b = 2\ \mathrm{m^2/s}$ :

$$
H_{s2} = y_2 + \frac{q^2}{2g\,y_2^2} = y_2 + \frac{2^2}{2g\,y_2^2}
$$

D'où l'équation en $y_2$ :

$$
1{,}38 = y_2 + \frac{2}{g\,y_2^2} + 0{,}2
\quad\Longrightarrow\quad
y_2 + \frac{2}{g\,y_2^2} = 1{,}18
$$

On la résout par essais successifs, en cherchant la valeur de $y_2$ qui
redonne 1,18 :

| $y_2$ (m) | $y_2 + 2/(g\,y_2^2)$ (m) |
|---|---|
| 0,90 | 1,15 |
| 1,00 | 1,20 |
| 0,96 | 1,18 |

$$
\boxed{\,y_2 = 0{,}96\ \mathrm{m}\,}
$$

L'équation admet aussi une racine torrentielle ; on retient la racine fluviale
car l'écoulement amont est fluvial ($y_1 = 1{,}25$ m $> h_c = 0{,}74$ m) et
la surélévation reste inférieure à la valeur critique
($H_{s1} - \Delta z = 1{,}18$ m $> H_{s,\min} = 1{,}5\,h_c = 1{,}11$ m). La
surface libre s'abaisse donc au-dessus de la surélévation.

</details>

## Exercice 3

Un canal rectangulaire transporte un débit de **6 m³/s**. Calculer la
profondeur critique $h_c$ et la vitesse critique $V_c$ lorsque :

a. la largeur vaut **4 m** ;

b. la largeur vaut **3 m**.

Pour quelle pente obtient-on la vitesse critique dans le cas (a) si
$n = 0{,}02$ ?

<details>
<summary>Solution de l'exercice 3</summary>

La profondeur critique est atteinte quand le nombre de Froude vaut 1 :

$$
\mathrm{Fr}^2 = \frac{Q^2}{S(h_c)^2\,g\,H_h(h_c)} = 1
$$

Pour un rectangle, $S = b\,h$ et $H_h = S/B = h$, d'où :

$$
\frac{Q^2}{b^2\,h_c^2\,g\,h_c} = 1
\quad\Longrightarrow\quad
h_c = \sqrt[3]{\frac{q^2}{g}}
\qquad\text{avec}\quad q = \frac{Q}{b}
$$

et la vitesse critique vaut $V_c = \sqrt{g\,h_c}$.

| Cas | $b$ (m) | $q$ (m²/s) | $h_c$ (m) | $V_c$ (m/s) |
|---|---|---|---|---|
| a | 4 | 1,5 | 0,612 | 2,45 |
| b | 3 | 2,0 | 0,742 | 2,70 |

**Pente critique (cas a).** On applique Manning-Strickler à la profondeur
critique : $S_c = 4 \times 0{,}612 = 2{,}45\ \mathrm{m^2}$,
$P_c = 4 + 2 \times 0{,}612 = 5{,}22$ m, $R_{hc} = 0{,}469$ m :

$$
i_c = \left(\frac{Q\,n}{S_c\,R_{hc}^{2/3}}\right)^2 = 0{,}0066\ \mathrm{m/m}
$$

</details>

## Exercice 4

Un canal trapézoïdal a une largeur de fond de **6,096 m**, des côtés de pente
**1:1**, et l'eau y a une profondeur de **914 mm**. Pour $n = 0{,}015$ et un
débit de **10,19 m³/s**, calculer :

a. la pente normale ;

b. la pente critique pour un débit de 10,19 m³/s ;

c. la nature de l'écoulement (fluvial ou torrentiel) si la pente est
$i = 0{,}00012$ ;

d. la forme de la courbe de remous si la pente est $i = 0{,}00012$.

<details>
<summary>Solution de l'exercice 4</summary>

On note $b = 6{,}096$ m la largeur du fond et $m = 1$ le fruit des berges.

**a. Pente normale**

Pour $h = 0{,}914$ m :

$$
S = (b + m\,h)\,h = 6{,}41\ \mathrm{m^2}
\qquad
P = b + 2h\sqrt{1 + m^2} = 8{,}68\ \mathrm{m}
\qquad
R_h = 0{,}738\ \mathrm{m}
$$

$$
i_n = \left(\frac{Q\,n}{S\,R_h^{2/3}}\right)^2 = 8{,}52\times10^{-4}\ \mathrm{m/m}
$$

**b. Pente critique**

La profondeur critique vérifie $\mathrm{Fr} = 1$, soit $U = \sqrt{g\,H_h}$,
avec :

$$
H_h = \frac{S}{B} = \frac{(b + m\,h_c)\,h_c}{b + 2m\,h_c} = \frac{(6{,}096 + h_c)\,h_c}{6{,}096 + 2h_c}
$$

Comme par ailleurs $U = Q/S$ :

$$
\frac{10{,}19}{(6{,}096 + h_c)\,h_c} = \sqrt{9{,}81\,\frac{(6{,}096 + h_c)\,h_c}{6{,}096 + 2h_c}}
\quad\Longrightarrow\quad
\frac{\left[(6{,}096 + h_c)\,h_c\right]^3}{6{,}096 + 2h_c} = \frac{Q^2}{g} = 10{,}58
$$

La résolution par approximations successives donne $h_c = 0{,}64$ m, puis par
Manning-Strickler à cette profondeur :

$$
i_c = \left(\frac{Q\,n}{S_c\,R_{hc}^{2/3}}\right)^2 = 0{,}0028\ \mathrm{m/m}
$$

**c. Nature de l'écoulement pour $i = 0{,}00012$**

Le régime d'écoulement uniforme sous cette pente se juge sur le nombre de
Froude calculé à la profondeur normale. On commence donc par déterminer $h_n$.

*Profondeur normale.* Manning-Strickler s'écrit :

$$
Q = \frac{1}{n}\,S\,R_h^{2/3}\,i^{1/2} = \frac{1}{n}\,\frac{S^{5/3}}{P^{2/3}}\,i^{1/2}
\qquad\text{avec}\quad S = (6{,}096 + h)\,h,\quad P = 6{,}096 + 2\sqrt2\,h
$$

On isole $S$, puis $h$, pour obtenir une relation de point fixe :

$$
S = \left(\frac{n\,Q}{\sqrt{i}}\right)^{3/5} P^{2/5}
\quad\Longrightarrow\quad
h = \frac{4{,}862\,\left(6{,}096 + 2\sqrt2\,h\right)^{2/5}}{6{,}096 + h}
$$

En partant de $h = 0{,}914$ m, les approximations successives donnent
$1{,}646 \to 1{,}624 \to 1{,}625$, soit :

$$
h_n = 1{,}625\ \mathrm{m}
$$

*Nombre de Froude.* À cette profondeur :

$$
S_n = (6{,}096 + 1{,}625)\times1{,}625 = 12{,}54\ \mathrm{m^2}
\qquad
B_n = b + 2m\,h_n = 9{,}35\ \mathrm{m}
$$

$$
U_n = \frac{Q}{S_n} = \frac{10{,}19}{12{,}54} = 0{,}81\ \mathrm{m/s}
\qquad
H_h = \frac{S_n}{B_n} = 1{,}34\ \mathrm{m}
$$

$$
\mathrm{Fr} = \frac{U_n}{\sqrt{g\,H_h}} = \frac{0{,}81}{\sqrt{9{,}81\times1{,}34}} = 0{,}22
$$

Comme $\mathrm{Fr} < 1$, l'écoulement est **fluvial**. On retrouve la même
conclusion en comparant les profondeurs ($h_n = 1{,}625$ m $> h_c = 0{,}64$ m)
ou les pentes ($i = 0{,}00012 < i_c = 0{,}0028$) : le canal est à **pente
faible**.

:::note Correction du corrigé PDF
Le corrigé PDF conclut ici à un écoulement « torrentiel » et passe directement
à la position de la profondeur par rapport à $h_c$. C'est une coquille : avec
$\mathrm{Fr} = 0{,}22 < 1$, l'écoulement est fluvial.
:::

**d. Forme de la courbe de remous pour $i = 0{,}00012$**

On compare la profondeur $h = 0{,}914$ m aux profondeurs critique et normale
(cette dernière calculée en c) :

$$
h_c = 0{,}64\ \mathrm{m} \;<\; h = 0{,}914\ \mathrm{m} \;<\; h_n = 1{,}625\ \mathrm{m}
$$

La courbe de remous est de type **M2** (courbe d'abaissement).

</details>

## Exercice 5

Un débit de **10 m³/s** s'écoule dans un canal rectangulaire de **6 m** de
large, revêtu de béton ($n = 0{,}012$) et posé sur une pente de **0,0001**. Si
la profondeur en un point du canal est de **1,50 m**, à quelle distance (en
amont ou en aval) de ce point la profondeur sera-t-elle de **1,65 m** ?

<details>
<summary>Solution de l'exercice 5</summary>

On commence par identifier le type de courbe de remous.

**Profondeur normale.** Avec $S = b\,h$ et $P = b + 2h$, on résout

$$
\frac{1}{n}\,S\,R_h^{2/3}\,i^{1/2} - Q = 0
$$

par dichotomie : $h_n = 1{,}8345$ m.

**Profondeur et pente critiques.**

$$
h_c = \sqrt[3]{\frac{q^2}{g}} = 0{,}657\ \mathrm{m}
\qquad
i_c = \left(\frac{Q\,n}{S_c\,R_{hc}^{2/3}}\right)^2 = 0{,}002\ \mathrm{m/m}
$$

**Type de courbe.** $i_c > i$ : pente faible, courbe de type M. Comme
$h_c < h < h_n$ pour les deux profondeurs de l'énoncé, il s'agit d'une courbe
**M2**.

**Méthode directe (par pas).** Entre deux profondeurs successives, la
distance est

$$
\Delta x = \frac{\Delta H_s}{i - \bar J}
\qquad\text{avec}\quad
J = \frac{n^2\,Q^2}{S^2\,R_h^{4/3}}
\quad\text{et}\quad
\bar J = \frac{J_k + J_{k+1}}{2}
$$

On progresse de 1,50 m à 1,65 m par pas de 0,05 m :

| $h$ (m) | $S$ (m²) | $U$ (m/s) | $H_s$ (m) | $P$ (m) | $R_h$ (m) | $J$ | $\bar J$ | $\lvert\Delta x\rvert$ (m) | $\lvert x\rvert$ cumulé (m) |
|---|---|---|---|---|---|---|---|---|---|
| 1,50 | 9,0 | 1,1111 | 1,5629 | 9,0 | 1,0000 | 0,000178 | — | — | 0 |
| 1,55 | 9,3 | 1,0753 | 1,6089 | 9,1 | 1,0220 | 0,000162 | 0,000170 | 659,5 | 659,5 |
| 1,60 | 9,6 | 1,0417 | 1,6553 | 9,2 | 1,0435 | 0,000148 | 0,000155 | 848,1 | 1507,6 |
| 1,65 | 9,9 | 1,0101 | 1,7020 | 9,3 | 1,0645 | 0,000135 | 0,000141 | 1128,0 | 2635,5 |

Sur tout le tronçon $\bar J > i$, donc $i - \bar J < 0$ et chaque $\Delta x$
est **négatif** : la profondeur de 1,65 m se trouve **en amont** du point
considéré, ce qui est cohérent avec une courbe M2 (la profondeur diminue dans
le sens de l'écoulement).

$$
\boxed{\,\text{La profondeur de 1,65 m est atteinte à environ } 2\,636\ \mathrm{m} \text{ en amont.}\,}
$$

</details>
