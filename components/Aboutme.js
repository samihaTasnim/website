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
import OutlinedButton from '../components/OutlinedButton';

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



  const languageArray = [javascript, typescript, html, css]
  const FrameworksArray = [react, nextjs, redux, bootstrap, tailwind, node, mongodb]
  const toolsArray = [vsCode, firebase, git, chrome, npm]

  return (
    <div className="mx-12 mt-14 grid grid-cols-1 md:grid-cols-2 gap-16" id="about-me">
      <section>
        <h3 className="text-2xl font-bold pt-16 pb-6">A little about me ·.✶</h3>
        <p>
          I liked the idea of coding from when I was 14. How people would sit in front of computers and write some god forsaked language and they resulted in actually good looking interfaces really amazed me. Started out with python but gradually shifted to web dev using HTML, CSS and JavaScript.
        </p>
        <br />
        <p className="mb-6">
          I am working as a React developer in Ripple Community from October 2021. I'm in my senior year in high school and hoping to pursue a software engireering degree. Now, I still look out for opprtunities to become a better programmer by getting to know JavaScript better and exploring new modern technologies.
        </p>
        <GlowingButton text="Visit my github" link="https://github.com/samihaTasnim"></GlowingButton>
      </section>
      <section>
      <h3 className="text-2xl font-bold pt-16 pb-6">What do I bring to the table</h3>

      <OutlinedButton text="Languages" click={showLanguageDiv} isActive={showLanguage}> </OutlinedButton> 
      <OutlinedButton text="Frameworks and Libraries" click={showFrameworkDiv} isActive={showFramework}></OutlinedButton> 
      <span className="mt-8 md:mt-0"><OutlinedButton text="Tools" click={showToolsDiv} isActive={showTools}></OutlinedButton> </span>

          <div className="flex flex-row flex-wrap justify-center content-evenly gap-4 mt-3">
           {
             showLanguage && 
              languageArray.map((x, i) => (
                <Image src={x} key={i} width="60" height="100"></Image>
              ))
            }
                       {
             showFramework && 
              FrameworksArray.map((x, i) => (
                <Image src={x} key={i} width="60" height="100"></Image>
              ))
            }
                       {
             showTools && 
              toolsArray.map((x, i) => (
                <Image src={x} key={i} width="60" height="100"></Image>
              ))
            }
          </div>
      </section>
    </div>
  );
};

export default Aboutme;