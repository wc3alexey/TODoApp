import React, { useState } from 'react'

const Timer = ({

  minuts, seconds
}) => {
  const [time, setTime] = useState({
      m: minuts,
      s: seconds,
  });

  const [timer, setTimer] = useState(null);

  const startTimer = () => {
      let myInterval = setInterval(() => {
          setTime((time) => {
              const updatedTime = { ...time };
              if (time.s > 0) {
                  updatedTime.s--;
              }

              if (time.s === 0 ) {
                  if (time.m === 0) {
                      clearInterval(myInterval);
                  } else if (time.m > 0) {
                      updatedTime.m--;
                      updatedTime.s = 59;
                  }
              }

              return updatedTime;
          });
      }, 1000);
      setTimer(myInterval);
  };

  const pauseTimer = () => {
      clearInterval(timer);
  };

 
  
  return (
    <>
      <span className="description">
        <button className="icon icon-play"  onClick={startTimer}></button>
        <button className="icon icon-pause" onClick={pauseTimer}></button>
        <h3>
        {time.m < 10 ? `0${time.m}` : time.m}:
        {time.s < 10 ? `0${time.s}` : time.s}
        </h3>
      </span>
    </>
  )
}

export default Timer
