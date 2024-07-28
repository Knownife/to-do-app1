import { useState } from "react";

const CurrentTasks = ({ tasksCurrent, addDoneTask, deleteTaskFromCurrent, chosenList, tasksDone, allTasks }) => {
    const [isDone, setIsDone] = useState(false);

    const handleClickDone = (task) => {
        if (isDone === true) {
            addDoneTask(task)
            deleteTaskFromCurrent(task)
        }
    };

    return (
        <div className='task-list'>
            {
                chosenList === 'all' ? (
                    allTasks.map((task) => (
                        <p>
                            <label>
                                <input type='checkbox' onChange={(e) => setIsDone(e.target.checked)} />
                                {task}
                            </label>
                            <button onClick={() => handleClickDone(task)}>done</button>
                        </p>
                    ))
                ) : chosenList === 'active' ? (
                    tasksCurrent.map((task) => (
                        <p >
                            <label>
                                <input type='checkbox' onChange={(e) => setIsDone(e.target.checked)} />
                                {task}
                            </label>
                            <button onClick={() => handleClickDone(task)}>done</button>
                        </p>
                    ))
                ) : chosenList === 'completed' ? (
                    tasksDone.map((task) => (
                        <p >
                            <label>

                                {task}
                            </label>
                        </p>
                    ))
                ) : (
                    allTasks.map((task) => (
                        <p >
                            <label>
                                <input type='checkbox' onChange={(e) => setIsDone(e.target.checked)} />
                                {task}
                            </label>
                            <button onClick={() => handleClickDone(task)}>done</button>
                        </p>
                    ))
                )
            }
        </div>
    );
};

export default CurrentTasks;