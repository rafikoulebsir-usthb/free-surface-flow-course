import type {ReactNode} from 'react';
import styles from './styles.module.css';

/**
 * Profils de remous calculés (et non dessinés à main levée) pour un canal
 * rectangulaire très large, en grandeurs adimensionnelles : h est rapporté à
 * hc (hc = 1) et la pente à la pente critique (ic = 1). On a alors
 *   J = h^(-10/3)  (Manning-Strickler),  Fr² = h^(-3),
 *   dh/dx = (i − J) / (1 − Fr²),
 * que l'on intègre sous la forme dx/dh = 1 / (dh/dx) entre la profondeur
 * imposée par la section de contrôle et la profondeur limite (hn, hc ou ∞).
 */

type Family = 'M' | 'S' | 'C' | 'H' | 'A';
type Control = 'dam' | 'gate' | 'fall' | 'break';

interface Profile {
  name: string;
  family: Family;
  /** Profondeur imposée par la section de contrôle. */
  h0: number;
  /** Profondeur à laquelle on arrête le tracé. */
  h1: number;
  control: Control;
  zone: string;
  sign: string;
  example: string;
}

const HN: Record<Family, number> = {M: 1.6, S: 0.6, C: 1, H: Infinity, A: Infinity};
const SLOPE: Record<Family, number> = {
  M: Math.pow(HN.M, -10 / 3),
  S: Math.pow(HN.S, -10 / 3),
  C: 1,
  H: 0,
  A: -0.3,
};
/** Inclinaison du fond à l'écran (purement visuelle). */
const TILT: Record<Family, number> = {M: 0.07, S: 0.2, C: 0.13, H: 0, A: -0.07};

const PROFILES: Profile[] = [
  {name: 'M1', family: 'M', h0: 3, h1: 1.6 * 1.03, control: 'dam', zone: 'h > hn > hc', sign: 'dh/dx > 0', example: 'Remous à l’amont d’un barrage ou d’un seuil.'},
  {name: 'M2', family: 'M', h0: 1.02, h1: 1.6 * 0.97, control: 'fall', zone: 'hn > h > hc', sign: 'dh/dx < 0', example: 'Abaissement de la ligne d’eau à l’approche d’une chute.'},
  {name: 'M3', family: 'M', h0: 0.35, h1: 0.97, control: 'gate', zone: 'hn > hc > h', sign: 'dh/dx > 0', example: 'À l’aval d’une vanne de fond, jusqu’au ressaut.'},
  {name: 'S1', family: 'S', h0: 2.2, h1: 1.03, control: 'dam', zone: 'h > hc > hn', sign: 'dh/dx > 0', example: 'Entre un ressaut et un barrage sur forte pente.'},
  {name: 'S2', family: 'S', h0: 0.98, h1: 0.6 * 1.03, control: 'break', zone: 'hc > h > hn', sign: 'dh/dx < 0', example: 'Après une rupture de pente faible → forte.'},
  {name: 'S3', family: 'S', h0: 0.3, h1: 0.6 * 0.97, control: 'gate', zone: 'hc > hn > h', sign: 'dh/dx > 0', example: 'À l’aval d’une vanne sur forte pente.'},
  {name: 'C1', family: 'C', h0: 2.2, h1: 1.04, control: 'dam', zone: 'h > hc = hn', sign: 'dh/dx > 0', example: 'À l’amont d’un obstacle, pente critique.'},
  {name: 'C3', family: 'C', h0: 0.4, h1: 0.96, control: 'gate', zone: 'h < hc = hn', sign: 'dh/dx > 0', example: 'À l’aval d’une vanne, pente critique.'},
  {name: 'H2', family: 'H', h0: 1.02, h1: 2.4, control: 'fall', zone: 'h > hc', sign: 'dh/dx < 0', example: 'Canal horizontal se terminant par une chute.'},
  {name: 'H3', family: 'H', h0: 0.35, h1: 0.97, control: 'gate', zone: 'h < hc', sign: 'dh/dx > 0', example: 'À l’aval d’une vanne, fond horizontal.'},
  {name: 'A2', family: 'A', h0: 1.02, h1: 2.4, control: 'fall', zone: 'h > hc', sign: 'dh/dx < 0', example: 'Contre-pente se terminant par une chute.'},
  {name: 'A3', family: 'A', h0: 0.35, h1: 0.97, control: 'gate', zone: 'h < hc', sign: 'dh/dx > 0', example: 'À l’aval d’une vanne, contre-pente.'},
];

const FAMILY_LABEL: Record<Family, string> = {
  M: 'pente faible (i < ic)',
  S: 'forte pente (i > ic)',
  C: 'pente critique (i = ic)',
  H: 'fond horizontal (i = 0)',
  A: 'contre-pente (i < 0)',
};

/** dh/dx adimensionnel. */
const slopeOfSurface = (h: number, i: number) => (i - Math.pow(h, -10 / 3)) / (1 - Math.pow(h, -3));

/** Abscisses x(h) par intégration de dx/dh (méthode des trapèzes). */
function integrate(p: Profile): {x: number; h: number}[] {
  const i = SLOPE[p.family];
  const n = 400;
  const pts = [{x: 0, h: p.h0}];
  let x = 0;
  for (let k = 1; k <= n; k++) {
    const ha = p.h0 + ((p.h1 - p.h0) * (k - 1)) / n;
    const hb = p.h0 + ((p.h1 - p.h0) * k) / n;
    x += ((1 / slopeOfSurface(ha, i) + 1 / slopeOfSurface(hb, i)) / 2) * (hb - ha);
    pts.push({x, h: hb});
  }
  return pts;
}

