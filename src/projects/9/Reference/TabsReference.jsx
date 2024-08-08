import React, { useState } from "react";
import styles from "./TabsReference.module.css";

export default function TabsReference() {
  const details = [
    {
      id: 1,
      title: "Javascript",
      content:
        "JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page.",
    },
    {
      id: 2,
      title: "React",
      content:
        "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components.",
    },
    {
      id: 3,
      title: "Node",
      content:
        "Node. js is not a programming language; it is a runtime environment allowing you to execute JavaScript code on the server side, outside a web browser. Built on the V8 JavaScript engine from Chrome, Node. js compiles JavaScript into machine code for efficient execution.",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(details?.[0]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {details.map((detail) => {
          return (
            <div
              className={
                selectedTab?.id == detail?.id ? styles.selectedTab : styles.tab
              }
              onClick={() => {
                setSelectedTab(detail);
              }}
            >
              {detail?.title}
            </div>
          );
        })}
      </div>
      <div className={styles.content}>{selectedTab?.content}</div>
    </div>
  );
}
