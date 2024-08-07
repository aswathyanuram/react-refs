import React, { useState } from "react";
import styles from "./DropdownReference.module.css";

export default function DropdownReference() {
  const ONE = "One";
  const TWO = "Two";
  const THREE = "Three";

  const [selected, setSelected] = useState(ONE);
  return (
    <div>
      <select
        className={styles.select}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <option className={styles.option} value={ONE}>
          {ONE}
        </option>
        <option className={styles.option} value={TWO}>
          {TWO}
        </option>
        <option className={styles.option} value={THREE}>
          {THREE}
        </option>
      </select>
      <div className={styles.text}>{selected}</div>
    </div>
  );
}
