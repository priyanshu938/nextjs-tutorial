import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
const home = () => {
  return (
    <div>
      <Navbar />
      {
        //we can apply multiple classes on one component like below
      }
      <div className={`${styles.home} ${styles.homeBg}`}>home</div>
    </div>
  );
};

export default home;
