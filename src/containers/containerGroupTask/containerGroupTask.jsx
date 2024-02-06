import { Task } from '../../components'
import './containerGroupTask.css'

export const ContainerGroupTask = () => {
  return (
    <section className="container-group-task">
      <div className="group-task-header">
        <h3>On Progress</h3>
        <span className="material-symbols-outlined">
          more_horiz
        </span>
      </div>
      <div className="group-task-main">
        <Task />
        <Task />
      </div>
      <div className="group-task-footer">
        + add card
      </div>
    </section >
  )
}
