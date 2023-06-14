import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">
        Over mezelf
      </h1>
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <div>
          <img src="assets/profile.svg" alt="" />
        </div>
        <div className="lg:w-8/12 space-y-4">
          <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Hallo ik ben Ischa Mommaerts student applicatieontwikkeling aan de&nbsp;
            <a href="https://www.thomasmore.be/" target="_blank" className="text-primary font-bold cursor-pointer hover:underline decoration-2">Thomas More</a> hogeschool in Geel. Ik ben geïntereseerd in alles wat met computers te maken heeft, zowel in mijn studies als in mijn vrije tijd.
          </p>
          <ul className="text-lg text-primary font-bold">
            <li>
              <span className="font-bold text-gray-900 dark:text-gray-100">
                Email:&nbsp;
              </span>
              <a href="mailto:mommaertsischa@gmail.com" className="hover:underline decoration-2">mommaertsischa@gmail.com</a>
            </li>
            <li>
              <span className="font-bold text-gray-900 dark:text-gray-100">
                Phone:&nbsp;
              </span>
              <a href="tel:+32468310122" className="hover:underline decoration-2">+32 468 31 01 22</a>
            </li>
          </ul>
          <a className="inline-block cursor-pointer bg-gray-500 hover:bg-primary text-white font-bold py-2 px-4 rounded-3xl transition-colors duration-200 ease" href="assets/cv.pdf" target="_blank">
            Open CV
          </a>
        </div>
      </div>
    </section>
  );
}
