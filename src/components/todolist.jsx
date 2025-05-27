import React from 'react'
import { BiCheckDouble, BiEdit, BiTrash, BiCheckCircle, BiReset, BiRefresh } from 'react-icons/bi';
import './todolist.css';

function Todolist() {
  return (
    <div className='todo-container'>
        <h1>TO-DO List</h1>
        <div className="input-section">
            <input type="text" className="input-field" />
            <>
            <button className="update-btn"></button>
            <button className="cancel-btn"></button>

            </>
        </div>
    </div>
   

  )
}

export default Todolist