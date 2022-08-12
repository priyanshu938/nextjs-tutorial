import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const errorPage = () => {
  //to create a custom 404 page, we need to create a custom page component with file name 404.js
  return (
    <div>
      {" "}
      <Navbar />
      <h1>We are sorry page not found!</h1>
      <Link href="/">
        <button>Back to homepage</button>
      </Link>
    </div>
  );
};

export default errorPage;
