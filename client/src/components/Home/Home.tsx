import styles from "./Home.module.css";
import { CgMenuGridR } from "react-icons/cg";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Trending from "../Trending";
import Footer from "../Footer";
import { useState } from "react";
import Menu from "../Menu";

const Home = () => {
  const [menuOpened, setMenuOpened] = useState(false);
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
