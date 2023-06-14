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
  const images = [
    "/assets/projects/country-quiz/america.jpg",
    "/assets/projects/country-quiz/americawrong.jpg",
    "/assets/projects/country-quiz/asia.jpg",
    "/assets/projects/country-quiz/asiacorrect.jpg",
    "/assets/projects/country-quiz/countryquiz.jpg",
    "/assets/projects/country-quiz/europe.jpg",
    "/assets/projects/country-quiz/loading.jpg",
  ];

  return (
    <div className="space-y-6 pt-12">
      <div className="space-y-6">
        <h1 className="text-7xl font-bold text-gray-900 dark:text-gray-100">
          Country quiz app
        </h1>
        <div className="flex gap-2 flex-wrap">
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-gray-100">
            Flutter
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Wikitude
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Individueel
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            AR
          </span>
          <span class="rounded-md bg-primary px-4 py-2 font-bold leading-none text-white">
            Dart
          </span>
        </div>
      </div>
      <div className="lg:flex space-y-6 lg:space-x-6 lg:space-y-0">
        <div className="space-y-4">
          <ul className="text-lg text-gray-900 dark:text-gray-100 font-bold">
            <li>Datum:&nbsp;2 December 2022 - 15 December 2022</li>
            <li>
              Vak:&nbsp; 3ITF - Augmented Reality and Mobile App Development
              (2022)
            </li>
            <li>
              Video:{" "}
              <a
                href="https://youtu.be/_5Vzgxj2tjM"
                target="_blank"
                className="text-primary font-bold cursor-pointer hover:underline decoration-2"
              >
                Youtube
              </a>
            </li>
          </ul>
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100 space-y-4">
            <p>
              Voor het vak Augmented Reality and Mobile App development maakte ik een quiz app waar je aan de hand van een aantal weetjes een land moet raden. De vlag van een land kan ook worden ingescand, om zo alle weetjes te zien te krijgen. Die weetjes kunnen dan ook beheert worden.
            </p>
            <p>
              Het ontwikkelen van deze app met flutter was eens een eerste stap in het mobiele app development buiten frameworks gebaseerd op javascript. Ook was het cool om de mogelijkheden van AR te ontdekken.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 h-96">
          <SliderComponent images={images} />
        </div>
      </div>  
    </div>
  );
}

export default ProjectPhp;
