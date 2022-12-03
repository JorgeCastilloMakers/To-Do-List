
import TaskForm from '../taskForm/TaskForm'
import TaskList from '../taskList/TaskList'
import './toDo.scss'


function ToDo(){

  return (
    <>
    <div className='wrapper'>
      <h2>To Do List</h2>
      <TaskForm/>
      <TaskList/>
    </div>
    </>
  )
}

export default ToDo