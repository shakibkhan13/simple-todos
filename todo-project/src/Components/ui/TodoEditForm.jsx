import React, { useEffect, useState } from 'react';
import { Input, Button, Space } from 'antd';

export default function TodoEditForm({ editingTodo, onUpdate, onCancel }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingTodo) setText(editingTodo.text);
  }, [editingTodo]);

  const handleSubmit = () => {
    if (text.trim()) {
      onUpdate(editingTodo.id, text);
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Update your task"
        onPressEnter={handleSubmit}
      />
      <Space>
        <Button type="primary" onClick={handleSubmit}>
          Update
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Space>
    </Space>
  );
}
