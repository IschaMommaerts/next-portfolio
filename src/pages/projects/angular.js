import React from "react";
import CarouselWrapper from "@/components/CarouselWrapper";

function ProjectPhp() {
  const slides = [
    { src: "/assets/projects/angular/bettinggroupdetails.png" },
    { src: "/assets/projects/angular/bettinggroups.png" },
    { src: "/assets/projects/angular/cadminprofile.png" },
    { src: "/assets/projects/angular/companyprofile.png" },
    { src: "/assets/projects/angular/events.png" },
    { src: "/assets/projects/angular/homescreen.png" },
    { src: "/assets/projects/angular/makeprediction.png" },
    { src: "/assets/projects/angular/manageusers.png" },
    { src: "/assets/projects/angular/userprofile.png" },
    { src: "/assets/projects/angular/userprofileedit.png" },
    { src: "/assets/projects/angular/userrequests.png" },
  ];

  return (
    <div className="space-y-6 lg:pt-12">
      <div className="space-y-6">
        <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100">
          Angular Application Challenge
        </h1>
        <div className="flex gap-2 flex-wrap">
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-gray-100">
            .NET
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Angular
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
        </div>
      </div>
      <div className="lg:flex space-y-6 lg:space-x-6 lg:space-y-0">
        <div className="space-y-4 lg:w-6/12">
          <ul className="text-lg text-gray-900 dark:text-gray-100 font-bold">
            <li>Datum:&nbsp;2 December 2022 - 15 December 2022</li>
            <li>Vak:&nbsp; 3ITF - Angular (2022)</li>
          </ul>
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100 space-y-4">
            <p>
              Voor de Angular app challenge hielp ik bij het maken van een
              pronostiek app in opdracht van dotNET lab.
            </p>
            <p>
              Als groep van 6 studenten kregen wij een aantal eisen voor een
              pronostiek app. Uit deze eisen maakte we een datamodel en ook al
              een ruwe schets van hoe de applicatie er uit zou zien.
            </p>
            <p>
              Gedurende 2 weken werd de applicatie ontwikkeld. Daarna moesten we
              de applicatie voorstellen. Ons team won uiteindelijk de tweede
              prijs.
            </p>
            <p>
              Het deel van de applicatie waar ik aan gewerkt heb was de
              authenticatie, gebruikersbeheer en het registreren van nieuwe
              gebruikers. Ook was ik verantwoordelijk voor de hosting van de
              front-end.
            </p>
            <p>
              Ik heb al doende veel bijgeleerd op technisch vlak van Angular.
              Ook heb ik leren werken met JWT authenticatie.
            </p>
          </div>
        </div>
        <div className="lg:w-6/12">
          <CarouselWrapper slides={slides} />
        </div>
      </div>
    </div>
  );
}

export default ProjectPhp;
