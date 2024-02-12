import { ContainerGroupTask } from '../'
import './containerBoard.css'

export const ContainerBoard = () => {
  return (
    <div className="container-board">
      <ContainerGroupTask />
      <ContainerGroupTask />
      <ContainerGroupTask />
      <ContainerGroupTask />
    </div>
  )
}
