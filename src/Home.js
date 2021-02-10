import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import App from "./App";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  //   const data = useContext(AppContext);
  const { openModal, openSidebar } = useGlobalContext();
  //   console.log(data);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
