import { imageUrl, pad, typesOf, POKEMON, STATS, TYPE_COLORS } from '../utils'
import TypeBadge from './TypeBadge'
import StatBar from './StatBar'
import StarButton from './StarButton'

export default function PokemonDetails({ id, isFav, onToggleFav, onSelect, onBack }) {
  const pokemon = POKEMON.find((p) => p.id === id)
  const prev = POKEMON.find((p) => p.id === id - 1)
  const next = POKEMON.find((p) => p.id === id + 1)
  const types = typesOf(pokemon)
  const total = STATS.reduce((s, [k]) => s + pokemon.stats[k], 0)

  const [bestKey, bestName] = STATS.reduce((a, s) => (pokemon.stats[s[0]] > pokemon.stats[a[0]] ? s : a))
  const best = pokemon.stats[bestKey]
  const rank = POKEMON.filter((p) => p.stats[bestKey] > best).length + 1

  return (
    <div className="detail" style={{ '--accent': TYPE_COLORS[types[0]] }}>
      <div className="detail-bar">
        <button className="back" onClick={onBack}>‹ Voltar</button>
        <span>{id} de {POKEMON.length}</span>
        <StarButton on={isFav} onClick={() => onToggleFav(id)} />
      </div>
      <div className="detail-body">
        <div className="art">
          <span className="ghost-id">#{pad(id)}</span>
          <img src={imageUrl(id)} alt={pokemon.name} />
        </div>
        <div className="detail-info">
          <span className="card-id">#{pad(id)}</span>
          <h2>{pokemon.name}</h2>
          <div className="badges">{types.map((t) => <TypeBadge key={t} type={t} />)}</div>
          <h4>Atributos base</h4>
          {STATS.map(([k, l]) => <StatBar key={k} label={l} value={pokemon.stats[k]} />)}
          <div className="total"><span>Total</span><b>{total}</b></div>
          <div className="highlight">
            <small>Ponto forte</small>
            {bestName} {best}: {rank}º maior valor entre os {POKEMON.length} Pokémon.
          </div>
        </div>
      </div>
      <div className="detail-nav">
        <button disabled={!prev} onClick={() => onSelect(id - 1)}>{prev && `‹ #${pad(prev.id)} ${prev.name}`}</button>
        <button disabled={!next} onClick={() => onSelect(id + 1)}>{next && `#${pad(next.id)} ${next.name} ›`}</button>
      </div>
    </div>
  )
}
