import Instructions from "./components/Instructions";
import LearningObjectives from "./components/LearningObjectives";
import VideoTutorial from "./components/VideoTutorial";
import { useState } from "react";
import styles from "./StudentDashboard.module.css";

export default function StudentDashboard() {
  const [displayedContent, setDisplayedContent] = useState({ comp: <Instructions />, name: "instructions" });

  function handleContentClick(event) {
    console.log(event.target.id);
    switch (event.target.id) {
      case "instructions":
        setDisplayedContent({ comp: <Instructions />, name: "instructions" });
        break;
      case "learning-objectives":
        setDisplayedContent({ comp: <LearningObjectives />, name: "learning-objectives" });
        break;
      case "video-tutorial":
        setDisplayedContent({ comp: <VideoTutorial />, name: "video-tutorial" });
        break;

      default:
        break;
    }
  }

  // DRY Principle = Don't Repeat Yourself

  return (
    <div className="sidebar">
      <button
        className={`${styles.btn} ${displayedContent.name === "instructions" ? styles.btnActive : ""}`}
        id="instructions"
        onClick={handleContentClick}
      >
        Instructions
      </button>
      <button
        className={`${styles.btn} ${displayedContent.name === "learning-objectives" ? styles.btnActive : ""}`}
        id="learning-objectives"
        onClick={handleContentClick}
      >
        Learning Objectives
      </button>
      <button
        className={`${styles.btn} ${displayedContent.name === "video-tutorial" ? styles.btnActive : ""}`}
        id="video-tutorial"
        onClick={handleContentClick}
      >
        Video Tutorial
      </button>
      {displayedContent.comp}
    </div>
  );
}
