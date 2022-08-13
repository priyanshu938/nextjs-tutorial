import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <navbar className="menu-bar">
      <ul>
        {
          // use Link for routing
        }
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </ul>
    </navbar>
  );
};

export default Navbar;
