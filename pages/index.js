import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <navbar>
        <ul>
          {
            // use Link for routing
          }
          <Link href="/home">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </ul>
      </navbar>
    </div>
  );
};

export default index;
