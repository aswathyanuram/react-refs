import React from "react";
import "./p3r-chess.css";

export default function ChessReference() {
  const COLS = 8;
  return (
    <div className="p3r-container">
      {new Array(COLS).fill(1).map((item, index1) => {
        return (
          <div className="p3r-row">
            {new Array(COLS).fill(1).map((item, index2) => {
              let classColor =
                (index1 + index2) % 2 === 0 ? "p3r-col-white" : "p3r-col-black";
              return <div className={classColor}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
}
