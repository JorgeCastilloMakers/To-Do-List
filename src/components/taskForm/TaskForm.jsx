import {useContext, useState, useRef, useEffect} from 'react'
import {TaskContext} from '../../context/TaskContext'
import { tasks } from '../../data/task';
import '../taskForm/form.scss'


function TaskForm() {
        
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask, existingTask, tasksList} = useContext(TaskContext)

    
    const handleSubmit = (e) => {
        e.preventDefault();
                console.log("tasks ==>", tasks)
                console.log("tasksList ==>", tasksList)
            
            if(title.length <= 0 || description.length <= 0){
                alert("Please, complete all the fields");
                return
            }
            if(tasksList.some((task) => task.title === title)){
                alert("The task already exist");
                return
            }    
            createTask({
            title,
            description
                }) ;

        setTitle('');
        setDescription('')

    }



  return (

    <div className='wrapper__form'>
        <form onSubmit={handleSubmit} className='form'>
            <h1 className='form__title'>Add your task</h1>
            <input type="text" placeholder="Write your task" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                
            />
            <textarea placeholder='Write your task description' 
            onChange={e => setDescription(e.target.value)}
            value={description}></textarea>

            <button className='form__btn'>Add</button>


        </form>
    </div>


  )
}

export default TaskForm
