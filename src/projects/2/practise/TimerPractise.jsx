import React, { useEffect, useState } from "react";

export default function TimerPractise() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </div>
  );
}
