import { TYPES, TYPE_COUNTS, TYPE_COLORS, TYPE_PT, POKEMON } from '../utils'

const SORTS = [
  ['id', 'Número'], ['name', 'Nome'], ['hp', 'HP'], ['attack', 'Ataque'], ['defense', 'Defesa'],
  ['specialAttack', 'Ataque Especial'], ['specialDefense', 'Defesa Especial'], ['speed', 'Velocidade'],
]

export function SortControls({ sort, onSort, asc, onAsc }) {
  return (
    <>
      <select className="sort" value={sort} onChange={(e) => onSort(e.target.value)} aria-label="Ordenar por">
        {SORTS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
      </select>
      <button className="dir" onClick={() => onAsc(!asc)} aria-label="Inverter ordem">{asc ? '↑' : '↓'}</button>
    </>
  )
}

export function TypeChips({ type, onType }) {
  return (
    <div className="chips-block">
      <span className="chips-title">Tipo</span>
      <div className="chips">
        <button className={type === '' ? 'chip active' : 'chip'} onClick={() => onType('')}>
          Todos <span>{POKEMON.length}</span>
        </button>
        {TYPES.filter((t) => TYPE_COUNTS[t]).map((t) => (
          <button key={t} className={type === t ? 'chip active' : 'chip'} onClick={() => onType(t)}>
            <i style={{ background: TYPE_COLORS[t] }} />{TYPE_PT[t]} <span>{TYPE_COUNTS[t]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
