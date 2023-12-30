import React from 'react';

const TaskList = ({ tasks, deleteTask, updateTaskStatus }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.status}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => updateTaskStatus(task.id, 'completed')}>Complete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
