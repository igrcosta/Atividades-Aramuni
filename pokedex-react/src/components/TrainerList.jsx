import { POKEMON, TRAINERS, spriteUrl } from '../utils'

export default function TrainerList({ onSelect }) {
  return (
    <div className="trainers">
      {TRAINERS.map((t) => (
        <section key={t.id} className="trainer">
          <h3>{t.name}</h3>
          <p>🏅 {t.badges} insígnia{t.badges === 1 ? '' : 's'}</p>
          <div className="team">
            {t.pokemonIds.map((id, i) => {
              const p = POKEMON.find((x) => x.id === id)
              return (
                <button key={i} className="member" onClick={() => onSelect(id)} title={p.name}>
                  <img src={spriteUrl(id)} alt={p.name} loading="lazy" />
                  <span>{p.name}</span>
                </button>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
