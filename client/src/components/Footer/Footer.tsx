import React from "react";
import { NAME } from "../../constants";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <p>{NAME}</p>
    </div>
  );
};

export default Footer;
