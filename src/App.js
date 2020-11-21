import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <StopWatch/>
    </div>
  );
}

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [isStopWatchRunning, setStopWatchRunning] = useState(false);

  useEffect(() => {
    let intervalid;
    if(isStopWatchRunning) {
      intervalid = setInterval(() => {
         setCount(oldCount => oldCount + 1)
      }, 1000)
    }

    return () => clearInterval(intervalid);
  }, [isStopWatchRunning])

  return(
    <div>
      <div>{count}</div>
      <button onClick={() => setStopWatchRunning(true)}>Start</button>
      <button onClick={() => setStopWatchRunning(false)}>Stop</button>
    </div>
  )
}


