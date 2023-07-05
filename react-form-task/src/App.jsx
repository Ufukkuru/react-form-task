import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'

function App() {

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

  useEffect(()=>{
    fetchTask()
  },[])

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

  return (
    <>  
    <div className='block relative mx-auto justify-center items-center mt-16'><TaskCreate onCreate={createTask}/></div>
        <h2 className=' text-center mt-10 text-2xl font-extrabold'>Görevler</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 text-center mx-auto items-center justify-center relative container'>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={EditTaskById}/>
       </div>
    </>
  )
}

export default App
