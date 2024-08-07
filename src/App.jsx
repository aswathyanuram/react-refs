import { useState } from "react";
import "./App.css";
import CounterPractise from "./projects/1/practise/CounterPractise";
import CounterReference from "./projects/1/reference/CounterReference";
import ChessReference from "./projects/3/reference/ChessReference";
import ChessPractise from "./projects/3/practise/ChessPractise";
import TimerRefence from "./projects/2/practise/reference/TimerReference";
import TimerPractise from "./projects/2/practise/TimerPractise";

function App() {
  const projects = [
    {
      id: 1,
      title: "Counter",
      reference: <CounterReference />,
      practise: <CounterPractise />,
    },
    {
      id: 2,
      title: "Chess",
      reference: <ChessReference />,
      practise: <ChessPractise />,
    },
    {
      id: 3,
      title: "Timer",
      reference: <TimerRefence />,
      practise: <TimerPractise />,
    },
  ];

  const TAB_PRACTISE = "TAB_PRACTISE";
  const TAB_REFERENCE = "TAB_REFERENCE";

  const [selectedProject, setSelectedProject] = useState(projects?.[0]);
  const [selectedContentTab, setSelectedContentTab] = useState(TAB_REFERENCE);

  return (
    <div className="container">
      <div className="leftsidebar">
        {projects.map((project) => {
          return (
            <div className="tab" key={project.id}>
              <div
                onClick={() => {
                  setSelectedProject(project);
                }}
              >
                {project.title}
              </div>
            </div>
          );
        })}
      </div>
      <div className="content">
        <div className="content-buttons">
          <div
            className={
              selectedContentTab == TAB_REFERENCE
                ? "content-button-selected"
                : "content-button"
            }
            onClick={() => {
              setSelectedContentTab(TAB_REFERENCE);
            }}
          >
            Reference
          </div>
          <div
            className={
              selectedContentTab == TAB_PRACTISE
                ? "content-button-selected"
                : "content-button"
            }
            onClick={() => {
              setSelectedContentTab(TAB_PRACTISE);
            }}
          >
            Practise
          </div>
        </div>
        {selectedContentTab == TAB_REFERENCE && (
          <div className="content">{selectedProject?.reference}</div>
        )}
        {selectedContentTab == TAB_PRACTISE && (
          <div className="content">{selectedProject?.practise}</div>
        )}
      </div>
    </div>
  );
}

export default App;
