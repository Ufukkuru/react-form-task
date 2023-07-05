import TaskShow from "./TaskShow";

function TaskList({tasks, onDelete , onUpdate}) {
    return ( 
        <>
            {tasks.map((task,index)=>{
                return (
                    <div className="flex relative mt-10 mx-auto">
                        <div className="">
                            <TaskShow onDelete={onDelete} key={index} task={task} onUpdate={onUpdate}/>
                        </div>
                    </div>
                )
            })}
        </>
     );
}

export default TaskList;