import {useState, type ReactNode} from 'react';
import styles from './styles.module.css';

const g = 9.81;

type Shape = 'rect' | 'trap' | 'tri';
type Mode = 'depth' | 'flow';

const SHAPES: {id: Shape; label: string}[] = [
  {id: 'rect', label: 'Rectangulaire'},
  {id: 'trap', label: 'Trapézoïdale'},
  {id: 'tri', label: 'Triangulaire'},
];

/** Valeurs usuelles du coefficient de Manning n (s/m^1/3). */
const MATERIALS: {label: string; n: number}[] = [
  {label: 'Béton lissé', n: 0.012},
  {label: 'Béton courant', n: 0.014},
  {label: 'Maçonnerie de moellons', n: 0.025},
  {label: 'Terre, canal rectiligne et propre', n: 0.022},
  {label: 'Terre, avec herbes', n: 0.03},
  {label: 'Gravier', n: 0.025},
  {label: 'Enrochements', n: 0.035},
  {label: 'Cours d’eau de plaine, net et droit', n: 0.03},
  {label: 'Cours d’eau sinueux, pierres et herbes', n: 0.05},
];

/**
 * Caractéristiques géométriques d'une section trapézoïdale de largeur au fond
 * b, de fruit des berges m (1 V : m H) et de hauteur d'eau h. Le rectangle
 * (m = 0) et le triangle (b = 0) en sont des cas particuliers.
 */
function geometry(b: number, m: number, h: number) {
  const S = (b + m * h) * h;
  const P = b + 2 * h * Math.sqrt(1 + m * m);
  const B = b + 2 * m * h;
  const Rh = S / P;
  return {S, P, B, Rh, Hh: S / B, Dh: 4 * Rh};
}

/** Débit de Manning-Strickler : Q = (1/n) S Rh^(2/3) i^(1/2). */
function manningFlow(b: number, m: number, h: number, n: number, i: number) {
  const {S, Rh} = geometry(b, m, h);
  return (S * Math.pow(Rh, 2 / 3) * Math.sqrt(i)) / n;
}

