import { useEffect, useContext } from 'react'
import TaskContext from './context/TaskContext'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'


function App() {

   const {fetchTask} = useContext(TaskContext)

  useEffect(()=>{
    fetchTask()
  },[])

  return (
    <>  
    <div className='block relative mx-auto justify-center items-center mt-16'>
      <TaskCreate/>
      </div>
        <h2 className=' text-center mt-10 text-2xl font-extrabold'>Görevler</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 text-center mx-auto items-center justify-center relative container'>
      <TaskList/>
       </div>
    </>
  )
}

export default App
