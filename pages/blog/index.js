import React from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";

//For API call in Next.js use  getStaticProps()
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};

const index = ({ posts }) => {
  return (
    <div>
      {
        //Adding head tag and meta tags like this
      }
      <Head>
        <title>Blog</title>
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
        //Using map to display posts
        posts.slice(0,5).map((post) => {
          return (
            <div key={post.id} className="ssr-styles">
              <h3>{post.id}</h3>
              <h2>{post.title}</h2>
            </div>
          );
        })
      }
    </div>
  );
};

export default index;
