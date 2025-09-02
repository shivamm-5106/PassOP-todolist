import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='flex justify-center bg-slate-700 text-5xl font-bold py-2'>Todo List</div>
        <ul className="flex justify-end bg-slate-600 py-2 pr-7 gap-5 ">
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
