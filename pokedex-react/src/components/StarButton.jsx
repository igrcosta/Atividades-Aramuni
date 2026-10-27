export default function StarButton({ on, onClick }) {
  return (
    <button
      className={on ? 'star on' : 'star'}
      aria-label={on ? 'Remover dos favoritos' : 'Favoritar'}
      onClick={(e) => { e.stopPropagation(); onClick() }}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-3-5.4 3 1.1-6L3.2 9.4l6.1-.8z" />
      </svg>
    </button>
  )
}
