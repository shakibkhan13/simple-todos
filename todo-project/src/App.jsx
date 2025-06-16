import React, { useState, useEffect } from 'react';
import { Modal, message } from 'antd';
import TodoEditForm from './Components/ui/TodoEditForm';
import TodoInput from './Components/ui/ToduInput';
import TodoList from './Components/ui/ToduList';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  getTodosFromStorage,
} from './Components/controllers';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  useEffect(() => {
    setTodos(getTodosFromStorage());
  }, []);

  const handleAdd = (text) => setTodos(addTodo(todos, text));

  const handleToggle = (id) => setTodos(toggleTodo(todos, id));

  const handleDelete = (id) => {
    setTodoToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setTodos((currentTodos) => {
      const updatedTodos = deleteTodo(currentTodos, todoToDelete);
      message.success('Todo deleted');
      return updatedTodos;
    });
    setIsDeleteModalOpen(false);
    setTodoToDelete(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setTodoToDelete(null);
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setIsEditModalOpen(true);
  };

  const handleUpdate = (id, newText) => {
    setTodos(updateTodo(todos, id, newText));
    setEditingTodo(null);
    setIsEditModalOpen(false);
    message.success('Todo updated');
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">My To-Do App</h2>
      <TodoInput onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <Modal
        title="Edit Todo"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={null}
        destroyOnHidden
      >
        <TodoEditForm
          editingTodo={editingTodo}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditModalOpen(false)}
        />
      </Modal>
      
      <Modal
        title="Delete this task?"
        open={isDeleteModalOpen}
        onOk={confirmDelete}
        onCancel={cancelDelete}
        okText="Yes"
        cancelText="No"
        destroyOnHidden
      >
        <p>Are you sure you want to permanently delete this todo?</p>
      </Modal>
    </div>
  );
}
