import { ContainerGroupTask, ContainerBoard } from './containers'
import './App.css'

const tasks = [
  {
    id: 1,
    description: 'Soy una nota 1',
  },
  {
    id: 2,
    description: 'Soy una nota 2',
  },
  {
    id: 3,
    description: 'Soy una nota 3',
  },
  {
    id: 4,
    description: 'Soy una nota 4',
  }
]


const App = () => {
  return (
    <main>
      <section className='container'>
        <ContainerBoard />
        {/* <ContainerGroupTask tasks={tasks} /> */}
        {/* <Card>
          <>
            <ContainerDate date={date} />
            <ContainerAvatar
              name={'juan lopez'}
              avatar={'https://img.freepik.com/free-photo/portrait-handsome-hipster-man-glasses-3d-rendering_1142-51612.jpg?t=st=1706728585~exp=1706732185~hmac=2f5f8149e6d250163816c1d84d9c49e4823b96e0b9f24f4cc7b9eb1405d06f56&w=996'}
            />
          </>
        </Card> */}
      </section >
      <section>
      </section>
    </main >
  )
}

export default App
