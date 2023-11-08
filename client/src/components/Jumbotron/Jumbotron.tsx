import React from "react";
import styles from "./Jumbotron.module.css";
import { AiFillRobot } from "react-icons/ai";
import { IconContext } from "react-icons";

const Jumbotron = () => {
  return (
    <div className={styles["jumbo"]}>
      <div className={styles["center"]}>
        <IconContext.Provider value={{ size: "50px", color: "white" }}>
          <AiFillRobot></AiFillRobot>
        </IconContext.Provider>
        <p>What can I help you with?</p>
      </div>
      <div className={styles["options-section"]}>
        <button>Help me decide what to cook</button>
        <button>Help me find ingredients</button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Jumbotron;
