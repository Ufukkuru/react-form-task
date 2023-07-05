import { useState } from 'react'
import TaskCreate from './TaskCreate'

function TaskShow({task , onDelete , onUpdate}) {

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(task.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id , updatedTitle , updatedArea) =>{
        setShowEdit(false)
        onUpdate(id , updatedTitle , updatedArea)
    }

    return ( 
        <>
            <div className="border-4 border-indigo-700 rounded-lg h-72 w-96 mx-auto font-semibold">
                {showEdit ? <TaskCreate task={task} taskFromUpdate={true}  onUpdate={handleSubmit}/> : 
                <div>
                    <h3 className="text-xl mt-3">-_-_!Task Header!_-_-</h3>
                <p className='w-80 text-lg mt-1 mx-auto border-gray-900 border-2'>{task.title}</p>
                <h3 className="text-xl mt-3">Task</h3>
                <p className='w-80 h-32 mx-auto border-gray-900 border-2'>{task.area}</p>
                <div className="flex absolute left-10 right-10 bottom-3">
                    <button className="w-36 border-2 mr-1 hover:scale-105 border-gray-900 bg-gradient-to-r from-indigo-800 via-purple-950 to-violet-950 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-400 text-white rounded-lg" onClick={handleDeleteClick}>Delete</button>
                    <button className="w-36 border-2 ml-1 hover:scale-105 border-gray-900 bg-gradient-to-r from-indigo-800 via-purple-950 to-violet-950 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-400 text-white rounded-lg" onClick={handleEditClick}>Update</button>
                </div>
                </div>}
            </div>
        </>
     );
}

export default TaskShow;