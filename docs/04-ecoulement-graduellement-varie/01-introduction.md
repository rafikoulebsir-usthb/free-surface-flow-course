---
title: Introduction à l'écoulement graduellement varié
sidebar_label: Introduction
sidebar_position: 1
---

# Écoulement permanent graduellement varié

## Introduction

Les écoulements **graduellement variés** représentent la majorité des
écoulements rencontrés en canaux. Ils sont systématiquement calculés et
étudiés dans le cadre des diagnostics de réseau (assainissement, irrigation,
aménagement de rivières).

Ce chapitre :

1. rappelle les concepts de base nécessaires à la compréhension de
   l'écoulement (charge, charge spécifique, régime critique) ;
2. établit l'**équation de la courbe de remous**, qui décrit l'évolution de la
   profondeur le long du canal ;
3. interprète qualitativement les différentes **courbes de remous** possibles
   selon la pente du canal et la profondeur d'eau.

Les méthodes de calcul numérique de la ligne d'eau (méthode directe et
méthode standard par pas) font l'objet de la suite du chapitre.

## Qu'est-ce qu'un écoulement graduellement varié ?

L'écoulement uniforme correspond à un **équilibre** entre la composante du
poids qui fait avancer l'eau et le frottement sur les parois (voir
[Écoulement uniforme](../03-ecoulement-uniforme/01-description.md)). Dès que cet équilibre est
rompu — par un barrage, une vanne, une chute, un changement de pente… — la
profondeur ne reste plus constante : elle **varie progressivement** le long du
canal. On parle d'écoulement graduellement varié (EGV) lorsque cette variation
est suffisamment lente pour que les lignes de courant restent quasiment
parallèles.

| Type d'écoulement | Variation de $h$ | Longueur concernée | Exemple |
|---|---|---|---|
| Uniforme | nulle | — | canal long, loin de toute singularité |
| **Graduellement varié** | lente, $\mathrm{d}h/\mathrm{d}x \ll 1$ | centaines de mètres à kilomètres | remous à l'amont d'un barrage |
| Rapidement varié | brutale | quelques mètres | ressaut hydraulique, chute |

## Hypothèses de calcul

L'étude classique de l'EGV repose sur les hypothèses suivantes :

- écoulement **permanent** : le débit $Q$ est constant dans le temps, et
  constant le long du canal (pas d'apport latéral) ;
- **faible courbure** des lignes de courant : la répartition des pressions
  dans une section est **hydrostatique** ;
- **faible pente** du fond : $\cos\theta \approx 1$, la profondeur mesurée
  verticalement et perpendiculairement au fond se confondent ;
- canal **prismatique** : forme de la section, rugosité et pente constantes
  le long du tronçon étudié ;
- la **perte de charge** $J$ dans une section est la même que celle d'un
  écoulement **uniforme** de même profondeur et de même vitesse : on la
  calcule avec la formule de Manning-Strickler (ou de Chézy) appliquée à la
  profondeur locale ;
- coefficient de Coriolis $\alpha$ constant le long du tronçon.

:::note Pourquoi la dernière hypothèse est-elle acceptable ?
On ne connaît pas de loi de frottement « propre » aux écoulements non
uniformes. Comme la profondeur varie lentement, on admet que chaque section
se comporte localement comme un écoulement uniforme. L'expérience montre que
cette approximation donne d'excellents résultats tant que l'on reste loin des
zones de variation brusque (ressaut, chute).
:::
