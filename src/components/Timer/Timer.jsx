import React, { useState, useEffect } from 'react';

const Timer = ({
  time
}) => {
  const [totalTime, setTotalTime] = useState(time);
  const [timerId, setTimerId] = useState(null);

  const tick = () => {
    if (totalTime > 0) {
      setTotalTime((prevtotalTime) => prevtotalTime - 1);
    }
  }

  const runTick = () => {
    setTimerId(setInterval(tick, 1000));
  }

  useEffect(() => {
    
    return () => clearInterval(timerId);
  }, [time, timerId]);

  if (totalTime === 0) {
    clearInterval(timerId);
  }

  const min = totalTime / 60 < 10 ? `0${Math.floor(totalTime/ 60)}` : Math.floor(totalTime/ 60);
  const sec = totalTime % 60 < 10 ? `0${totalTime % 60}` : totalTime % 60;
  const timer = `${min}:${sec}`;

  
  return (
    <span>
      <span className="description">
      <button type="button" label="Run timer" className="icon icon-play" onClick={runTick} />
            <button
              type="button"
              label="Pause timer"
              className="icon icon-pause"
              onClick={() => clearInterval(timerId)}
            />
              <span className="timer-value">{timer}</span>
      </span>
    </span>
  )
}

export default Timer
