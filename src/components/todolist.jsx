import React, { useState } from 'react';
import { BiCheckDouble, BiEdit, BiTrash, BiCheckCircle, BiRefresh, BiPlus } from 'react-icons/bi';
import './todolist.css';

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    if (editIndex === -1) {
      // Add new task
      setTodos([...todos, { task: inputValue, completed: false }]);
    } else {
      // Update existing task
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = {
        ...updatedTodos[editIndex],
        task: inputValue,
      };
      setTodos(updatedTodos);
    }

    setInputValue('');
    setEditIndex(-1);
  };

  const startEdit = (index) => {
    setInputValue(todos[index].task);
    setEditIndex(index);
  };

  const cancelEdit = () => {
    setInputValue('');
    setEditIndex(-1);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>TO-DO List</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new task"
          className="input-field"
        />
        {editIndex !== -1 ? (
          <>
            <button onClick={addTodo} className="update-btn">
              <BiCheckDouble />
            </button>
            <button onClick={cancelEdit} className="cancel-btn">
              <BiRefresh />
            </button>
          </>
        ) : (
          <button onClick={addTodo} className="add-btn">
            <BiPlus />
          </button>
        )}
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            {todo.task}
            <div className="btn-group">
              <button onClick={() => startEdit(index)} className="btn-edit">
                <BiEdit />
              </button>
              <button onClick={() => removeTodo(index)} className="btn-remove">
                <BiTrash />
              </button>
              <button onClick={() => toggleCompleted(index)} className="btn-done">
                {todo.completed ? <BiRefresh /> : <BiCheckCircle />}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
