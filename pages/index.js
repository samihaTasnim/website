import Head from 'next/head'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import Image from 'next/image'
import me from '../public/portfolio-img.png'
import javascript from '../public/icons8-javascript.svg';
import typescript from '../public/icons8-typescript.svg';
import react from '../public/icons8-react.svg';
import html from '../public/html.svg';
import node from '../public/nodejs.svg';
import mongodb from '../public/mongodb.svg';
import css from '../public/css.svg';
import chrome from '../public/chrome.svg'
import vsCode from '../public/vs-code.svg'
import redux from '../public/redux.svg'
import tailwind from '../public/tailwindcss.svg'
import bootstrap from '../public/bootstrap.svg'
import firebase from '../public/firebase.svg'
import npm from '../public/npm.svg'
import git from '../public/icons8-git.svg'
import nextjs from '../public/next-js.svg'
import GlowingButton from '../components/GlowingButton';


export default function Home() {

  const skillsArray = [bootstrap, node, mongodb, html, css, firebase, vsCode, chrome, git, npm]
  const languageArray = [javascript, typescript, html, css]
  const FrameworksArray = [react, nextjs, redux, bootstrap, tailwind, node, mongodb]
  const toolsArray = [vsCode, firebase, git, chrome, npm]

  return (
    <>
      <Head>
        <title>Samiha Tasnim | Full Stack Dev</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Hero Section */}

      <div className="pt-8 md:pt-16 lg:pt-32 grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="mt-2 md:mt-8 col-span-2 p-8">
          <h1 className="mb-4 text-3xl lg:text-6xl font-bold">Hello, I'm</h1>
          <Typed
            strings={['Samiha Tasnim aka Sam', 'A Full Stack Developer', 'A Front-end Developer', 'In love with TypeScript']}
            typeSpeed={40} loop className="text-2xl lg:text-6xl font-bold"
          />
          <br />
          <br />
          <small className="text-lg text-gray-500">I love everything that looks nice to the human eye. Curating websites so that users doesn't want to leave at all! Currently, I’m focused on building UI parts, fixing and adding extra features at Flatnkeys.</small>
        </div>
        <div className="flex justify-start">
          <Image src={me} alt="My svg image" width={400} height={430} />
        </div>
      </div>

      {/* Skills and technologies */}

      <div className="p-16 lg:pt-32">
        <h4 className="text-center text-3xl font-medium">What do I bring to the table?</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div>
            <p className="text-2xl text-center">Languages I use -</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {
              languageArray.map((x, i) => (
                <Image src={x}></Image>
              ))
            }
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div>
            <p className="text-2xl text-center">Frameworks and Libraries -</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {
              FrameworksArray.map((x, i) => (
                <Image src={x}></Image>
              ))
            }
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div>
            <p className="text-2xl text-center">Other tools -</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {
              toolsArray.map((x, i) => (
                <Image src={x}></Image>
              ))
            }
          </div>
        </div>
        <div className="mt-12 text-center">
          <GlowingButton text="Visit my github" link="https://github.com/samihaTasnim"></GlowingButton>
        </div>
      </div>

      {/* Projects */}

      <section className="p-16 md:pt-32">
        <h4 className="text-center text-3xl font-medium">Some Things I’ve Built</h4>

      </section>

    </>
  )
}
