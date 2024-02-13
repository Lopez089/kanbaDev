
import PropTypes from 'prop-types';
import './card.css'

export const Card = ({ children }) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.element.isRequired
}