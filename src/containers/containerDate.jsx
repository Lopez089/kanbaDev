import PropTypes from "prop-types"

export const ContainerDate = ({ date }) => {
  const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']

  const day = date.getDate()
  const month = months[date.getMonth()]
  const age = date.getFullYear().toString().slice(-2)

  return (
    <p className="date">{`${day} ${month} ${age}`}</p>
  )
}

ContainerDate.propTypes = {
  date: PropTypes.instanceOf(Date)
}