/** Hauteur normale par dichotomie (Q croît avec h pour ces sections). */
function normalDepth(b: number, m: number, Q: number, n: number, i: number): number {
  let lo = 0;
  let hi = 1;
  while (manningFlow(b, m, hi, n, i) < Q && hi < 1e4) hi *= 2;
  for (let k = 0; k < 100; k++) {
    const mid = (lo + hi) / 2;
    if (manningFlow(b, m, mid, n, i) < Q) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

const fmt = (v: number, d = 3) => (Number.isFinite(v) ? v.toFixed(d).replace('.', ',') : '—');

/** Lit un nombre saisi en acceptant la virgule décimale. */
const parse = (s: string) => Number(s.replace(',', '.'));

function Field({
  label,
  unit,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: ReactNode;
  unit: ReactNode;
  value: string;
  onChange: (v: string) => void;
  min: number;
  max: number;
  step: number;
}): ReactNode {
  const v = parse(value);
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <span className={styles.inputWrap}>
        <input type="text" inputMode="decimal" value={value} onChange={(e) => onChange(e.target.value)} />
        <span className={styles.unit}>{unit}</span>
      </span>
      {/* Le curseur suit la valeur saisie et la modifie en continu. */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={Number.isFinite(v) ? Math.min(Math.max(v, min), max) : min}
        onChange={(e) => onChange(e.target.value.replace('.', ','))}
      />
    </label>
  );
}

function Toggle<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: {id: T; label: string}[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}): ReactNode {
  return (
    <div className={styles.tabs} role="tablist" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="tab"
          aria-selected={value === o.id}
          className={value === o.id ? styles.tabActive : styles.tab}
          onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/**
 * Calculateur d'une section de canal (rectangle, trapèze, triangle) en
 * régime uniforme : à partir de la hauteur d'eau, on obtient le débit de
 * Manning-Strickler ; à partir du débit, on obtient la hauteur normale.
 * Affiche aussi S, P, Rh, B, Hh, Dh, U, Fr et Hs.
 */
export default function SectionCalculator(): ReactNode {
  const [shape, setShape] = useState<Shape>('trap');
  const [mode, setMode] = useState<Mode>('depth');
  const [bIn, setB] = useState('2');
  const [mIn, setM] = useState('1,5');
  const [hIn, setH] = useState('1');
  const [qIn, setQ] = useState('5');
  const [nIn, setN] = useState('0,014');
  const [iIn, setI] = useState('0,001');

  const b = shape === 'tri' ? 0 : parse(bIn);
  const m = shape === 'rect' ? 0 : parse(mIn);
  const n = parse(nIn);
  const i = parse(iIn);

  let error = '';
  if (shape !== 'tri' && !(b > 0)) error = 'La largeur au fond b doit être strictement positive.';
  else if (shape !== 'rect' && !(m > 0)) error = 'Le fruit des berges m doit être strictement positif.';
  else if (!(n > 0)) error = 'Le coefficient de Manning n doit être strictement positif.';
  else if (!(i > 0)) error = 'La pente i doit être strictement positive.';
  else if (mode === 'depth' && !(parse(hIn) > 0)) error = 'La hauteur d’eau h doit être strictement positive.';
  else if (mode === 'flow' && !(parse(qIn) > 0)) error = 'Le débit Q doit être strictement positif.';

  const h = error ? NaN : mode === 'depth' ? parse(hIn) : normalDepth(b, m, parse(qIn), n, i);
  const Q = error ? NaN : mode === 'flow' ? parse(qIn) : manningFlow(b, m, h, n, i);
  const geo = error ? null : geometry(b, m, h);
  const U = geo ? Q / geo.S : NaN;
  const Fr = geo ? U / Math.sqrt(g * geo.Hh) : NaN;
  const Hs = h + (U * U) / (2 * g);
  const regime = Fr < 0.99 ? 'fluvial' : Fr > 1.01 ? 'torrentiel' : 'critique';

  const preset = MATERIALS.findIndex((mat) => Math.abs(mat.n - n) < 1e-9);

  // Schéma de la section à l'échelle : la berge dépasse la surface libre de 25 %.
  const W = 400;
  const H = 230;
  const pad = 40;
  const top = 1.25 * h;
  const widthTop = b + 2 * m * top;
  const scale = geo ? Math.min((W - 2 * pad) / widthTop, (H - 2 * pad) / top) : 1;
  const cx = W / 2;
  const yBed = H - pad;
  const X = (x: number) => cx + x * scale;
  const Y = (y: number) => yBed - y * scale;
  const half = b / 2;

  return (
    <figure className={styles.figure}>
      <Toggle label="Forme de la section" options={SHAPES} value={shape} onChange={setShape} />
      <Toggle
        label="Grandeur imposée"
        options={[
          {id: 'depth', label: 'Hauteur h → débit Q'},
          {id: 'flow', label: 'Débit Q → hauteur normale hn'},
        ]}
        value={mode}
        onChange={setMode}
      />

      <div className={styles.inputs}>
        {shape !== 'tri' && (
          <Field label={<>Largeur au fond <em>b</em></>} unit="m" value={bIn} onChange={setB} min={0.1} max={20} step={0.1} />
        )}
        {shape !== 'rect' && (
          <Field
            label={<>Fruit des berges <em>m</em> (1 V : m H)</>}
            unit="—"
            value={mIn}
            onChange={setM}
            min={0.1}
            max={5}
            step={0.05}
          />
        )}
        <Field label={<>Pente du fond <em>i</em></>} unit="m/m" value={iIn} onChange={setI} min={0.0001} max={0.05} step={0.0001} />
        {mode === 'depth' ? (
          <Field label={<>Hauteur d'eau <em>h</em></>} unit="m" value={hIn} onChange={setH} min={0.05} max={10} step={0.05} />
        ) : (
          <Field label={<>Débit <em>Q</em></>} unit="m³/s" value={qIn} onChange={setQ} min={0.1} max={200} step={0.1} />
        )}
      </div>

      <fieldset className={styles.manning}>
        <legend>Rugosité des parois</legend>
        <label className={styles.field}>
          <span>Nature des parois</span>
          <select
            value={preset}
            onChange={(e) => {
              const k = Number(e.target.value);
              if (k >= 0) setN(String(MATERIALS[k].n).replace('.', ','));
            }}>
            <option value={-1}>Valeur personnalisée</option>
            {MATERIALS.map((mat, k) => (
              <option key={mat.label} value={k}>
                {mat.label} — n = {fmt(mat.n)}
              </option>
            ))}
          </select>
        </label>
        <Field
          label={<>Coefficient de Manning <em>n</em></>}
          unit={<>s/m<sup>1/3</sup></>}
          value={nIn}
          onChange={setN}
          min={0.01}
          max={0.08}
          step={0.001}
        />
        <p className={styles.strickler}>
          Coefficient de Strickler <em>K<sub>s</sub></em> = 1/<em>n</em> ={' '}
          <strong>{n > 0 ? fmt(1 / n, 1) : '—'} m<sup>1/3</sup>/s</strong>
        </p>
      </fieldset>

      {error && <p className={styles.error}>{error}</p>}

      {geo && (
        <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg} role="img" aria-label="Schéma de la section transversale">
          <polygon
            className={styles.water}
            points={`${X(-half - m * h)},${Y(h)} ${X(half + m * h)},${Y(h)} ${X(half)},${Y(0)} ${X(-half)},${Y(0)}`}
          />
          <polyline
            className={styles.wetted}
            points={`${X(-half - m * h)},${Y(h)} ${X(-half)},${Y(0)} ${X(half)},${Y(0)} ${X(half + m * h)},${Y(h)}`}
          />
          <polyline
            className={styles.bank}
            points={`${X(-half - m * top)},${Y(top)} ${X(-half - m * h)},${Y(h)}`}
          />
          <polyline className={styles.bank} points={`${X(half + m * h)},${Y(h)} ${X(half + m * top)},${Y(top)}`} />
          <line className={styles.surface} x1={X(-half - m * h)} y1={Y(h)} x2={X(half + m * h)} y2={Y(h)} />

          {/* Cotes : B en surface, h à droite, b au fond */}
          <text className={styles.dim} x={cx} y={Y(h) - 8} textAnchor="middle">B = {fmt(geo.B, 2)} m</text>
          <line className={styles.dimLine} x1={X(half + m * h) + 14} y1={Y(0)} x2={X(half + m * h) + 14} y2={Y(h)} />
          <text className={styles.dim} x={X(half + m * h) + 20} y={(Y(0) + Y(h)) / 2 + 4}>
            {mode === 'depth' ? 'h' : 'hn'} = {fmt(h, 2)} m
          </text>
          {b > 0 && <text className={styles.dim} x={cx} y={Y(0) + 18} textAnchor="middle">b = {fmt(b, 2)} m</text>}
          <text className={styles.area} x={cx} y={(Y(0) + Y(h)) / 2 + 5} textAnchor="middle">S</text>
        </svg>
      )}

      {geo && (
        <table className={styles.table}>
          <tbody>
            {mode === 'depth' ? (
              <tr className={styles.main}>
                <td>Débit <em>Q</em> = (1/n) S R<sub>h</sub><sup>2/3</sup> i<sup>1/2</sup></td>
                <td>{fmt(Q)} m³/s</td>
              </tr>
            ) : (
              <tr className={styles.main}>
                <td>Hauteur normale <em>h<sub>n</sub></em></td>
                <td>{fmt(h)} m</td>
              </tr>
            )}
            <tr className={styles.sep}>
              <td>Surface mouillée <em>S</em></td>
              <td>{fmt(geo.S)} m²</td>
            </tr>
            <tr>
              <td>Périmètre mouillé <em>P</em></td>
              <td>{fmt(geo.P)} m</td>
            </tr>
            <tr>
              <td>Rayon hydraulique <em>R<sub>h</sub></em> = S/P</td>
              <td>{fmt(geo.Rh)} m</td>
            </tr>
            <tr>
              <td>Largeur au miroir <em>B</em></td>
              <td>{fmt(geo.B)} m</td>
            </tr>
            <tr>
              <td>Profondeur hydraulique <em>H<sub>h</sub></em> = S/B</td>
              <td>{fmt(geo.Hh)} m</td>
            </tr>
            <tr>
              <td>Diamètre hydraulique <em>D<sub>h</sub></em> = 4 R<sub>h</sub></td>
              <td>{fmt(geo.Dh)} m</td>
            </tr>
            <tr className={styles.sep}>
              <td>Vitesse moyenne <em>U</em> = Q/S</td>
              <td>{fmt(U)} m/s</td>
            </tr>
            <tr>
              <td>Nombre de Froude <em>Fr</em> = U/√(g H<sub>h</sub>)</td>
              <td>
                {fmt(Fr)} — {regime}
              </td>
            </tr>
            <tr>
              <td>Charge spécifique <em>H<sub>s</sub></em> = h + U²/2g</td>
              <td>{fmt(Hs)} m</td>
            </tr>
          </tbody>
        </table>
      )}

      <figcaption className={styles.caption}>
        Écoulement uniforme : imposez la hauteur d'eau pour obtenir le débit, ou le débit pour
        obtenir la hauteur normale. Le périmètre mouillé <em>P</em> (trait épais) exclut la
        surface libre.
      </figcaption>
    </figure>
  );
}
