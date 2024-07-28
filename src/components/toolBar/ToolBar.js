import {useState,useEffect} from "react";


const ToolBar = ({tasksCurrent,tasksDone,allTasks,chosenListAdd}) => {

    const [tasksLeftLength, setTasksLeftLength] = useState(0);
    const [tasksDoneLength, setTasksDoneLength] = useState(0);
    const [allTasksLength, setAllTasksLength] = useState(0);
    const [chosenLength, setChosenLength] = useState(0);

    useEffect(() => {
        setTasksLeftLength(tasksCurrent.length);
    }, [tasksCurrent]);

    useEffect(() => {
        setTasksDoneLength(tasksDone.length);
    }, [tasksDone]);

    useEffect(() => {
        setAllTasksLength(allTasks.length)
    }, [allTasks]);

    return (
        <div className='tool-bar'>


            {chosenLength}items left
            <button type='button' onClick={() => {
                setAllTasksLength(allTasks.length)
                setChosenLength(allTasksLength)
                chosenListAdd('all');
            }}>All</button>

            <button type="button" onClick={() => {
                setTasksLeftLength(tasksCurrent.length)
                setChosenLength(tasksLeftLength)
                chosenListAdd('active');
            }}>Active</button>

            <button type="button" onClick={() => {
                setTasksDoneLength(tasksDone.length)
                setChosenLength(tasksDoneLength)
                chosenListAdd('completed');
            }}>Completed</button>
        </div>
    )
}

export default ToolBar