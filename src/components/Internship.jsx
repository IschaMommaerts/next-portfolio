import React from "react";
import OfficiousIcon from "./OfficiousIcon";

function Internship() {
  return (
    <section id="internship" className="scroll-mt-24">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Stage
      </h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-8/12 text-lg font-medium text-gray-900 dark:text-gray-100 space-y-4">
          <div className="space-y-2">
            <p>
              Tussen 28 Februari en 27 mei liep ik samen met nog een andere
              medestudent stage bij <a href="https://www.codious.io/" target="_blank" className="text-primary font-bold cursor-pointer hover:underline decoration-2">Codious</a> een consultancy bedrijf.
            </p>
            <h2 className="font-bold text-3xl">Stagebedrijf</h2>
            <p>
            <a href="https://www.codious.io/" target="_blank" className="text-primary font-bold cursor-pointer hover:underline decoration-2">Codious</a> creëert digitale belevingen op maat. Ze helpen klanten hun
              digitaal verhaal te vertellen en versnellen. Dit doen ze door
              extra mankrach te leveren aan projecten. Ook creëren ze inhouse
              oplossingen.
            </p>
          </div>
          <div className="space-y-2">
            <div>
              <img
                src="assets/officious-white.svg"
                className="hidden dark:block h-10"
              />
              <img src="assets/officious.svg" className="dark:hidden h-10" />
            </div>
            <p>
              Het stageproject waar ik aan werkte heette “Officious HR-Tool van
              de toekomst”. Officious werd ten eerste ontwikkeld voor intern
              gebruik. Codious wil het project later ook op de markt brengen en
              aan hun klanten aanbieden.
            </p>
            <p>
              Vorig jaar werkte andere studenten van Thomas More ook al aan dit
              stageproject. Zij hadden voor een groot deel de backend al
              ontwikkeld. Mijn focus voor dit project lag dus op het ontwikkelen
              van de frontend in Angular.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-3xl">Stagedocumenten</h2>
            <ul className="list-disc list-inside">
              <li>
                <a
                  className="text-primary font-bold cursor-pointer hover:underline decoration-2"
                  href="assets/Plan_van_aanpak.pptx"
                  download
                >
                  Plan van aanpak
                </a>
              </li>
              <li>
                <a className="text-primary font-bold cursor-pointer hover:underline decoration-2" >
                  Realisatie
                </a>
              </li>
              <li>
                <a className="text-primary font-bold cursor-pointer hover:underline decoration-2" href="assets/reflectie.pdf" target="_blank">
                  Reflectie
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src="assets/scrum.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Internship;
