import React, { useState, useEffect } from 'react';

const Timer = ({ second, minuts }) => {
  let timer = () => {};

  const [timeLeft, setTimeLeft] = useState({ minuts, second });

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const start = () => {
    setTimeLeft({ minuts, second });
    clearTimeout(timer);
    startTimer();
  };
  return (
    <>
      <span className="description">
        <button className="icon icon-play" onClick={start}></button>
        <button className="icon icon-pause"></button>
      </span>
    </>
  );
};

export default Timer;
