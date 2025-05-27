import React, { useState } from 'react';
import { BiCheckDouble, BiEdit, BiTrash, BiCheckCircle, BiReset, BiRefresh, BiPlus } from 'react-icons/bi';
import './todolist.css';


function Todolist() {
  const [todos, settodos] = React.useState([])
  const [inputvalue, setInputValue] = React.useState('')
  const [editindex, setEditIndex] = React.useState(-1)


  const addTodo =() =>{
    if (inputvalue.trim() !== '') {
      if (editindex === -1) {
        const updateTodos = [...todos]
        updateTodos[editindex] = {task: inputvalue, completed:updatedtodos[editIndex].com}
        setTodos(updatedtodos)
        setInputValue('')
        setEditIndex(-1)
      }else {
        settodos([...todos, { task: inputvalue, completed:false}])
        setInputValue('')
      }
    }
  }
  return (
    <div className='todo-container'>
        <h1>TO-DO List</h1>
        <div className="input-section">
            <input type="text" value={inputvalue} onChange={(e) => inputvalue(e.target.value)}
            placeholder='enter a new task' 
            className="input-field" />
            <>
            <button className="update-btn"><BiCheckDouble /></button>
            <button className="cancel-btn"><BiRefresh /></button>
            <button className="add-btn"><BiPlus /></button>

            </>
        </div>
    </div>
   

  )
}

export default Todolist