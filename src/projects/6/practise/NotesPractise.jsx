import React, { useState } from "react";
import { ColorPicker } from "antd";

export default function NotesPractise() {
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState("rgb(255,0,0)");
  return (
    <div>
      <div>
        <input
          value={value}
          placeholder="Add your notes"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <ColorPicker
          defaultValue="#1677ff"
          value={color}
          onChange={(e) => {
            setColor(`rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`);
          }}
        />
        <button
          onClick={() => {
            setNotes((old) => {
              return [...old, { text: value, color: color }];
            });
          }}
        >
          Save
        </button>
      </div>
      <div>
        {notes.map((note) => {
          return (
            <div style={{ backgroundColor: note.color }}>{note.text} </div>
          );
        })}
      </div>
    </div>
  );
}
