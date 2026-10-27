import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemon, favs, onToggleFav, onSelect, emptyText }) {
  if (!pokemon.length) return <p className="empty">{emptyText}</p>
  return (
    <div className="grid">
      {pokemon.map((p) => (
        <PokemonCard
          key={p.id}
          pokemon={p}
          isFav={favs.includes(p.id)}
          onToggleFav={onToggleFav}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
