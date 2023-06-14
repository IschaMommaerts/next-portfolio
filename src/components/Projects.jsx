import React, { useState } from "react";
import Link from "next/link";

function Projects() {
  const [index, setIndex] = useState(-1);
  return (
    <section id="projects" className="space-y-6 scroll-mt-24">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
        Overige projecten
      </h1>
      <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
        Alle projecten waar ik de voorbije 3 jaar van mijn opleiding aan gewerkt
        heb.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <Link href="/projects/php" className="grow">
        <div className="rounded-lg shadow-lg h-full flex flex-col dark:shadow-gray-100/5 hover:shadow-xl">
            <img
              className="rounded-t-lg"
              src="/assets/projects/php/medication.jpg"
              alt=""
            />

            <div className="p-5 space-y-4 justify-end flex flex-col flex-1">
              <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
                Project PHP
              </h2>
              <div className="flex gap-2 flex-wrap">
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  PHP
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Bootstrap
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Groepswerk
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Jquery
                </span>
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100 space-y-4">
                Applicatie voor verzoriging van jonge alzheimer patiënten.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/projects/angular" className="grow">
        <div className="rounded-lg shadow-lg h-full flex flex-col dark:shadow-gray-100/5 hover:shadow-xl">
            <img
              className="rounded-t-lg"
              src="/assets/projects/angular/homescreen.jpg"
              alt=""
            />

            <div className="p-5 space-y-4 justify-end flex flex-col flex-1">
              <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
                Angular Application Challenge
              </h2>
              <div className="flex gap-2 flex-wrap">
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  .NET
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Angular
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Groepswerk
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  JWT
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Hosting
                </span>
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100 space-y-4">
                Pronostiek app voor sport evenementen.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/projects/crowd-monitoring" className="grow">
          <div className="rounded-lg shadow-lg h-full flex flex-col dark:shadow-gray-100/5 hover:shadow-xl">
            <img
              className="rounded-t-lg"
              src="/assets/projects/crowd-monitoring/evenementedit.png"
              alt=""
            />
            <div className="p-5 space-y-4 justify-end flex flex-col flex-1">
              <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
                Mediaan Crowd Monitoring
              </h2>
              <div className="flex gap-2 flex-wrap">
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  .NET
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Vue.js
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Groepswerk
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  JWT
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Hosting
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  AI
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Tailwindcss
                </span>
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100 space-y-4">
                Crowd monitoring systeem voor betere veiligheid bij evenementen.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/projects/country-quiz" className="grow">
        <div className="rounded-lg shadow-lg h-full flex flex-col dark:shadow-gray-100/5 hover:shadow-xl">
            <img
              className="rounded-t-lg"
              src="/assets/projects/country-quiz/countryquizcropped.jpg"
              alt=""
            />
            <div className="p-5 space-y-4 justify-end flex flex-col flex-1">
              <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
                Country Quiz App
              </h2>
              <div className="flex gap-2 flex-wrap">
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Flutter
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Wikitude
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Individueel
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  AR
                </span>
                <span className="rounded-md bg-primary px-2 py-1 font-bold leading-none text-white">
                  Dart
                </span>
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100 space-y-4">
                Quiz app om een land te raden aan de hand van een aantal weetjes.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
