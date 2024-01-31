import PropsTypes from 'prop-types'
import './avatar.css'

export const Avatar = ({ children }) => {
  return (
    <div className="avatar">{children}</div>
  )
}

Avatar.propTypes = {
  children: PropsTypes.oneOfType([
    PropsTypes.string,
    PropsTypes.element
  ])
}
