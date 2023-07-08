import TaskShow from "./TaskShow";
import {useContext } from 'react'
import TaskContext from '../context/TaskContext'

function TaskList() {
    const {tasks} = useContext(TaskContext)
    return ( 
        <>
            {tasks.map((task,index)=>{
                return (
                    <div className="flex relative mt-10 mx-auto">
                        <div className="">
                            <TaskShow key={index} task={task}/>
                        </div>
                    </div>
                )
            })}
        </>
     );
}

export default TaskList;