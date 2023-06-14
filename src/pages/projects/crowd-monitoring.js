import React from "react";
import SliderComponent from "@/components/swiper";

function ProjectPhp() {
  const images = [
    "/assets/projects/crowd-monitoring/addevenement.png",
    "/assets/projects/crowd-monitoring/addevenementfilledin.png",
    "/assets/projects/crowd-monitoring/agenten.png",
    "/assets/projects/crowd-monitoring/agentenadded.png",
    "/assets/projects/crowd-monitoring/agentenempty.png",
    "/assets/projects/crowd-monitoring/bewerkrole.png",
    "/assets/projects/crowd-monitoring/devicesadded.png",
    "/assets/projects/crowd-monitoring/devicesedit.png",
    "/assets/projects/crowd-monitoring/evenementadded.png",
    "/assets/projects/crowd-monitoring/evenementedit.png",
    "/assets/projects/crowd-monitoring/users.png",
  ];

  return (
    <div className="space-y-6 pt-12">
      <div className="space-y-6">
        <h1 className="text-7xl font-bold text-gray-900 dark:text-gray-100">
          Mediaan Crowd Monitoring
        </h1>
        <div className="flex gap-2 flex-wrap">
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-gray-100">
            .NET
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Vue.js
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Groepswerk
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            JWT
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Hosting
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            AI
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Tailwindcss
          </span>
        </div>
      </div>
      <div className="lg:flex space-y-6 lg:space-x-6 lg:space-y-0">
        <div className="space-y-4">
          <ul className="text-lg text-gray-900 dark:text-gray-100 font-bold">
            <li>Datum:&nbsp;16 Januari 2023 - 22 Februari 2023</li>
            <li>Vak:&nbsp;3ITF - Project 4.0 (2022)</li>
            <li>
              Video:&nbsp;
              <a
                href="https://www.youtube.com/watch?v=0vlVCquGuv0"
                target="_blank"
                className="text-primary font-bold cursor-pointer hover:underline decoration-2"
              >
                Youtube
              </a>
            </li>
          </ul>
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100 space-y-4">
            <p>
              Samen met{" "}
              <a
                href="https://mediaan.com/"
                target="_blank"
                className="text-primary font-bold cursor-pointer hover:underline decoration-2"
              >
                Mediaan
              </a>{" "}
              hebben ik en 5 andere studenten een crowd monitoring systeem
              ontwikkeld om betere beveiliging te kunnen leveren aan
              verschillende soorten evenementen.
            </p>
            <p>
              Na een lange preparatie en conceptiefase om het project plan op
              punt te stellen hebben we 3 weken lang voltijds een crowd
              monitoring systeem ontwikkeld. Het systeem bestaat uit een
              webapplicatie waar agenten teamleads en evenementen in kunnen
              worden beheerd. En een AI-model om gebeurtenissen te decteren
              zoals applaus en sirenes. En ook een AI-model om de stemming te
              kunnen detecteren. Ook was de hosting van belang, dit moest
              volgens de CI/CD methode gebeuren.
            </p>
            <p>
              Als student applicatie ontwikkeling was de webapplicatie mijn
              verantwoordelijkheid. Ik heb de backend in .NET opgezet en ook
              beveiligd met JWT authenticatie. Voor de frontend in Vue.js heb ik
              ook het inloggen, gebruikersbeheer en evenementsbeheren
              ontwikkeld.
            </p>
            <p>
              Ik was ook teamlead in deze realisatiefase. Ik stond dus
              verantwoordelijke voor de dagelijkse Scrum vergadering en
              retrospectieve vergadering
            </p>
            <p>
              Het project was voor mij zeer geslaagd. Ik hard gegroeid door dit
              project. Bijvoorbeeld heb ik een nieuw javascript framework Vue.js
              geleerd. Ook door samen aan een project te werken met studenten
              van andere studierichtingen informatica heb ik veel kunnen leren.
              En als teamlead zijn mijn softskills er ook op vooruit gegaan.
            </p>
          </div>
        </div>
        <div className="lg:w-6/12">
          <SliderComponent images={images} />
        </div>
      </div>
    </div>
  );
}

export default ProjectPhp;
