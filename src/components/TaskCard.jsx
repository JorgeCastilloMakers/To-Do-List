import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import '../scss/card.scss'


function TaskCard({ task }) {

const {deleteTask} = useContext(TaskContext)


  return (
    <div className='card'>
        <h1 className='card__title'>{task.title}</h1>
        <p className='card__description'>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}
        className='card__btn'>
          Remove Task</button>
    </div>
  )
}

export default TaskCard