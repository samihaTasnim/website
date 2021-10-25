import Head from 'next/head'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import Image from 'next/image'
import me from '../public/portfolio-img.png'
import Aboutme from '../components/Aboutme';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import githubLogo from '../public/icons8-github.svg'
import linkedinLogo from '../public/icons8-linkedin.svg'
import discordLogo from '../public/icons8-discord.svg'
import { useState } from 'react';
import Alert from '../components/Alert';

export default function Home() {

  const [showAlert, setShowAlert] = useState(false)
  
  const copydiscordUsername = () => {
    navigator.clipboard.writeText("samm#6276")
    setShowAlert(true)
    setTimeout(function(){
      setShowAlert(false)
   }, 3000);
  }

  return (
    <>
      <Head>
        <title>Samiha Tasnim | Full Stack Dev</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Hero Section */}

      <div className="pt-4 md:pt-12 lg:pt-24 grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="mt-2 md:mt-8 col-span-2 p-8">
          <h1 className="mb-4 text-3xl lg:text-6xl font-bold">Hello, I'm</h1>
          <Typed
            strings={['Samiha Tasnim aka Sam', 'A Full Stack Developer']}
            typeSpeed={40} className="text-2xl lg:text-6xl font-bold"
          />
          <br />
          <br />
          <small className="text-lg text-gray-500">I love everything that looks nice to the human eye. Curating websites so that users doesn't want to leave the website at all! Currently, I’m focused on building UI parts, fixing bugs and adding extra features at Flatnkeys.</small>
          <div className="mt-4">
          <a href="https://github.com/samihaTasnim" target="_blank" className="mr-2"><Image src={githubLogo}></Image></a>
          <a href="https://www.linkedin.com/in/samiha-tasnim/" className="mr-2" target="_blank"><Image src={linkedinLogo}></Image> </a>
          <span className="cursor-pointer" onClick={copydiscordUsername }><Image src={discordLogo}></Image></span>
          </div>
        </div>
        <div className="flex justify-start -mt-12 md:mt-0">
          <Image src={me} alt="My svg image" />
        </div>
      </div>

      {/* About me section */}
      <Aboutme></Aboutme>

      {/* Projects */}

      <section className="m-16 md:mt-32" id="projects">
        <h3 className="text-2xl font-bold">Some Things I’ve Built </h3>
        <Projects></Projects>
      </section>

      {/* contact me section */}

    <section id="contact-me">
      <Contact></Contact>
    </section>

    { showAlert && <Alert message="You copied my discord user name!"></Alert>}
    </>
  )
}
