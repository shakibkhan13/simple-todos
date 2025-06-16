import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text)
      setText('')
    }
  }

  return (
    <div className="flex gap-2 mb-6">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <Button label="Add" onClick={handleAdd} />
    </div>
  )
}
