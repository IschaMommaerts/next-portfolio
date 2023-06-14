import About from "@/components/About";
import Home from "@/components/Home";
import Internship from "@/components/Internship";
import Projects from "@/components/projects";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Ischa Mommaerts Bachelor Portfolio</title>
        <meta
          name="description"
          content="Bachelor portfolio of Ischa Mommaerts, student at Thomas More Geel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-24">
        <Home />
        <About />
        <Internship />
        <Projects />
      </div>
    </>
  );
}
