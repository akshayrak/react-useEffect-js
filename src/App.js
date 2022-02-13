import './style.css';
import React, { useState, useEffect } from 'react';
export default function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    setInterval(
      () =>
        setSecond((prevSec) => {
          if (prevSec >= 59) {
            setMinute((prevMin) => {
              if (prevMin >= 59) {
                setHour((prevHour) => prevHour + 1);
                setMinute(0);
              }
              return prevMin + 1;
            });
            setSecond(0);
          }
          return prevSec + 1;
        }),
      1000
    );
  }, []);
  useEffect(() => {
    console.log(second);
  }, [second]);

  return (
    <div>
      <h1>
        {`${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${
          second < 10 ? '0' : ''
        }${second}`}
      </h1>
    </div>
  );
}
