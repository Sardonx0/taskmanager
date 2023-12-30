import React, { useState } from 'react';

const AlarmForm = ({ addAlarm }) => {
  const [newAlarm, setNewAlarm] = useState('');

  const handleInputChange = (e) => {
    setNewAlarm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAlarm({ time: newAlarm });
    setNewAlarm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="time" value={newAlarm} onChange={handleInputChange} />
      <button type="submit">Set Alarm</button>
    </form>
  );
};

export default AlarmForm;
