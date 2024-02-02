import { Card, DescriptionTask, Tag } from '../'
import { ContainerDate, ContainerAvatar } from '../../containers'
import './task.css'

export const Task = () => {
  return (
    <Card>
      <div className='task'>
        <section className="task-header">
          <Tag color='#2b856f' bg='#bde5db'>FrontEnd</Tag>
          <span className="material-symbols-outlined">
            more_horiz
          </span>
        </section>
        <section className="task-main">
          <DescriptionTask>
            hola soy un nota nueva
          </DescriptionTask>
        </section>
        <section className="task-footer">
          <ContainerDate date={new Date} />
          <ContainerAvatar
            name='juna Lopez'
            avatar={'https://img.freepik.com/free-photo/portrait-handsome-hipster-man-glasses-3d-rendering_1142-51612.jpg?t=st=1706728585~exp=1706732185~hmac=2f5f8149e6d250163816c1d84d9c49e4823b96e0b9f24f4cc7b9eb1405d06f56&w=996'}
          />
        </section>
      </div>
    </Card>
  )
}
