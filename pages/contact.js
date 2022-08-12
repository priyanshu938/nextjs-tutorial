import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
const contact = () => {
  return (
    <div>
    {
        //Adding head tag and meta tags like this
      }
      <Head>
        <title>Contact</title>
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
      <div>contact</div>
    </div>
  );
};

export default contact;
