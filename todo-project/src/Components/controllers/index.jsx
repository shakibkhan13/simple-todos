const key = 'my_todos'

export const getTodosFromStorage = () => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : []
}

export const saveTodosToStorage = (todos) => {
  localStorage.setItem(key, JSON.stringify(todos))
}

export const addTodo = (todos, text) => {
  if (text.trim()) {
    const updated = [...todos, { id: Date.now(), text, completed: false }]
    saveTodosToStorage(updated)
    return updated
  }
  return todos
}

export const toggleTodo = (todos, id) => {
  const updated = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  )
  saveTodosToStorage(updated)
  return updated
}

export const deleteTodo = (todos, id) => {
  const updated = todos.filter((todo) => todo.id !== id)
  saveTodosToStorage(updated)
  return updated
}

export const updateTodo = (todos, id, newText) => {
  const updated = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText } : todo
  )
  saveTodosToStorage(updated)
  return updated
}
