import React, { useState } from 'react';

const TimerForm = ({ addTimer }) => {
  const [newTimer, setNewTimer] = useState('');

  const handleInputChange = (e) => {
    setNewTimer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTimer({ duration: newTimer });
    setNewTimer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter duration" value={newTimer} onChange={handleInputChange} />
      <button type="submit">Set Timer</button>
    </form>
  );
};

export default TimerForm;
