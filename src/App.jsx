import { useState } from "react";
import "./App.css";
import CounterPractise from "./projects/1/practise/CounterPractise";
import CounterReference from "./projects/1/reference/CounterReference";
import ChessReference from "./projects/3/reference/ChessReference";
import ChessPractise from "./projects/3/practise/ChessPractise";
import TimerPractise from "./projects/2/practise/TimerPractise";
import TimerReference from "./projects/2/reference/TimerReference";
import ClickGameReference from "./projects/4/reference/ClickGameReference";
import ClickButtonPractise from "./projects/5/practise/ClickButtonPractise";
import ClickButtonReference from "./projects/5/reference/ClickButtonReference";
import DropdownPractise from "./projects/7/practise/DropdownPractise";
import DropdownReference from "./projects/7/reference/DropdownReference";
import NotesPractise from "./projects/6/practise/NotesPractise";
import NotesReference from "./projects/6/reference/NotesReference";
import ClickGamePractise from "./projects/4/practise/ClickGame";
import ANTReference from "./projects/8/reference/ANTReference";
import ANTPractise from "./projects/8/practise/ANTPractise";
import TabsReference from "./projects/9/Reference/TabsReference";
import TabsPractise from "./projects/9/Practise/TabsPractise";

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
      title: "Timer",
      reference: <TimerReference />,
      practise: <TimerPractise />,
    },
    {
      id: 3,
      title: "Chess",
      reference: <ChessReference />,
      practise: <ChessPractise />,
    },
    {
      id: 4,
      title: "Click Game",
      reference: <ClickGameReference />,
      practise: <ClickGamePractise />,
    },
    {
      id: 5,
      title: "Click Button",
      reference: <ClickButtonReference />,
      practise: <ClickButtonPractise />,
    },
    {
      id: 6,
      title: "Notes App",
      reference: <NotesReference />,
      practise: <NotesPractise />,
    },
    {
      id: 7,
      title: "Dropdown",
      reference: <DropdownReference />,
      practise: <DropdownPractise />,
    },
    {
      id: 8,
      title: "ANT UI",
      reference: <ANTReference />,
      practise: <ANTPractise />,
    },
    {
      id: 9,
      title: "Tabs",
      reference: <TabsReference />,
      practise: <TabsPractise />,
    },
  ];

  const TAB_PRACTISE = "TAB_PRACTISE";
  const TAB_REFERENCE = "TAB_REFERENCE";

  const [selectedProject, setSelectedProject] = useState(
    projects?.[projects?.length - 1]
  );
  const [selectedContentTab, setSelectedContentTab] = useState(TAB_REFERENCE);

  return (
    <div className="container">
      <div className="leftsidebar">
        {projects.map((project) => {
          return (
            <div
              className={
                selectedProject?.id == project?.id ? "tab-selected" : "tab"
              }
              key={project.id}
            >
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
