import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import "./Navbar.module.css"; // Makes it to where I can style general html elements.
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul>
      <li>About</li>
      <li>
        <CgMenuGridR></CgMenuGridR>
      </li>
      <li>Login</li>
    </ul>
  );
};

export default Navbar;
