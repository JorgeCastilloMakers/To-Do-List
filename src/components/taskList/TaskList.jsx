
import TaskCard from '../taskCard/TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../../context/TaskContext'
import '../taskList/list.scss'

function TaskList() {
   
    const {tasks, deleteTask} = useContext(TaskContext)

    if(tasks.length === 0){
        return <h1>No task yet</h1>
    }

  return (
    <div className='list'>
        {
            tasks.map(task => (
                <TaskCard key={task.id} task={ task }/>
            ))
        }
    </div>
  )
}

export default TaskList