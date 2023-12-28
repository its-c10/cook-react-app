import styles from "./Home.module.css";
import { CgMenuGridR } from "react-icons/cg";
import Navbar from "../../components/navbar";
import Jumbotron from "../../components/jumbotron";
import Trending from "../../components/trending";
import Footer from "../../components/footer";
import { useState } from "react";
import Menu from "../../components/menu";
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
      <Trending></Trending>
      <Footer></Footer>
    </>
  );
};

export default Home;
