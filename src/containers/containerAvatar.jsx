import PropTypes from 'prop-types'
import { Avatar } from "../components"

export const ContainerAvatar = ({ name, avatar }) => {

  const iniitals = name.split(/\s+/).map(name => name.slice(0, 1).toUpperCase());

  if (avatar) {
    return (
      <Avatar>
        <img src={avatar} alt='avatar' />
      </Avatar>
    )
  }

  return (
    <Avatar>{iniitals[0] + iniitals[1]}</Avatar>
  )
}

ContainerAvatar.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string
}