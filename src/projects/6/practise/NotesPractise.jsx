import React from "react";
import { useState } from "react";

export default function NotesPractise() {
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState([]);
  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Add your notes here"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setNotes((old) => {
              return [...old, { note: value }];
            });
          }}
        >
          Save
        </button>
      </div>
      <div>
        {notes.map((note) => {
          return <div>{note.note}</div>;
        })}
      </div>
    </div>
  );
}
