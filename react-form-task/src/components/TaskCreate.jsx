import { useState } from 'react'

function TaskCreate({onCreate, task , taskFromUpdate, onUpdate}) {
    const [title, setTitle] = useState(task ? task.title : '')
    const [area, setArea] = useState(task ? task.area : '')

    const handelChange = (event) =>{
        setTitle(event.target.value)
    } 

    const handelAreaChange = (event) =>{
        setArea(event.target.value)
    } 

    const handelSubmit = (event) => {
        event.preventDefault()
        if(taskFromUpdate)
        {
            onUpdate(task.id,title,area)
        }
        else{
            onCreate(title,area)
        }
        setTitle('')
        setArea('')
    }

    return ( 
        <>
            <div>{taskFromUpdate ? 
            <div className="flex w-80 mx-auto ">
                <form className=" mx-auto justify-center rounded-xl items-center text-xl font-semibold mt-4">
                    <label className=" text-xl mt-3">Header Edit</label>
                    <input className="border-2 border-gray-900 w-80 text-lg " value={title} onChange={handelChange} type="text" placeholder="Enter Header"/>
                    <label className=" text-xl mt-3 mx-auto">Edit Task!</label>
                    <textarea className="border-2 h-32 w-80 text-lg border-gray-900" value={area} onChange={handelAreaChange} placeholder=" Please Enter Task"></textarea>
                    <button className="w-80 border-2 ml-1 hover:scale-105 border-gray-900 bg-gradient-to-r from-indigo-800 via-purple-950 to-violet-950 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-400 text-white rounded-lg" onClick={handelSubmit}>Update</button>
                </form>
                </div>
            : 
            <div className="flex w-full ">
                <form className="relative mx-auto justify-center rounded-xl items-center text-xl font-semibold">
                <div  className="text-center text-2xl font-extrabold mb-10"><h3>Please Enter Task</h3></div>
                    <label className=" bottom-4 relative">Enter Task Header</label>
                    <input className="border-2 rounded-md w-full border-gray-900" value={title} onChange={handelChange} type="text" placeholder="Enter Header"/>
                    <label className=" top-4 relative">Enter Task!</label>
                    <textarea className="border-2 rounded-lg w-full mt-7 h-52 border-gray-900" value={area} onChange={handelAreaChange} placeholder=" Please Enter Task"></textarea>
                    <button className="w-full flex mx-auto mt-5 relative items-center justify-center rounded-lg h-9 bg-gradient-to-r from-indigo-800 via-purple-950 to-violet-950 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-400 text-white border-2 border-gray-900" onClick={handelSubmit}>Send</button>
                </form>
            </div>}</div>

            
        </>
     );
}

export default TaskCreate;