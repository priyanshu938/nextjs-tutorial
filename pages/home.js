import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
const home = () => {
  return (
    <div>
      {
        //Adding head tag and meta tags like this
      }
      <Head>
        <title>Home</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript,next.js" />
        <meta name="author" content="Priyanshu" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      {
        //we can apply multiple classes on one component like below
      }
      <div className={`${styles.home} ${styles.homeBg}`}>home</div>
      {
        //Add internal image like this
      }
      <Image src="/home.png" alt="home" width={300} height={300} />
      {
        //For adding external image,configure next.config.js and use like this
      }
      <Image
        src="https://imgs.search.brave.com/AtK6rtloNQOilYNklALnRuiE82AueusideR7lwY-yG0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9icmlz/dG9sd2FzdGVjb21w/YW55LmNvLnVrL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA3/L0ItUmV1c2FibGUt/Q29mZmVlLUN1cC1z/Y2FsZWQuanBlZw"
        alt="home"
        width={300}
        height={300}
      />
    </div>
  );
};

export default home;
