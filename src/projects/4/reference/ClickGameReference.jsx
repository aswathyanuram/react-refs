import React, { useState } from "react";
import "./p4r-clickgame.css";

export default function ClickGameReference() {
  const [isCorrect, setIsCorrect] = useState(null);
  const [random, setRandom] = useState(null);
  const [userValue, setUserValue] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const onUserClick = (value) => {
    setGameStarted(true);
    const random = Math.floor(Math.random() * 4) + 1;
    setUserValue(value);
    setRandom(random);

    setTimeout(() => {
      setRandom(null);
      setUserValue(null);
      setGameStarted(false);
    }, 5000);
  };
  return (
    <div className="p4r-container">
      {!gameStarted && <div className="p4r-row">PICK A NUMBER</div>}
      {gameStarted && (
        <div className="p4r-row">
          Random : {random} User : {userValue}
        </div>
      )}
      <div className="p4r-row">
        <div
          className="p4r-col"
          onClick={() => {
            onUserClick(1);
          }}
        >
          1
        </div>
        <div
          className="p4r-col"
          onClick={() => {
            onUserClick(2);
          }}
        >
          2
        </div>
      </div>
      <div className="p4r-row">
        <div
          className="p4r-col"
          onClick={() => {
            onUserClick(3);
          }}
        >
          3
        </div>
        <div
          className="p4r-col"
          onClick={() => {
            onUserClick(4);
          }}
        >
          4
        </div>
      </div>
      {gameStarted && (
        <div className="p4r-row">
          {userValue === random && <div className="p4r-correct">CORRECT</div>}
          {userValue !== random && (
            <div className="p4r-incorrect">INCORRECT</div>
          )}
        </div>
      )}
    </div>
  );
}
