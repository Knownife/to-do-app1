import NewTask from "./components/newTask/NewTask";
import CurrentTasks from "./components/currentTasks/CurrentTasks";
import ToolBar from "./components/toolBar/ToolBar";
import {useState} from "react";

import './App.css'


function App() {

    const [tasksCurrent, setTasksCurrent] = useState([])
    const [tasksDone, setTasksDone] = useState([])
    const [allTasks, setAllTasks] = useState([])
    const [chosenList, setChosenList] = useState('all')

    const addTask = (task) =>{
        setTasksCurrent([...tasksCurrent,task])
    }
    const deleteTaskFromCurrent = (task)=>{
        setTasksCurrent(tasksCurrent.filter(t => t !== task));
        setAllTasks(allTasks.filter(t => t !== task));
    }
    const addDoneTask = (taskDone)=>{
        setTasksDone(prevTasksDone => [...prevTasksDone, taskDone]);
    }
    const chosenListAdd = (list)=>{
        setChosenList(list)
    }
    const addAllTasks = (task) => {
        setAllTasks(prevAllTasks => {
            if (!prevAllTasks.includes(task)) {
                return [...prevAllTasks, task];
            }
            return prevAllTasks;
        });
    };

  return (
    <div className="App">
        <div>
            <h1>THINGS TO DO</h1>
            <NewTask addTask={addTask} addAllTasks={addAllTasks}/>
            <CurrentTasks tasksCurrent={tasksCurrent} addDoneTask={addDoneTask} deleteTaskFromCurrent={deleteTaskFromCurrent} addAllTasks={addAllTasks} chosenList={chosenList} tasksDone={tasksDone} allTasks={allTasks} />
            <ToolBar tasksCurrent={tasksCurrent} tasksDone={tasksDone} allTasks={allTasks} chosenListAdd={chosenListAdd} />
        </div>
    </div>
  );
}

export default App;
