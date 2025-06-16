import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

export default function TodoInput({ onAdd, onUpdate, editingTodo }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingTodo) setText(editingTodo.text);
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; 
    if (editingTodo) {
      onUpdate(editingTodo.id, text);
    } else {
      onAdd(text);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        // value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
