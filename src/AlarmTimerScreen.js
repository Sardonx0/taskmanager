import React, { useState } from 'react';
import AlarmForm from './AlarmForm';
import TimerForm from './TimerForm';

const AlarmTimerScreen = () => {
  const [alarms, setAlarms] = useState([]);
  const [timers, setTimers] = useState([]);

  const addAlarm = (newAlarm) => {
    // Make API call to add alarm and update state
  };

  const addTimer = (newTimer) => {
    // Make API call to add timer and update state
  };

  return (
    <div>
      <h2>Alarm and Timer Screen</h2>
      <AlarmForm addAlarm={addAlarm} />
      {/* Display list of alarms */}
      <TimerForm addTimer={addTimer} />
      {/* Display list of timers */}
    </div>
  );
};

export default AlarmTimerScreen;
