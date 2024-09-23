import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
   <div className="container rounded-xl mx-auto p-5 my-5 bg-violet-50">
    <div className="addTodo">
      <h2 className='text-xl font-bold'>Add a todo</h2>
      <input type="text" />
      <button>Add</button>
   </div>
   <h2 className='text-lg font-bold'>Your Todos</h2>
   <div className='todos'>
    <div className="todo">
       
    </div>
   </div>
   </div>
    </>
  )
}

export default App
