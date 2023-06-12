import Image from "next/image";
import React from "react";

function Home() {
  return (
    <section id="home" className="flex mt-24">
      <div className="w-7/12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">Ischa Mommaerts. <span className="text-primary dark:text-primary">Developer</span></h1>
        <h2></h2>
        <h3>
          Welcome to my bachelor portfolio. Continue scrolling to learn more...
        </h3>
      </div>
      <div>
        <img src="assets/programming.svg" height="500" width="500" alt=""/ >
      </div>
    </section>
  );
}

export default Home;
