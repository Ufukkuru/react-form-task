import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'

function App() {

  const [tasks, setTasks] = useState([])

  const createTask = async (title,area) => {
   const response = await axios.post('http://localhost:3000/tasks', {title,area})
    const createdTask = [...tasks, response.data]
    setTasks(createdTask)
  }

  const  fetchTask = async () => {
    const response = await axios.get('http://localhost:3000/tasks')
    setTasks(response.data)
  }

  useEffect(()=>{
    fetchTask()
  },[])

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    const afterDeletingTasks =  tasks.filter((task)=>{
        return task.id !==id
    })
    setTasks(afterDeletingTasks)
  }

  const EditTaskById = async (id, updatedTitle, updatedArea) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {title:updatedTitle, area:updatedArea})
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
