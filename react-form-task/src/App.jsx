import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([])

  const createTask = (title,area) => {
    const createdTask = [
      ...tasks,{
        id:Math.round(Math.random()*999999),
        title: title,
        area: area 
      }
    ]
    setTasks(createdTask)
  }

  const deleteTaskById = (id) => {
    const afterDeletingTasks =  tasks.filter((task)=>{
        return task.id !==id
    })
    setTasks(afterDeletingTasks)
  }

  const EditTaskById = (id, updatedTitle, updatedArea) => {
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
