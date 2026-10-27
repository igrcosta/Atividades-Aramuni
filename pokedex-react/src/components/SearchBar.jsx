export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrap">
      <div className="search-box">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          placeholder="Pesquisar Pokémon…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <small>Nome ou número, como Bulba ou 25</small>
    </div>
  )
}
