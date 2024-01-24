import './tag.css'

export const Tag = ({ children, color, bg }) => {
  return (
    <div
      className="tag"
      style={{
        background: bg,
        color: color
      }}
    >
      {children}
    </div>
  )
}
