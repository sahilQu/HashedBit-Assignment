import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to add task
  const addTask = () => {
    if (task.trim() === '') return;
    const newTasks = [...tasks, task];
    newTasks.sort(); // Sort tasks alphabetically
    setTasks(newTasks);
    setTask('');
  };

  // Function to delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Function to handle key press (Enter key)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress} // Add keypress event
      />
      <button onClick={addTask} disabled={!task.trim()}>
        Add Task
      </button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
