import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title: newTask, status: 'pending' });
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
