import {useState, type ReactNode} from 'react';
import styles from './styles.module.css';

const g = 9.81;

/** Charge spécifique d'un canal rectangulaire : Hs = h + q²/(2 g h²). */
const specificHead = (h: number, q: number) => h + (q * q) / (2 * g * h * h);

/** Recherche par dichotomie de h dans [a, b] tel que Hs(h) = target (Hs monotone sur l'intervalle). */
function solveDepth(q: number, target: number, a: number, b: number): number {
  let lo = a;
  let hi = b;
  const increasing = specificHead(b, q) > specificHead(a, q);
  for (let k = 0; k < 80; k++) {
    const mid = (lo + hi) / 2;
    const above = specificHead(mid, q) > target;
    if (above === increasing) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

const fmt = (v: number, d = 2) => v.toFixed(d).replace('.', ',');

/**
 * Courbe de charge spécifique Hs(h) d'un canal rectangulaire, à débit unitaire
 * q donné. Pour une charge Hs choisie, affiche les deux profondeurs conjuguées
 * (alternées) h' (torrentielle) et h'' (fluviale) et le point critique.
 */
export default function SpecificEnergyCurve(): ReactNode {
  const [q, setQ] = useState(2);
  const hc = Math.cbrt((q * q) / g);
  const hsMin = 1.5 * hc;
  const [ratioInput, setRatio] = useState(1.3); // Hs / Hs,min
  // Garde le point Hs dans la fenêtre du graphique (Hs ≤ 3,9 m).
  const maxRatio = Math.min(2, 3.9 / hsMin);
  const ratio = Math.min(ratioInput, maxRatio);
  const hs = ratio * hsMin;

  const hTorr = solveDepth(q, hs, 1e-3, hc);
  const hFluv = solveDepth(q, hs, hc, hs);
  const froude = (h: number) => q / Math.sqrt(g * h * h * h);

  // Repère du graphique : Hs en abscisse, h en ordonnée (mètres).
  const maxM = 4;
  const x0 = 50;
  const y0 = 330;
  const size = 300;
  const X = (hsVal: number) => x0 + (hsVal / maxM) * size;
  const Y = (h: number) => y0 - (h / maxM) * size;

  const pts: string[] = [];
  for (let k = 0; k <= 400; k++) {
    const h = 0.02 + (k / 400) * (maxM - 0.02);
    const e = specificHead(h, q);
    if (e <= maxM) pts.push(`${X(e).toFixed(1)},${Y(h).toFixed(1)}`);
  }

  const ticks = [0, 1, 2, 3, 4];

  return (
    <figure className={styles.figure}>
      <div className={styles.controls}>
        <label>
          <span>
            Débit unitaire <em>q</em> = <strong>{fmt(q)} m²/s</strong>
          </span>
          <input type="range" min={0.5} max={5} step={0.1} value={q} onChange={(e) => setQ(Number(e.target.value))} />
        </label>
        <label>
          <span>
            Charge spécifique <em>H<sub>s</sub></em> = <strong>{fmt(hs)} m</strong>
          </span>
          <input
            type="range"
            min={1}
            max={maxRatio}
            step={0.01}
            value={ratio}
            onChange={(e) => setRatio(Number(e.target.value))}
          />
        </label>
      </div>

      <svg viewBox="0 0 420 370" className={styles.svg} role="img" aria-label="Courbe de charge spécifique Hs(h) d'un canal rectangulaire">
        {/* Axes et graduations */}
        {ticks.map((t) => (
          <g key={t}>
            <line className={styles.grid} x1={X(t)} y1={Y(0)} x2={X(t)} y2={Y(maxM)} />
            <line className={styles.grid} x1={X(0)} y1={Y(t)} x2={X(maxM)} y2={Y(t)} />
            <text className={styles.tick} x={X(t)} y={y0 + 16} textAnchor="middle">{t}</text>
            <text className={styles.tick} x={x0 - 8} y={Y(t) + 4} textAnchor="end">{t}</text>
          </g>
        ))}
        <line className={styles.axis} x1={x0} y1={y0} x2={X(maxM)} y2={y0} />
        <line className={styles.axis} x1={x0} y1={y0} x2={x0} y2={Y(maxM)} />
        <text className={styles.axisLabel} x={X(maxM)} y={y0 + 32} textAnchor="end">Hs (m)</text>
        <text className={styles.axisLabel} x={x0 - 8} y={Y(maxM) - 10} textAnchor="middle">h (m)</text>

        {/* Asymptote Hs = h */}
        <line className={styles.asymptote} x1={X(0)} y1={Y(0)} x2={X(maxM)} y2={Y(maxM)} />
        <text className={styles.note} x={X(3.85)} y={Y(3.05)} textAnchor="end">Hs = h</text>

        {/* Profondeur critique */}
        <line className={styles.critical} x1={X(0)} y1={Y(hc)} x2={X(maxM)} y2={Y(hc)} />
        <text className={styles.criticalLabel} x={X(maxM) + 4} y={Y(hc) + 4}>hc</text>

        {/* Courbe Hs(h) */}
        <polyline className={styles.curve} points={pts.join(' ')} />

        {/* Charge choisie et profondeurs alternées */}
        <line className={styles.hsLine} x1={X(hs)} y1={Y(0)} x2={X(hs)} y2={Y(maxM)} />
        <circle className={styles.torr} cx={X(hs)} cy={Y(hTorr)} r={5} />
        <circle className={styles.fluv} cx={X(hs)} cy={Y(hFluv)} r={5} />
        <text className={styles.torrLabel} x={X(hs) + 8} y={Y(hTorr) + 4}>h′</text>
        <text className={styles.fluvLabel} x={X(hs) + 8} y={Y(hFluv) + 4}>h″</text>

        {/* Point critique */}
        <circle className={styles.crit} cx={X(hsMin)} cy={Y(hc)} r={5} />
        <text className={styles.criticalLabel} x={X(hsMin) - 8} y={Y(hc) - 8} textAnchor="end">C</text>

        <text className={styles.region} x={X(3.9)} y={Y(hc) - 8} textAnchor="end">fluvial (Fr &lt; 1)</text>
        <text className={styles.region} x={X(3.9)} y={Y(hc) + 16} textAnchor="end">torrentiel (Fr &gt; 1)</text>
      </svg>

      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Profondeur critique <em>h<sub>c</sub></em> = (q²/g)<sup>1/3</sup></td>
            <td>{fmt(hc, 3)} m</td>
          </tr>
          <tr>
            <td>Charge minimale <em>H<sub>s,min</sub></em> = 3/2 · <em>h<sub>c</sub></em></td>
            <td>{fmt(hsMin, 3)} m</td>
          </tr>
          <tr>
            <td>Profondeur torrentielle <em>h′</em></td>
            <td>{fmt(hTorr, 3)} m — Fr = {fmt(froude(hTorr))}</td>
          </tr>
          <tr>
            <td>Profondeur fluviale <em>h″</em></td>
            <td>{fmt(hFluv, 3)} m — Fr = {fmt(froude(hFluv))}</td>
          </tr>
        </tbody>
      </table>

      <figcaption className={styles.caption}>
        Courbe de charge spécifique d'un canal rectangulaire. Pour une même charge
        <em> H<sub>s</sub></em> &gt; <em>H<sub>s,min</sub></em>, deux profondeurs sont
        possibles ; elles se confondent en <em>h<sub>c</sub></em> au minimum de la courbe.
        Rapprochez <em>H<sub>s</sub></em> de <em>H<sub>s,min</sub></em> : un faible écart de
        charge suffit à faire varier fortement la profondeur.
      </figcaption>
    </figure>
  );
}
