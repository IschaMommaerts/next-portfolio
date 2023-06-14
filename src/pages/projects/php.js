import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SliderComponent from "@/components/swiper";

function ProjectPhp() {
  const images = ["/assets/projects/php/medication.jpg", "/assets/projects/php/prescriptions.jpg", "/assets/projects/php/prescribe.jfif"];

  return (
    <div className="space-y-6 pt-12">
      <div className="space-y-6">
        <h1 className="text-7xl font-bold text-gray-900 dark:text-gray-100">
          Project PHP
        </h1>
        <div className="flex gap-2 flex-wrap">
          <span className="rounded-md bg-primary px-4 py-2 font-bold leading-none text-gray-100">
            PHP
          </span>
          <span className="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Laravel
          </span>
          <span className="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Groepswerk
          </span>
          <span className="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Bootstrap
          </span>
          <span className="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Jquery
          </span>
        </div>
      </div>
      <div className="lg:flex space-y-6 lg:space-x-6 lg:space-y-0">
        <div className="space-y-4">
          <ul className="text-lg text-gray-900 dark:text-gray-100 font-bold">
            <li>Datum:&nbsp;18 Februari 2022 - 25 mei 2022</li>
            <li>Vak:&nbsp; 2ITF - Project PHP (2021)</li>
            <li>
              Website:&nbsp;{" "}
              <a
                href="https://lsta.remind-er.be/"
                target="_blank"
                className="hover:underline decoration-2 text-primary"
              >
                https://lsta.remind-er.be/
              </a>
            </li>
          </ul>
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100 space-y-4">
            <p>
              Het project PHP waar ik aan werkte was een Laravel web applicatie
              voor het verzorgen van jonge alzheimer patienten.
            </p>
            <p>
              Aan dit project werkte ik in een groep van 6 studenten. Eerder in
              een projectweek voor de vakken Requirements Analysis en PHP maakte
              we hiervoor al een designrapport. Op basis van dit design rapport
              gingen we tijdens een volledig semester aan de slag om een
              volwaardige applicatie uit te bouwen.{" "}
            </p>
            <p>
              Zoals altijd het geval is bij groepswerk is er veel samengewerkt.
              De onderdelen waar ik het meest voor gedaan heb zijn de
              functionaliteiten rond medicamenten en voorschriften. De schermen
              van deze functionaliteiten zijn op de afbeeldingen te zien.
            </p>
            <p>
              Tijdens dit project heb ik vaardiger geworden in PHP en Laravel.
              Ook heb ik veel bijgeleerd over applicatieontwikkeling in een team
              en de agile manier van werken met Jira.
            </p>
          </div>
        </div>
        <div className="lg:w-6/12">
          <SliderComponent images={images}/>
        </div>
      </div>
    </div>
  );
}

export default ProjectPhp;
