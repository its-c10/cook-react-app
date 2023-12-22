import styles from "./Home.module.css";
import { CgMenuGridR } from "react-icons/cg";
import Navbar from "../../components/navbar";
import Jumbotron from "../../components/jumbotron";
import Trending from "../../components/trending";
import Footer from "../../components/footer";
import { useState } from "react";
<<<<<<< HEAD:client/src/components/Home/Home.tsx
import Menu from "../Menu";
import React from "react";
=======
import Menu from "../../components/menu";
>>>>>>> efc137daf2c61d798183a0b1129b74c8142f4641:client/src/pages/Home/Home.tsx

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
<<<<<<< HEAD:client/src/components/Home/Home.tsx
      <p>{!data ? "Loading..." : data}</p>

=======
      <Trending></Trending>
      <Footer></Footer>
>>>>>>> efc137daf2c61d798183a0b1129b74c8142f4641:client/src/pages/Home/Home.tsx
    </>
  );
};

export default Home;
