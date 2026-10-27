import { TYPE_COLORS, TYPE_PT } from '../utils'

export default function TypeBadge({ type }) {
  return <span className="badge" style={{ background: TYPE_COLORS[type] }}>{TYPE_PT[type]}</span>
}
