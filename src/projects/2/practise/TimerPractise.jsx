import React, { useEffect, useState } from "react";
import "./p2p-timer.css";

export default function TimerPractise() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const timer = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
  }, []);
  return (
    <div className="p2p-timer">
      <div>{String(hours)?.length === 1 ? `0${hours}` : hours}</div>
      <div>:</div>
      <div>{String(minutes)?.length === 1 ? `0${minutes}` : minutes}</div>
      <div>:</div>
      <div>{String(seconds)?.length === 1 ? `0${seconds}` : seconds}</div>
    </div>
  );
}
