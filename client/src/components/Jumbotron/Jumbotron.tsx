import React, { useState } from "react";
import styles from "./Jumbotron.module.css";
import { AiFillRobot } from "react-icons/ai";
import { IconContext } from "react-icons";

const Jumbotron = () => {
  const [cookInquring, setCookInquring] = useState(false);

  return (
    <div className={styles["jumbo"]}>
      <div className={styles["center"]}>
        <IconContext.Provider value={{ size: "50px", color: "white" }}>
          <AiFillRobot></AiFillRobot>
        </IconContext.Provider>
        <p>What can I help you with?</p>
      </div>
      <div className={styles["options-section"]}>
        <button onClick={() => setCookInquring(true)}>
          Help me figure out what I can cook
        </button>
        <button>Help me figure out what I'm in the mood for</button>
        <button>Help me find ingredients</button>
        <button>Walk me through a recipe</button>
      </div>
    </div>
  );
};

export default Jumbotron;
