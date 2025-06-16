import React from 'react'
import { CheckCircle, Trash2, X, Pencil } from 'lucide-react'
import Button from './Button'

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition hover:bg-gray-200"
        >
          <div className="flex items-center gap-2 flex-1">
            {todo.completed && (
              <CheckCircle className="text-green-500 animate-pulse" size={18} />
            )}
            <span
              className={`font-medium text-base ${
                todo.completed ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => onToggle(todo.id)}
              className={`transition ${
                todo.completed
                  ? 'text-red-600 hover:text-red-800'
                  : 'text-green-600 hover:text-green-800'
              }`}
              title={todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            >
              {todo.completed ? <X size={20} /> : <CheckCircle size={20} />}
            </Button>
            <Button
              onClick={() => onEdit(todo)}
              className="text-blue-600 hover:text-blue-800 transition"
              title="Edit Task"
            >
              <Pencil size={20} />
            </Button>
            <Button
              onClick={() => onDelete(todo.id)}
              className="text-red-600 hover:text-red-800 transition"
              title="Delete Task"
            >
              <Trash2 size={20} />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}
