import styles from "./Home.module.css";
import { CgMenuGridR } from "react-icons/cg";
import Navbar from "../../components/navbar";
import Jumbotron from "../../components/jumbotron";
import Trending from "../../components/trending";
import Footer from "../../components/footer";
import { useState } from "react";
import Menu from "../../components/menu";

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
