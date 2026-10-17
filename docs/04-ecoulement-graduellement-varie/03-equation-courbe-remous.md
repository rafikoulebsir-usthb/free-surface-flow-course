---
title: Équation de la courbe de remous
sidebar_label: Équation de la courbe de remous
sidebar_position: 3
---

# Équation de la courbe de remous

## Origine physique

Les écoulements graduellement variés se produisent lorsque les forces de
**gravité** (composante du poids le long du fond) et de **frottement** ne sont
pas équilibrées : la profondeur varie alors progressivement le long du canal.
La ligne d'eau ainsi obtenue s'appelle la **courbe de remous**.

- Si la gravité l'emporte ($i > J$), l'eau accélère ou s'accumule selon le
  régime.
- Si le frottement l'emporte ($i < J$), c'est l'inverse.
- À l'équilibre ($i = J$), on retrouve l'écoulement uniforme : $h = h_n$.

## Établissement de l'équation

L'**équation dynamique** de l'écoulement graduellement varié s'obtient en
dérivant la charge par rapport à l'abscisse $x$, comptée positivement dans le
sens de l'écoulement.

On part de la charge totale :

$$
H = z + H_s = z + h + \alpha\frac{Q^2}{2g\,S^2}
$$

et on dérive chacun des termes :

- **charge totale** : elle diminue des pertes par frottement,
  $\dfrac{\mathrm{d}H}{\mathrm{d}x} = -J$ ;
- **cote du fond** : par définition de la pente,
  $\dfrac{\mathrm{d}z}{\mathrm{d}x} = -i$ ;
- **charge spécifique** : pour un débit et une section prismatique donnés,
  $H_s$ ne dépend que de $h$, d'où la dérivation en chaîne

$$
\frac{\mathrm{d}H_s}{\mathrm{d}x} = \frac{\mathrm{d}H_s}{\mathrm{d}h}\cdot\frac{\mathrm{d}h}{\mathrm{d}x}
= \left(1 - \alpha\frac{Q^2 B}{g\,S^3}\right)\frac{\mathrm{d}h}{\mathrm{d}x}
$$

En reportant dans $\dfrac{\mathrm{d}H}{\mathrm{d}x} = \dfrac{\mathrm{d}z}{\mathrm{d}x} + \dfrac{\mathrm{d}H_s}{\mathrm{d}x}$ :

$$
-J = -i + \left(1 - \alpha\frac{Q^2 B}{g\,S^3}\right)\frac{\mathrm{d}h}{\mathrm{d}x}
\qquad\Longleftrightarrow\qquad
\frac{\mathrm{d}H_s}{\mathrm{d}x} = i - J
$$

On obtient l'**équation de la courbe de remous** :

$$
\boxed{\,\frac{\mathrm{d}h}{\mathrm{d}x} = \frac{i - J}{1 - \alpha\dfrac{Q^2 B}{g\,S^3}} = \frac{i - J}{1 - \mathrm{Fr}^2}\,}
$$

