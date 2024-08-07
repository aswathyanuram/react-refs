import React, { useState } from "react";
import styles from "./ClickButtonReference.module.css";

export default function ClickButtonReference() {
  const [number, setNumber] = useState(0);
  const onClickValue = (value) => {
    setNumber(value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.number}>{number}</div>
      <div className={styles.buttons}>
        {new Array(10).fill(1).map((item, index) => {
          return (
            <div
              className={styles.button}
              onClick={() => {
                onClickValue(index + 1);
              }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
