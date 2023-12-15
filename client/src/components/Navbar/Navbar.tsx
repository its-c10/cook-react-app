import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className={styles["nav"]}>
      <li>
        <Link to="about">About</Link>
      </li>
      <div style={{ float: "right" }}>
        {/* <li className={styles['right']}>
          <CgMenuGridR></CgMenuGridR>
        </li> */}
        <li className={styles["right"]}>
          <a href="">Login</a>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
