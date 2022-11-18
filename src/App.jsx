import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import './scss/app.scss'


function App(){

  return (
    <>
    <div className='wrapper'>
      <TaskForm/>
      <TaskList/>
    </div>
    </>
  )
}

export default App