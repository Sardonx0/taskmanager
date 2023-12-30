import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TaskScreen = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the server on component mount
  useEffect(() => {
    // Make API call to fetch tasks and update state
  }, []);

  const addTask = (newTask) => {
    // Make API call to add task and update state
  };

  const deleteTask = (taskId) => {
    // Make API call to delete task and update state
  };

  const updateTaskStatus = (taskId, newStatus) => {
    // Make API call to update task status and update state
  };

  return (
    <div>
      <h2>Task Screen</h2>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default TaskScreen;
