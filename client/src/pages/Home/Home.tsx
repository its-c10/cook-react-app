import styles from "./Home.module.css";
import { CgMenuGridR } from "react-icons/cg";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Trending from "../../components/Trending";
import Footer from "../../components/Footer";
import { useState } from "react";
import Menu from "../../components/Menu";

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
