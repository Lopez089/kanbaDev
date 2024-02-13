import './button.css'
import PropTypes from 'prop-types'

export const Button = ({ children }) => {
  return (
    <button className="btn">{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
}