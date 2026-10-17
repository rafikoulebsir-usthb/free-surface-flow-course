import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

type Chapter = {
  number: string;
  title: ReactNode;
  summary: ReactNode;
  to: string;
};

const CHAPTERS: Chapter[] = [
  {
    number: '01',
    to: '/cours/introduction',
    title: <Translate id="outline.ch1.title">Généralités</Translate>,
    summary: (
      <Translate id="outline.ch1.summary">
        Surface libre contre écoulement en charge, classification des régimes,
        rappels de Bernoulli et de la quantité de mouvement.
      </Translate>
    ),
  },
  {
    number: '02',
    to: '/cours/regime-ecoulement',
    title: <Translate id="outline.ch2.title">Régime d'écoulement</Translate>,
    summary: (
      <Translate id="outline.ch2.summary">
        Ondes de gravité, nombre de Froude, hauteur critique et sections de
        contrôle, régimes fluvial et torrentiel.
      </Translate>
    ),
  },
  {
    number: '03',
    to: '/cours/ecoulement-uniforme',
    title: <Translate id="outline.ch3.title">Écoulement uniforme</Translate>,
    summary: (
      <Translate id="outline.ch3.summary">
        Chézy et Manning-Strickler, profondeur normale, calcul des canaux et
        section de débit maximal.
      </Translate>
    ),
  },
  {
    number: '04',
    to: '/cours/ecoulement-graduellement-varie',
    title: (
      <Translate id="outline.ch6.title">
        Écoulement graduellement varié
      </Translate>
    ),
    summary: (
      <Translate id="outline.ch6.summary">
        Équation de la courbe de remous, profils M, S, C, H, A et méthodes
        d’intégration numérique.
      </Translate>
    ),
  },
  {
    number: '05',
    to: '/cours/ressaut-hydraulique',
    title: <Translate id="outline.ch5.title">Ressaut hydraulique</Translate>,
    summary: (
      <Translate id="outline.ch5.summary">
        Force spécifique, relation de Bélanger, perte de charge et bassins de
        dissipation.
      </Translate>
    ),
  },
  {
    number: '06',
    to: '/cours/ouvrages-hydrauliques',
    title: <Translate id="outline.ch7.title">Ouvrages hydrauliques</Translate>,
    summary: (
      <Translate id="outline.ch7.summary">
        Déversoirs et seuils, vannes de fond, chutes, marches de fond et canaux
        Venturi.
      </Translate>
    ),
  },
  {
    number: 'TD',
    to: '/cours/travaux-diriges',
    title: <Translate id="outline.td.title">Travaux dirigés</Translate>,
    summary: (
      <Translate id="outline.td.summary">
        Trois séries d’exercices avec éléments de correction, du calcul de canal
        au dimensionnement d’un bassin de dissipation.
      </Translate>
    ),
  },
];

export default function CourseOutline(): ReactNode {
  return (
    <section className={styles.outline}>
      <div className="container">
        <h2 className={styles.heading}>
          <Translate id="outline.heading">Programme du cours</Translate>
        </h2>
        <div className={styles.grid}>
          {CHAPTERS.map((chapter) => (
            <Link
              key={chapter.number}
              to={chapter.to}
              className={styles.card}>
              <span className={styles.number}>{chapter.number}</span>
              <h3 className={styles.cardTitle}>{chapter.title}</h3>
              <p className={styles.cardSummary}>{chapter.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
