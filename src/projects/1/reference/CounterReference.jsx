import React, { useState } from "react";
import "./p1r-counter.css";

export default function CounterReference() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="p1r-container">
      <div
        className="p1r-plus"
        onClick={() => {
          setCounter((old) => old + 1);
        }}
      >
        +
      </div>
      <div className="p1r-content">{counter}</div>
      <div
        className="p1r-minus"
        onClick={() => {
          setCounter((old) => old - 1);
        }}
      >
        _
      </div>
    </div>
  );
}
