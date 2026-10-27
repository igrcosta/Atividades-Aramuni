import { spriteUrl, pad, typesOf, STATS, TYPE_COLORS } from '../utils'
import TypeBadge from './TypeBadge'
import StarButton from './StarButton'

// ordem em 2 colunas: HP/Def/DfE | Atq/AtE/Vel
const ORDER = ['hp', 'defense', 'specialDefense', 'attack', 'specialAttack', 'speed']

export default function PokemonCard({ pokemon, isFav, onToggleFav, onSelect }) {
  const types = typesOf(pokemon)
  return (
    <article className="card" style={{ '--accent': TYPE_COLORS[types[0]] }} onClick={() => onSelect(pokemon.id)}>
      <div className="card-top">
        <div className="thumb"><img src={spriteUrl(pokemon.id)} alt={pokemon.name} loading="lazy" /></div>
        <div className="card-info">
          <span className="card-id">#{pad(pokemon.id)}</span>
          <h3>{pokemon.name}</h3>
          <div className="badges">{types.map((t) => <TypeBadge key={t} type={t} />)}</div>
        </div>
        <StarButton on={isFav} onClick={() => onToggleFav(pokemon.id)} />
      </div>
      <div className="mini-stats">
        {ORDER.map((k) => {
          const [, , abbr] = STATS.find((s) => s[0] === k)
          return (
            <div key={k} className="mini">
              <span>{abbr}</span><b>{pokemon.stats[k]}</b>
              <div className="mini-track"><div style={{ width: `${(pokemon.stats[k] / 255) * 100}%` }} /></div>
            </div>
          )
        })}
      </div>
    </article>
  )
}
