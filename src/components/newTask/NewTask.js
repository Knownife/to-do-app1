import {useState} from "react";


const NewTask = ({addTask,addAllTasks}) =>{

    const [task, setTask] = useState('')
    const handleSubmit = ()=>{
        addTask(task)
        addAllTasks(task)

    }

    return (
        <div className='new-task'>
            <input type="text" onChange={(e)=>setTask(e.target.value)}/>
            <button type='submit' onClick={handleSubmit} >add</button>
        </div>
    )
}

export default NewTask