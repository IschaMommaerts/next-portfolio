import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Internship from '@/components/Internship'
import Projects from '@/components/projects'
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Ischa Mommaerts Bachelor Portfolio</title>
        <meta name="description" content="Bachelor portfolio of Ischa Mommaerts, student at Thomas More Geel." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <div  className='h-screen bg-red-500'></div>
      <div className="h-screen bg-blue-500"></div>
      <About />
      <Internship />
      <Projects />
      <Footer />
    </div>
  )
}
