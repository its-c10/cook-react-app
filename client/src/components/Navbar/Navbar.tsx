import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={styles["nav"]}>
      <li>
        <a href="#">About</a>
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
