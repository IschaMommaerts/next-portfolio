import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row gap-10 items-center py-24 scroll-mt-24"
    >
      <div className="lg:w-7/12">
        <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100">
          Ischa Mommaerts.
        </h1>
        <div className="relative mb-6">
          <h1 className="text-6xl lg:text-7xl font-bold text-primary dark:text-primary animate-bottomtotop opacity-0">
            Developer
          </h1>
          <h1 className="absolute top-0 text-6xl lg:text-7xl font-bold text-primary dark:text-primary animate-bottomtotop opacity-0 animation-delay-8000">
            Student
          </h1>
        </div>
        <div className="flex space-x-4 mb-6">
          <a href="https://github.com/IschaMommaerts" target="_blank"><FontAwesomeIcon icon={faGithub} className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary h-8 w-8 cusor-pointer" /></a>
          <a href="https://linkedin.com/in/ischa-mommaerts-601380228" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="text-gray-900  hover:text-primary dark:hover:text-primary dark:text-gray-100 h-8 w-8 cusor-pointer" /></a>
          <a href="https://twitter.com/IschaMommaerts" target="_blank"><FontAwesomeIcon icon={faTwitter} className="text-gray-900 dark:text-gray-100  hover:text-primary dark:hover:text-primary h-8 w-8 cusor-pointer" /></a>
          <a href="https://discordapp.com/users/115358773786312711" target="_blank"><FontAwesomeIcon icon={faDiscord} className="text-gray-900 dark:text-gray-100  hover:text-primary dark:hover:text-primary h-8 w-8 cusor-pointer" /></a>
        </div>
        <h3 className="text-gray-900 dark:text-gray-100 text-3xl font-bold">
          Welkom op mijn bachelor portfolio website.
        </h3>
      </div>
      <div>
        <img src="/assets/programming.svg" alt="" />
      </div>
    </section>
  );
}

export default Home;
