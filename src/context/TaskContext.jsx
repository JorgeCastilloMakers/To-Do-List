import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/task'



export const TaskContext = createContext();


export function TaskContextProvider(props) {

    const taskList = JSON.parse(localStorage.getItem('Tasks')) || [];

    const [tasks, setTasks] = useState( [...taskList] )

    useEffect(() => {
        localStorage.setItem('Tasks', JSON.stringify( tasks ))
    }, [tasks])

    function createTask(task){
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length,
          description: task.description
        }])
      }
    
      function deleteTask(taskId){
        if(window.confirm("Are you sure to want delete the task?")){
          setTasks(tasks.filter(task => task.id != taskId)) 
        }else{
            return
        }
        
    
      }



  return (
    <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext
