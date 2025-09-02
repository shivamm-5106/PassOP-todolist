import { use, useState } from 'react'
import Navbar from './components/navbar.jsx'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [isFinished, setIsFinished] = useState(true)

  const handleEdit = (e,id) => {
    let t= todos.filter(i=>i.id===id);
    setTodo(t[0].todo);
    let newtodos=todos.filter(item => item.id !== id);
    setTodos(newtodos);
    
  }

  const handleDelete = (e) => {
    let id =e.target.name;
    let newtodos=todos.filter(item => item.id !== id);
    setTodos(newtodos);
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id =e.target.name;
    let index= todos.findIndex(item=>{
      return item.id == id
    })
    let newtodos=[...todos];
    newtodos[index].iscompleted = e.target.checked;

    setTodos(newtodos);
    
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto mt-3.5 w-[50vw] bg-slate-300 rounded-2xl h-[50vh] p-7">
        <h2 className='text-lg font-bold'>Add Todo</h2>
        <div className='pl-4'>
          <input onChange={handleChange} type="text" value={todo} className=' rounded-3xl text-black bg-slate-100 px-2.5' />
          <button onClick={handleAdd} className='m-3 rounded-2xl bg-slate-700 px-2.5'>Add</button>
        </div>
        <div>
          <h2>Your Todos</h2>
          <div className="todos">
            {todos.map(item => {
             
              return <div key={item.id} className="todo flex justify-between items-center h-12 w-md ">
                <div className='flex gap-1.5'>
                  <input name={item.id} value={item.iscompleted} onChange={handleCheckbox} type="checkbox" />
                  <div className={item.iscompleted ? "line-through " : ""}>{item.todo}</div>
                </div>
                <div className='flex'>
                  <button className='m-3 rounded-2xl bg-slate-700 px-2.5 h-7' onClick={(e)=>handleEdit(e,item.id)}>Edit</button>
                  <button name={item.id} className='m-3 rounded-2xl bg-slate-700 px-2.5 h-7' onClick={handleDelete}>Delete</button>
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
