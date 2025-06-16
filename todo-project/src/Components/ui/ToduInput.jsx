import React, { useState, useEffect } from 'react'
import Input from './Input'
import Button from './Button'

export default function TodoInput({ onAdd, onUpdate, editingTodo }) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (editingTodo) setText(editingTodo.text)
  }, [editingTodo])

  const handleSubmit = () => {
    if (text.trim()) {
      if (editingTodo) {
        onUpdate(editingTodo.id, text)
      } else {
        onAdd(text)
      }
      setText('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="flex gap-2 mb-6">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown} 
        placeholder="Enter a task"
      />
      <Button label={editingTodo ? 'Update' : 'Add'} onClick={handleSubmit} />
    </div>
  )
}
