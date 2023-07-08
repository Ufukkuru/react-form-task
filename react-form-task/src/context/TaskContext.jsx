import React from 'react'
import { createContext } from 'react';
import axios from 'axios'
import { useState } from 'react'

const TaskContext = createContext();

function Provider({children}){

    const api = 'https://json-server-in.vercel.app/api/posts'

  const [tasks, setTasks] = useState([])

  const xeror = x => {
    if(x.response.data.includes("Error: EROFS: read-only file system, open 'db.json'\n")){
      return undefined
    }else{
      throw x
    }
  }

  const createTask = async (title,area) => {
    await axios.post(api, {title,area}).catch(xeror)
    await fetchTask()
  }

  const  fetchTask = async () => {
    const response = await axios.get(api)
    setTasks(response.data)
  }

  const deleteTaskById = async (id) => {
    await axios.delete(`${api}/${id}`).catch(xeror)
    const afterDeletingTasks =  tasks.filter((task)=>{
        return task.id !==id
    })
    setTasks(afterDeletingTasks)
  }

  const EditTaskById = async (id, updatedTitle, updatedArea) => {
    await axios.put(`${api}/${id}`, {title:updatedTitle, area:updatedArea}).catch(xeror)
    const updatedTask = tasks.map((task)=>{
      if(task.id === id ){
        return {id, title:updatedTitle, area:updatedArea}
      }
      else{
        return task;
      }
    })
    setTasks(updatedTask)
  }

  const sharedValuesAndTask = {
    createTask,
    deleteTaskById,
    EditTaskById,
    fetchTask,
    tasks
  }

    return(
        <TaskContext.Provider value={sharedValuesAndTask}>
            {children}
        </TaskContext.Provider>
    )
}


export {Provider}
export default TaskContext