import { useState } from "react";
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
import Image from 'next/image'
import GlowingButton from "./GlowingButton";
import OutlinedButton from './OutlinedButton';

const Aboutme = () => {
  const [showLanguage, setShowLanguage] = useState(false)
  const [showFramework, setShowFramework] = useState(true)
  const [showTools, setShowTools] = useState(false)

  const showLanguageDiv = () => {
    setShowLanguage(true);
    setShowTools(false);
    setShowFramework(false);
  }

  const showFrameworkDiv = () => {
    setShowFramework(true);
    setShowLanguage(false);
    setShowTools(false);
  }

  const showToolsDiv = () => {
    setShowTools(true);
    setShowFramework(false);
    setShowLanguage(false);
  }



  const languageArray = [
    {
      path: javascript,
      name: "JavaScript"
    },
    {
      path: typescript,
      name: "TypeScript"
    },
    {
      path: html,
      name: "HTML"
    },
    {
      path: css,
      name: "CSS"
    }
  ]
  const FrameworksArray = [
    {
      path: react,
      name: "React"
    },
    {
      path: nextjs,
      name: "Next.js"
    },
    {
      path: redux,
      name: "Redux"
    },
    {
      path: bootstrap,
      name: "Bootstrap"
    },
    {
      path: tailwind,
      name: "TailwindCSS"
    },
    {
      path: node,
      name: "Nodejs"
    },
    {
      path: mongodb,
      name: "MongoDB"
    }
  ]
  const toolsArray = [
    {
      path: vsCode,
      name: "VS code"
    },
    {
      path: firebase,
      name: "Firebase"
    },
    {
      path: git,
      name: "Git"
    },
    {
      path: chrome,
      name: "Chrome"
    },
    {
      path: npm,
      name: "NPM"
    }
  ]

  return (
    <div className="mx-8 md:mx-20 grid grid-cols-1 mt-2 md:mt-32 md:grid-cols-2 gap-16">
      <section>
        <p className="text-2xl font-bold pb-6">About me</p>
        <p>
          I liked the idea of coding from when I was 14. How people would sit in front of computers and write some god forsaked language and they resulted in actually good looking interfaces really amazed me. Started out with python but gradually shifted to web dev using HTML, CSS and JavaScript.
        </p>
        <br />
        <p className="mb-6">
          I'm in my senior year in high school and hoping to pursue a Computer Science degree. Now, I still look out for opportunities to become a better programmer by getting to know JavaScript better and exploring new modern technologies.
        </p>
        <p className="my-6 text-gray-400">
          P.S. Follow me on Twitter to get helpful tips to make your web developement journey easier and send me a request on discord to get rid of stubborn bugs. I'm always happy to help!
        </p>
        <GlowingButton text="Visit my github" link="https://github.com/samihaTasnim"></GlowingButton>
      </section>
      <section>
        <h3 className="text-2xl font-bold pt-16 pb-6">What do I bring to the table</h3>

        <OutlinedButton text="Languages" click={showLanguageDiv} isActive={showLanguage}> </OutlinedButton>
        <OutlinedButton text="Frameworks and Libraries" click={showFrameworkDiv} isActive={showFramework}></OutlinedButton>
        <span className="mt-8 md:mt-0"><OutlinedButton text="Tools" click={showToolsDiv} isActive={showTools}></OutlinedButton> </span>

        <div className="flex flex-row flex-wrap justify-center place-content-around gap-4 mt-3">
          {
            showLanguage &&
            languageArray.map((x, i) => (
              <figure className="text-center px-2" key={i}>
                <Image src={x.path} width="60" height="100" alt={x.name}></Image>
                <figcaption className="text-gray-300 text-center">{x.name}</figcaption>
              </figure>
            ))
          }
          {
            showFramework &&
            FrameworksArray.map((x, i) => (
              <figure className="px-2" key={i}>
                <Image src={x.path} width="60" height="100" alt={x.name}></Image>
                <figcaption className="text-gray-300">{x.name}</figcaption>
              </figure>
            ))
          }
          {
            showTools &&
            toolsArray.map((x, i) => (
              <figure className="text-center px-2" key={i}>
                <Image src={x.path} width="60" height="100" alt={x.name}></Image>
                <figcaption className="text-gray-300">{x.name}</figcaption>
              </figure>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Aboutme;