const W = 260;
const XA = 18;
const XB = 242;
const SCALE = 26; // pixels par unité de h/hc

function Panel({p}: {p: Profile}): ReactNode {
  const tilt = TILT[p.family];
  const hn = HN[p.family];
  const raw = integrate(p);
  const xs = raw.map((r) => r.x);
  const xmin = Math.min(...xs);
  const xmax = Math.max(...xs);
  const X = (x: number) => XA + ((x - xmin) / (xmax - xmin)) * (XB - XA);

  // Position verticale : on cale le point le plus haut à y = 22.
  const hTop = Math.max(p.h0, p.h1, Number.isFinite(hn) ? hn : 0, 1) * SCALE;
  const offset = 22 + hTop + Math.max(0, -tilt) * W;
  const bed = (px: number) => offset + tilt * px;
  const surf = (px: number, h: number) => bed(px) - h * SCALE;

  const surface = raw.map((r) => `${X(r.x).toFixed(1)},${surf(X(r.x), r.h).toFixed(1)}`).join(' ');
  const left = 6;
  const right = W - 6;

  // Section de contrôle : là où la profondeur h0 est imposée.
  const cx = X(0);
  const control = (() => {
    const yb = bed(cx);
    const ys = surf(cx, p.h0);
    switch (p.control) {
      case 'dam':
        return <rect className={styles.structure} x={cx} y={ys - 6} width={8} height={yb - ys + 6} />;
      case 'gate':
        return <rect className={styles.structure} x={cx - 6} y={ys - 36} width={5} height={36} />;
      case 'fall':
        return <circle className={styles.controlDot} cx={cx} cy={ys} r={3} />;
      case 'break':
        return <circle className={styles.controlDot} cx={cx} cy={yb} r={3} />;
    }
  })();

  // Fond : une chute coupe le fond à droite de la section de contrôle.
  const bedEnd = p.control === 'fall' ? cx : right;

  // Hauteur ajustée au contenu : point bas du fond (+ chute éventuelle).
  const height = Math.max(bed(left), bed(right)) + (p.control === 'fall' ? 26 : 12);

  return (
    <figure className={styles.panel}>
      <svg viewBox={`0 0 ${W} ${height.toFixed(0)}`} className={styles.svg} role="img" aria-label={`Profil de remous ${p.name}`}>
        {p.control === 'break' && (
          <line className={styles.bed} x1={left} y1={bed(cx) - (cx - left) * 0.05} x2={cx} y2={bed(cx)} />
        )}
        <line className={styles.bed} x1={p.control === 'break' ? cx : left} y1={bed(p.control === 'break' ? cx : left)} x2={bedEnd} y2={bed(bedEnd)} />
        {p.control === 'fall' && <line className={styles.bed} x1={bedEnd} y1={bed(bedEnd)} x2={bedEnd} y2={bed(bedEnd) + 18} />}

        {/* Hauteur critique et hauteur normale, parallèles au fond */}
        <line className={styles.critical} x1={left} y1={surf(left, 1)} x2={bedEnd} y2={surf(bedEnd, 1)} />
        {Number.isFinite(hn) && hn !== 1 && (
          <line className={styles.normal} x1={left} y1={surf(left, hn)} x2={bedEnd} y2={surf(bedEnd, hn)} />
        )}
        <text className={styles.criticalLabel} x={left} y={surf(left, 1) - 3}>
          {p.family === 'C' ? 'N = C' : 'C'}
        </text>
        {Number.isFinite(hn) && hn !== 1 && (
          <text className={styles.normalLabel} x={bedEnd - 4} y={surf(bedEnd - 4, hn) - 4} textAnchor="end">N</text>
        )}

        <polyline className={styles.surface} points={surface} />
        {control}

        <text className={styles.name} x={W - 8} y={16} textAnchor="end">{p.name}</text>
      </svg>
      <figcaption className={styles.caption}>
        <strong>{p.zone}</strong> · {p.sign}
        <br />
        {p.example}
      </figcaption>
    </figure>
  );
}

export default function BackwaterProfiles(): ReactNode {
  const families: Family[] = ['M', 'S', 'C', 'H', 'A'];
  return (
    <div className={styles.wrapper}>
      {families.map((f) => (
        <section key={f} className={styles.family}>
          <h4 className={styles.familyTitle}>
            Courbes {f} — {FAMILY_LABEL[f]}
          </h4>
          <div className={styles.grid}>
            {PROFILES.filter((p) => p.family === f).map((p) => (
              <Panel key={p.name} p={p} />
            ))}
          </div>
        </section>
      ))}
      <p className={styles.legend}>
        <span className={styles.legendSurface}>—</span> surface libre (calculée) ·{' '}
        <span className={styles.legendNormal}>- -</span> N : profondeur normale ·{' '}
        <span className={styles.legendCritical}>- -</span> C : profondeur critique.
        Profils intégrés numériquement pour un canal rectangulaire large
        (Manning-Strickler) ; pentes du fond exagérées à l’écran.
      </p>
    </div>
  );
}
