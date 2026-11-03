---
title: "Série TD N°1 — Caractéristiques géométriques et écoulement uniforme"
sidebar_label: "Série 1 : Géométrie et écoulement uniforme"
sidebar_position: 1
---

# Série TD N°1 — Caractéristiques géométriques et écoulement permanent uniforme

Cette série porte sur les
[caractéristiques géométriques](../01-introduction/03-caracteristiques-geometriques.md)
des sections, le [régime d'écoulement](../02-regime-ecoulement/01-ondes-froude.md)
et la formule de [Manning-Strickler](../03-ecoulement-uniforme/05-manning-strickler.md),
y compris en [rugosité composée](../03-ecoulement-uniforme/07-rugosite-composee.md).

:::info Documents
- [Énoncé de la série (PDF)](/pdf/serie-td-1-enonce.pdf)
- [Corrigé de la série (PDF)](/pdf/serie-td-1-solution.pdf)
:::

Essayez de résoudre chaque exercice avant d'ouvrir la solution.

## Exercice 1

1. Déterminer la surface mouillée, le périmètre mouillé et le rayon hydraulique
   des canaux ayant les formes suivantes :

![Sections rectangulaire, triangulaire et trapézoïdale de l'exercice 1](/img/td/td1-ex1-sections.png)

2. Déterminer **le régime d'écoulement** des trois formes de canal précédentes
   avec le débit $Q = 10\ \mathrm{m^3/s}$.

<details>
<summary>Solution de l'exercice 1</summary>

**1. Caractéristiques géométriques**

*Cas 1 — section rectangulaire* ($b = 4$ m, $h = 1{,}2$ m) :

$$
S = b\,h = 4{,}8\ \mathrm{m^2}
\qquad
P = b + 2h = 6{,}4\ \mathrm{m}
\qquad
R_h = \frac{S}{P} = 0{,}75\ \mathrm{m}
$$

*Cas 2 — section triangulaire* (largeur au miroir $b = 1{,}5$ m, $h = 1$ m) :

$$
S = \frac{b\,h}{2} = 0{,}75\ \mathrm{m^2}
\qquad
P = 2\sqrt{h^2 + \left(\frac{b}{2}\right)^2} = 2{,}5\ \mathrm{m}
\qquad
R_h = \frac{S}{P} = 0{,}30\ \mathrm{m}
$$

*Cas 3 — section trapézoïdale* ($b = 4$ m, $h = 1{,}2$ m, berges inclinées de
$\alpha = 70^\circ$ sur l'horizontale). La longueur $c$ d'une berge mouillée et
son débord horizontal $b'$ valent :

$$
c = \frac{h}{\sin\alpha} = 1{,}28\ \mathrm{m}
\qquad
b' = c\cos\alpha = 0{,}44\ \mathrm{m}
$$

La section est un rectangle $b \times h$ flanqué de deux triangles de base $b'$
et de hauteur $h$ :

$$
S = b\,h + 2\left(\frac{b'\,h}{2}\right) = 5{,}32\ \mathrm{m^2}
\qquad
P = b + 2c = 6{,}55\ \mathrm{m}
\qquad
R_h = \frac{S}{P} = 0{,}81\ \mathrm{m}
$$

**2. Régime d'écoulement**

Le régime est donné par le nombre de Froude
$Fr = \dfrac{U}{\sqrt{g\,H_h}}$, avec $U = Q/S$ et $H_h = S/B$ ($B$ : largeur
au miroir).

| Cas | $U$ (m/s) | $B$ (m) | $H_h$ (m) | $Fr$ | Régime |
|---|---|---|---|---|---|
| 1 — rectangle | 2,08 | 4,00 | 1,20 | 0,61 | fluvial ($Fr < 1$) |
| 2 — triangle | 13,33 | 1,50 | 0,50 | 6,02 | torrentiel ($Fr > 1$) |
| 3 — trapèze | 1,88 | 4,87 | 1,09 | 0,57 | fluvial ($Fr < 1$) |

</details>

## Exercice 2

La profondeur normale de l'écoulement dans un canal trapézoïdal revêtu de béton
est de **2 m**. La largeur de base du canal est de **5 m** et les pentes
latérales sont de **1:2**. Le coefficient de Manning est $n = 0{,}015$ et la
pente du lit est $i = 0{,}001$. Déterminer le débit $Q$, la vitesse moyenne $U$
et le nombre de Reynolds $Re$.

<details>
<summary>Solution de l'exercice 2</summary>

Avec $b = 5$ m, $y = 2$ m et un fruit $m = 2$ :

$$
S = (b + m\,y)\,y = 18\ \mathrm{m^2}
\qquad
P = b + 2y\sqrt{1 + m^2} = 13{,}94\ \mathrm{m}
\qquad
R_h = \frac{S}{P} = 1{,}29\ \mathrm{m}
$$

Le débit s'obtient par la formule de Manning-Strickler :

$$
Q = \frac{1}{n}\,\frac{S^{5/3}}{P^{2/3}}\,i^{1/2} \approx 45\ \mathrm{m^3/s}
\qquad
U = \frac{Q}{S} = 2{,}5\ \mathrm{m/s}
$$

Le nombre de Reynolds, construit sur le rayon hydraulique, vaut (avec
$\rho = 1000\ \mathrm{kg/m^3}$ et $\mu = 1{,}14\times10^{-3}\ \mathrm{Pa\cdot s}$) :

$$
Re = \frac{\rho\,R_h\,U}{\mu} = 2{,}83\times10^{6}
$$

L'écoulement est donc largement turbulent, ce qui justifie l'emploi de la
formule de Manning-Strickler.

</details>

## Exercice 3

Un canal trapézoïdal avec des pentes latérales de **1:1** et une pente de lit
de **1:1000** a un lit de **3 m** de large composé de sable ($n = 0{,}02$) et
des côtés en béton ($n = 0{,}014$). Estimer le débit lorsque la profondeur de
l'écoulement est de **2,0 m**.

![Canal trapézoïdal à rugosité composée de l'exercice 3](/img/td/td1-ex3-trapeze.png)

<details>
<summary>Solution de l'exercice 3</summary>

Les parois ont des coefficients de Manning différents : on calcule un
coefficient **équivalent** par la formule de Horton-Einstein (voir
[Rugosité composée](../03-ecoulement-uniforme/07-rugosite-composee.md)) :

$$
n = \left(\frac{\sum P_i\, n_i^{3/2}}{P}\right)^{2/3}
$$

Périmètres mouillés partiels ($y = 2$ m, fruit $m = 1$) :

$$
P_1 = P_3 = \sqrt{y^2 + (m\,y)^2} = \sqrt{8} = 2{,}83\ \mathrm{m}
\qquad
P_2 = 3\ \mathrm{m}
\qquad
P = 8{,}66\ \mathrm{m}
$$

Surface mouillée :

$$
S = (b + m\,y)\,y = 10\ \mathrm{m^2}
$$

D'où le coefficient équivalent et le débit :

$$
n = \left(\frac{2 \times 2{,}83 \times 0{,}014^{3/2} + 3 \times 0{,}02^{3/2}}{8{,}66}\right)^{2/3} = 0{,}0162
$$

$$
Q = \frac{1}{n}\,\frac{S^{5/3}}{P^{2/3}}\,i^{1/2} = 21{,}5\ \mathrm{m^3/s}
$$

</details>

## Exercice 4

1. Déterminer la section optimale d'un canal trapézoïdal ($n = 0{,}025$) devant
   transporter **12,7 m³/s**. Pour éviter l'érosion, la vitesse moyenne ne doit
   pas dépasser **0,91 m/s**, et les côtés doivent avoir une pente de **1/2**.
2. Quelle doit être la pente $i$ du canal ?

<details>
<summary>Solution de l'exercice 4</summary>

**1. Section optimale**

La section dépend de deux inconnues, $b$ et $y$. Avec un fruit $m = 2$ :

$$
S = (b + m\,y)\,y = b\,y + 2y^2
\qquad\text{et}\qquad
S = \frac{Q}{U} = \frac{12{,}7}{0{,}91} = 13{,}96\ \mathrm{m^2}
$$

d'où

$$
b = \frac{13{,}96 - 2y^2}{y}
$$

Une seconde équation est fournie par la condition de **section optimale** : à
surface donnée, le périmètre mouillé est minimal, et le rayon hydraulique
maximal vaut alors $R_h = y/2$ (démonstration ci-dessous). Avec
$P = b + 2y\sqrt{1 + m^2} = b + 2y\sqrt5$ :

$$
R_h = \frac{b\,y + 2y^2}{b + 2y\sqrt5} = \frac{y}{2}
\quad\Longrightarrow\quad
b = 2y\sqrt5 - 4y = 0{,}472\,y
$$

En reportant dans l'expression de $S$ : $2{,}472\,y^2 = 13{,}96$, soit

$$
\boxed{\,y = 2{,}38\ \mathrm{m}
\qquad
b = 1{,}12\ \mathrm{m}\,}
$$

**2. Pente du canal**

Par Manning-Strickler, avec $R_h = y/2 = 1{,}19$ m :

$$
U = \frac{1}{n}\,R_h^{2/3}\,i^{1/2}
\quad\Longrightarrow\quad
i = \left(\frac{U\,n}{R_h^{2/3}}\right)^2 = 4{,}1\times10^{-4}
$$

**Annexe — rayon hydraulique de la section optimale**

![Section trapézoïdale paramétrée par l'angle θ des berges avec la verticale](/img/td/td1-ex4-section-optimale.png)

Soit $\theta$ l'angle des berges avec la verticale. Chaque berge déborde de
$y\tan\theta$ horizontalement et a pour longueur $y/\cos\theta$ :

$$
S = b\,y + y^2\tan\theta
\quad\Longrightarrow\quad
b = \frac{S}{y} - y\tan\theta
$$

$$
P = b + \frac{2y}{\cos\theta} = \frac{S}{y} - y\tan\theta + \frac{2y}{\cos\theta}
$$

À $S$ fixée, on minimise $P$ en annulant sa dérivée par rapport à $y$ :

$$
\frac{dP}{dy} = -\frac{S}{y^2} - \tan\theta + \frac{2}{\cos\theta} = 0
\quad\Longrightarrow\quad
S = \left(\frac{2}{\cos\theta} - \tan\theta\right) y^2
$$

En reportant dans $P$, on obtient $P = 2\left(\dfrac{2}{\cos\theta} - \tan\theta\right) y$,
d'où :

$$
\boxed{\,R_h = \frac{S}{P} = \frac{y}{2}\,}
$$

</details>