En exprimant la perte de charge $J$ par la formule de Manning-Strickler
(hypothèse de l'écoulement localement uniforme) :

$$
J = \frac{Q^2}{K_s^2\, S^2\, R_h^{4/3}}
\qquad\Longrightarrow\qquad
\frac{\mathrm{d}h}{\mathrm{d}x} = \frac{i - \dfrac{Q^2}{K_s^2\, S^2\, R_h^{4/3}}}{1 - \alpha\dfrac{Q^2 B}{g\,S^3}}
$$

Le développement détaillé se trouve par exemple dans *Civil Engineering
Hydraulics*, Nalluri & Featherstone (chapitre sur l'écoulement
graduellement varié).

## Interprétation

Cette équation donne la pente de la surface libre **par rapport au fond** du
canal. Elle est le quotient de deux termes dont on connaît le signe :

- le **numérateur** $i - J$ compare la pente du fond à la pente de frottement.
  Comme $J$ diminue quand $h$ augmente, $i - J > 0$ pour $h > h_n$ et
  $i - J < 0$ pour $h < h_n$ ;
- le **dénominateur** $1 - \mathrm{Fr}^2$ indique le régime :
  $1 - \mathrm{Fr}^2 > 0$ en fluvial ($h > h_c$), $< 0$ en torrentiel
  ($h < h_c$).

Différents types de profils de surface peuvent donc se produire, selon que la
pente du canal est faible, forte, critique, nulle ou négative, et selon la
position de la profondeur d'eau par rapport à $h_n$ et à $h_c$.

:::tip Pente du fond, de la surface, de la ligne de charge
$\mathrm{d}h/\mathrm{d}x$ n'est pas la pente de la surface libre par rapport à
l'horizontale. La cote de la surface libre étant $z + h$, sa pente est
$\mathrm{d}(z+h)/\mathrm{d}x = -i + \mathrm{d}h/\mathrm{d}x$. En écoulement
graduellement varié, fond, surface libre et ligne de charge ne sont **plus
parallèles** — contrairement au régime uniforme.
:::

## Cas du canal rectangulaire très large

Afin de faciliter l'interprétation qualitative, on simplifie l'équation dans le
cas d'un canal rectangulaire **très large** : la profondeur est petite devant
la largeur ($h \ll b$), si bien que $R_h \approx h$.

Avec $S = bh$, $B = b$, $q = Q/b$ et $\alpha = 1$ :

- **perte de charge** : $J = \dfrac{q^2}{K_s^2\, h^{10/3}}$. En régime uniforme,
  $i = \dfrac{q^2}{K_s^2\, h_n^{10/3}}$, donc
  $\dfrac{J}{i} = \left(\dfrac{h_n}{h}\right)^{10/3}$ ;
- **nombre de Froude** : $\mathrm{Fr}^2 = \dfrac{q^2}{g\,h^3}$ et
  $h_c^3 = \dfrac{q^2}{g}$, donc $\mathrm{Fr}^2 = \left(\dfrac{h_c}{h}\right)^3$.

D'où l'équation de la courbe de remous pour un canal rectangulaire large :

$$
\boxed{\,\frac{\mathrm{d}h}{\mathrm{d}x} = i\;\frac{1 - \left(\dfrac{h_n}{h}\right)^{10/3}}{1 - \left(\dfrac{h_c}{h}\right)^{3}} = i\,\frac{\text{Num.}}{\text{Dén.}}\,}
$$

:::note Variante avec Chézy (formule de Bresse)
Si l'on exprime la perte de charge avec la formule de Chézy à coefficient $C$
constant, $J/i = (h_n/h)^3$, et l'équation devient
$\dfrac{\mathrm{d}h}{\mathrm{d}x} = i\,\dfrac{1 - (h_n/h)^{3}}{1 - (h_c/h)^{3}}$.
Cette forme, plus simple, s'intègre analytiquement (fonction de Bresse).
:::

:::note Exemple numérique
Reprenons le canal de la page précédente : $K_s = 50$, $q = 2\ \mathrm{m^2/s}$,
$i = 10^{-3}$, d'où $h_n = 1{,}15\ \mathrm{m}$ et $h_c = 0{,}74\ \mathrm{m}$.
À l'amont d'un barrage, où la profondeur vaut $h = 2\ \mathrm{m}$ :

$$
\frac{\mathrm{d}h}{\mathrm{d}x} = 0{,}001 \times \frac{1 - (1{,}15/2)^{10/3}}{1 - (0{,}74/2)^{3}}
= 0{,}001 \times \frac{0{,}841}{0{,}949} \approx 0{,}89 \times 10^{-3}
$$

La profondeur **augmente** vers l'aval, presque aussi vite que le fond
descend : la surface libre ne descend plus que de
$(1 - 0{,}89) \times 10^{-3} = 0{,}11 \times 10^{-3}$. Elle est quasiment **horizontale**, comme
dans une retenue.
:::

Le signe de $\mathrm{d}h/\mathrm{d}x$ dépend du signe du numérateur (position
de $h$ par rapport à $h_n$), du dénominateur (position de $h$ par rapport à
$h_c$) et de la pente $i$ : c'est l'objet de la page suivante.
