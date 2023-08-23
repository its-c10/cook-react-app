import styles from "./Home.module.css";
import { CgMenuGridR } from "react-icons/cg";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
    </>
  );
};

export default Home;
