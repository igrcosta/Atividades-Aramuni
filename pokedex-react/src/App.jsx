import { useEffect, useRef, useState } from 'react'
import { POKEMON, TRAINERS, typesOf } from './utils'
import SearchBar from './components/SearchBar'
import { SortControls, TypeChips } from './components/Filters'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import TrainerList from './components/TrainerList'
import './css/App.css'

const load = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}

export default function App() {
  const [tab, setTab] = useState('pokedex')
  const [query, setQuery] = useState('')
  const [type, setType] = useState('')
  const [sort, setSort] = useState('id')
  const [asc, setAsc] = useState(true)
  const [selected, setSelected] = useState(null) // id do Pokémon em detalhe
  const [favs, setFavs] = useState(() => load('favs', []))
  const [dark, setDark] = useState(() => load('dark', false))
  const screen = useRef(null)

  useEffect(() => { localStorage.setItem('favs', JSON.stringify(favs)) }, [favs])
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark))
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])
  useEffect(() => { screen.current?.scrollTo(0, 0) }, [selected, tab])

  const toggleFav = (id) =>
    setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))

  const q = query.trim().toLowerCase()
  const dir = asc ? 1 : -1
  const visible = POKEMON
    .filter((p) => !q || p.name.toLowerCase().includes(q) || String(p.id) === q.replace(/^#?0*/, ''))
    .filter((p) => !type || typesOf(p).includes(type))
    .filter((p) => tab !== 'favs' || favs.includes(p.id))
    .sort((a, b) =>
      dir * (sort === 'name' ? a.name.localeCompare(b.name)
        : sort === 'id' ? a.id - b.id
        : a.stats[sort] - b.stats[sort]))

  const random = () => setSelected(POKEMON[Math.floor(Math.random() * POKEMON.length)].id)
  const tabBtn = (key, label, count) => (
    <button className={tab === key ? 'tab active' : 'tab'} onClick={() => { setTab(key); setSelected(null) }}>
      {label} <span>{count}</span>
    </button>
  )

  return (
    <div className="holo">
      <div className="holo-bar">
        <div><button className="pill dark-pill" onClick={() => setDark(!dark)}>{dark ? '☾' : '☀'} Noturno</button></div>
        <div><button className="pill yellow" onClick={random}>🎲 Sortear</button></div>
      </div>

        <div className="holo-screen" ref={screen}>
          {selected ? (
            <PokemonDetails
              id={selected}
              isFav={favs.includes(selected)}
              onToggleFav={toggleFav}
              onSelect={setSelected}
              onBack={() => setSelected(null)}
            />
          ) : (
            <>
              <nav className="tabs">
                {tabBtn('pokedex', 'Pokédex', POKEMON.length)}
                {tabBtn('favs', 'Favoritos', favs.length)}
                {tabBtn('trainers', 'Treinadores', TRAINERS.length)}
              </nav>
              {tab === 'trainers' ? (
                <TrainerList onSelect={setSelected} />
              ) : (
                <>
                  <div className="toolbar">
                    <SearchBar value={query} onChange={setQuery} />
                    <SortControls sort={sort} onSort={setSort} asc={asc} onAsc={setAsc} />
                  </div>
                  <TypeChips type={type} onType={setType} />
                  <p className="count">{visible.length} Pokémon</p>
                  <PokemonList
                    pokemon={visible}
                    favs={favs}
                    onToggleFav={toggleFav}
                    onSelect={setSelected}
                    emptyText={tab === 'favs' && !favs.length ? 'Nenhum favorito ainda. Toque na estrela de um Pokémon.' : 'Nenhum Pokémon encontrado.'}
                  />
                </>
              )}
            </>
          )}
        </div>
      <div className="status">
        <span><i className="dot" /> Favoritos salvos no navegador</span>
        <span>★ {favs.length}</span>
      </div>
      <h1 className="holo-title">Pokédex</h1>
    </div>
  )
}
