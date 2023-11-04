import styles from "./Home.module.css";
import { CgMenuGridR } from "react-icons/cg";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import { useState } from "react";
import Menu from "../Menu";
import React from "react";

const Home = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      {menuOpened ? <Menu></Menu> : null}
      <Jumbotron></Jumbotron>
      <p>{!data ? "Loading..." : data}</p>

    </>
  );
};

export default Home;
