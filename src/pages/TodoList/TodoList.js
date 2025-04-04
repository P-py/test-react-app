import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <form className="add-task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicionar nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="no-tasks">Nenhuma tarefa adicionada</li>
        ) : (
          tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}>Excluir</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;