import PropTypes from 'prop-types';
import './descriptionTask.css'

export const DescriptionTask = ({ children }) => {
  return (
    <p className="description-task">{children}</p>
  )
}

DescriptionTask.propTypes = {
  children: PropTypes.string.isRequired
}