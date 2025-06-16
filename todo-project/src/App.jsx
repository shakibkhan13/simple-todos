import React, { useState, useEffect } from 'react'; 
import TodoInput from './Components/ui/ToduInput';
import TodoList from './Components/ui/ToduList';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  getTodosFromStorage,
} from './Components/controllers'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const stored = getTodosFromStorage()
    setTodos(stored)
  }, [])

  const handleAdd = (text) => {
    const updated = addTodo(todos, text)
    setTodos(updated)
  }

  const handleToggle = (id) => {
    const updated = toggleTodo(todos, id)
    setTodos(updated)
  }

  const handleDelete = (id) => {
    const updated = deleteTodo(todos, id)
    setTodos(updated)
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">My To-Do App</h2>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  )
}
