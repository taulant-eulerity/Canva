// Timer.tsx

import React, { useState, useEffect, useRef } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);
  const timerRef: any = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (running) setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setRunning(false);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <h1>Timer</h1>
      <div>
        <span>Seconds: {seconds}</span>
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
