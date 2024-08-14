import React, { useEffect, useState } from "react";
import "./p2r-reference.css";

export default function TimerReference() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let convertedHours = hours > 12 ? hours - 12 : hours;
  convertedHours =
    String(convertedHours)?.length === 1
      ? `0${convertedHours}`
      : convertedHours;

  return (
    <div className="p2r-timer">
      <div className="p2r-hours">{convertedHours}</div>
      <div>:</div>
      <div className="p2r-minutes">{minutes}</div>
      <div>:</div>
      <div className="p2r-seconds">{seconds}</div>
      <div className="p2r-type">{hours > 12 ? "PM" : "AM"}</div>
    </div>
  );
}
