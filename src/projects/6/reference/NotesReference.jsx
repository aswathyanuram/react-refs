import React, { useRef, useState } from "react";
import styles from "./NotesReference.module.css";
import { ColorPicker } from "antd";

export default function NotesReference() {
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState([]);
  const ref = useRef(null);

  const COLORS = ["red", "green", "blue"];

  const [color, setColor] = useState(`rgb(255,255,255)`);

  return (
    <div className={styles.container}>
      <div className={styles.data}>
        <input
          ref={ref}
          className={styles.input}
          type="text"
          placeholder="Add your notes"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <ColorPicker
          defaultValue="#1677ff"
          value={color}
          onChange={(e) => {
            let inner = e.metaColor;
            setColor(`rgb(${inner.r},${inner.g},${inner.b})`);
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            setNotes((old) => {
              return [...old, { note: value, color: color }];
            });
            setValue("");
            if (ref?.current) {
              ref?.current?.focus();
            }
          }}
        >
          Save
        </button>
      </div>
      <div className={styles.notes}>
        {notes.map((note) => {
          return (
            <div className={styles.card} style={{ background: note.color }}>
              {note.note}
            </div>
          );
        })}
      </div>
    </div>
  );
}
