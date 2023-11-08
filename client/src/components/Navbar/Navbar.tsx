import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={styles["nav"]}>
      <li>
        <a href="">About</a>
      </li>
      <div style={{ float: "right" }}>
        <li className={styles["right"]}>
          <CgMenuGridR></CgMenuGridR>
        </li>
        <li className={styles["right"]}>Login</li>
      </div>
    </ul>
  );
};

export default Navbar;
