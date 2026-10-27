const MAX = 255 // maior valor base possível

export default function StatBar({ label, value }) {
  return (
    <div className="stat">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
      <div className="stat-track">
        <div className="stat-fill" style={{ width: `${(value / MAX) * 100}%` }} />
      </div>
    </div>
  )
}
