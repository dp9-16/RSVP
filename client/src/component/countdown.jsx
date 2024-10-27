import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const val = new Date(2024, 10, 23, 19);
  const [ timeRemaining, setTR ] = useState((val - Date.now())/1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTR((prevTime) => {
        if (prevTime === 0) {
          return 0;
        } else {
          return prevTime - 1;
        }
      })
    }, 1000)
  }, [])

  let days = Math.floor(timeRemaining / 86400);
  let hours = Math.floor((timeRemaining % 86400) / 3600);
  let minutes = Math.floor((timeRemaining % 3600) / 60);
  let seconds = Math.floor(timeRemaining % 60);
  return  (
    <div className="countdownCont">
      <p><i>November. 23. 2024</i></p>
      <p>7:00 PM</p>
      <div className="timerCont">
        <div className="time">
          <p>{`${days}`.padStart(2,0)}</p>
          <p className="timerLabel">days</p>
        </div>
        <div className="time">
          <p>{`${hours}`.padStart(2,0)}</p>
          <p className="timerLabel">hours</p>
        </div>
        <div className="time">
          <p>{`${minutes}`.padStart(2,0)}</p>
          <p className="timerLabel">minutes</p>
        </div>
        <div className="time">
          <p>{`${seconds}`.padStart(2,0)}</p>
          <p className="timerLabel">seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Countdown;