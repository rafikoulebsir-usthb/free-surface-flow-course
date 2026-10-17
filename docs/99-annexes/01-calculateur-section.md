---
title: Calculateur de section
sidebar_label: Calculateur de section
sidebar_position: 1
---

import SectionCalculator from '@site/src/components/SectionCalculator';

# Calculateur de section

Cet outil calcule les caractéristiques d'une section de canal rectangulaire,
trapézoïdale ou triangulaire en **écoulement uniforme**. Deux usages sont
possibles, selon la grandeur imposée :

- **hauteur d'eau $h$ imposée** : on obtient le débit $Q$ par la formule de
  Manning-Strickler ;
- **débit $Q$ imposé** : on obtient la
  [hauteur normale](../03-ecoulement-uniforme/06-hauteur-normale.md) $h_n$.

Les berges sont définies par leur fruit $m$ : une berge s'élève de 1 m
verticalement pour $m$ mètres horizontalement. La rugosité des parois est
choisie dans une liste de matériaux usuels ou saisie directement par le
coefficient de Manning $n$ (le coefficient de Strickler $K_s = 1/n$ est
affiché en regard).

<SectionCalculator />

## Formules utilisées

Pour une section trapézoïdale de largeur au fond $b$ et de fruit $m$ :

$$
S = (b + m\,h)\,h
\qquad
P = b + 2\,h\sqrt{1 + m^2}
\qquad
B = b + 2\,m\,h
$$

La section rectangulaire correspond à $m = 0$, la section triangulaire à
$b = 0$. Les grandeurs dérivées sont celles du chapitre
[Caractéristiques géométriques](../01-introduction/03-caracteristiques-geometriques.md) :

$$
R_h = \frac{S}{P}
\qquad
H_h = \frac{S}{B}
\qquad
D_h = 4\,R_h
$$

Le débit est donné par la formule de
[Manning-Strickler](../03-ecoulement-uniforme/05-manning-strickler.md) :

$$
Q = \frac{1}{n}\,S\,R_h^{2/3}\,i^{1/2}
$$

Lorsque le débit est imposé, cette relation est résolue numériquement en $h$
(par dichotomie) : le résultat est la hauteur normale $h_n$. On en déduit
ensuite :

$$
U = \frac{Q}{S}
\qquad
Fr = \frac{U}{\sqrt{g\,H_h}}
\qquad
H_s = h + \frac{U^2}{2g}
$$
