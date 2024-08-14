import React, { useEffect, useState } from "react";

export default function MessagePractise() {
  const [msg, setMsg] = useState("Hello");

  useEffect(() => {
    setInterval(() => {
      setMsg("Welcome");
    }, 5000);
  }, []);
  return <div>{msg}</div>;
}
