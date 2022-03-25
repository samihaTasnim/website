import React, { useState } from 'react';
import projectImg1 from '../public/project-img1.png'
import projectImg2 from '../public/project-img2.png'
import projectImg3 from '../public/project-img3.png'
import projectImg4 from '../public/project-img4.png'
import projectImg5 from '../public/project-img5.png'
import Image from 'next/image'
import gitIcon from '../public/icons8-github.svg';
import linkIcon from '../public/external-link.svg';
import OutlinedButton from './OutlinedButton';
import Fade from 'react-reveal/Fade';

const Projects = () => {

  const [showExtraProjects, setShowExtraProjects] = useState(false)

  const toggleMoreProjects = () => {
    let prevValue = showExtraProjects
    setShowExtraProjects(!prevValue)
  }

  const projectsArray1 = [
    {
      id: 1,
      name: 'PhotoScape',
      alt: 'PhotoScape webapp image preview',
      description: 'Developed in 3 days with a strong UI where users choose a package and book a photographer with just 1 click, write reviews and show bookings history, with enhanced UX. Admins can add, update, maintain, track and delete services to have more control of the website that reduces manual website management.',
      img: projectImg1,
      techStack: 'React, Bootstrap, Firebase(auth), Node.js and MongoDB',
      gitLink: 'https://github.com/samihaTasnim/photoScape',
      liveLink: 'https://photoscape-dd4b8.web.app/'
    },
    {
      id: 2,
      name: 'Ema-john',
      alt: 'Ema-john webapp image preview',
      description: 'A simplistic amazon clone with art manipulation and item descriptions on the homepage ensuring product value and client satisfaction. Stripe test payment integration which ensures a full e-commerce feature. Data updates with 80 items from database to get new and top products to the user.',
      img: projectImg2,
      techStack: 'React, Bootstrap, Firebase(auth), Node.js and MongoDB',
      gitLink: 'https://github.com/samihaTasnim/ema-john',
      liveLink: 'https://ema-john.firebaseapp.com/'
    },
    {
      id: 3,
      name: 'Penguin Fashion',
      alt: 'Penguin Fashion image preview',
      description: 'A simple landing page (E-commerce) website which is mobile responsive. Attractive UI and pixel perfect design.',
      img: projectImg3,
      techStack: 'HTML, CSS, Javascript and Bootstrap',
      gitLink: 'https://github.com/samihaTasnim/penguin-fashion',
      liveLink: 'https://samihatasnim.github.io/penguin-fashion/'
    }
  ]

  const projectsArray2 = [
    {
      id: 4,
      name: 'Travel Buddy',
      alt: 'Travel Buddy image preview',
      description: 'A ride sharing website where user can easily sign up and book a ride.Contains dummy map selection and clean user interface',
      img: projectImg4,
      techStack: 'React, Bootstrap, Firebase auth and Google maps',
      gitLink: 'https://github.com/samihaTasnim/travel-buddy',
      liveLink: 'https://travel-buddy-508fb.web.app/'
    },
    {
      id: 5,
      name: 'Pin matcher',
      alt: 'Pin mathcer image preview',
      description: 'A website where you can generate a pin and validate that pin to unlock a secret door.',
      img: projectImg5,
      techStack: 'HTML, CSS and JavaScript',
      gitLink: 'https://github.com/samihaTasnim/pin-matcher',
      liveLink: 'https://samihatasnim.github.io/pin-matcher/'
    }
  ]
  return (
    <section className='mx-8 md:mx-20 mt-28'>
      <h3 className="text-2xl font-bold">Some Things I’ve Built </h3>
      {
        projectsArray1.map(x => (
          <Fade bottom key={x.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:items-center">
              <Image className="object-cover rounded-lg h-full opacity-50 hover:opacity-100 " src={x.img} alt={x.alt}></Image>
              <div className=" md:px-0">
                <p className="mb-4 text-lg text-center md:text-right leading-none font-bold">
                  {x.name}
                </p>
                <div className="p-4 md:p-8 mt-0 md:-ml-14 shadow-xl z-10 bg-gray-500 bg-opacity-30 rounded-md">
                  <p className="mb-2 text-center md:text-right text-sm text-grey-600">
                    {x.description}
                  </p>
                  <p className="text-center md:text-right text-sm text-gray-400">
                    {x.techStack}
                  </p>
                </div>
                <div className="mt-4 text-center md:text-right">
                  <a href={x.gitLink} target="_blank"><Image src={gitIcon} alt="Visit this reopsitory in github"></Image> </a>
                  <a href={x.liveLink} target="_blank"><Image src={linkIcon} alt="Visit it live"></Image></a>
                </div>
              </div>
            </div>
          </Fade>
        ))
      }
      {showExtraProjects &&
        projectsArray2.map(x => (
          <Fade bottom key={x.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:items-center">
              <Image className="object-cover h-full rounded-lg opacity-50 hover:opacity-100 " src={x.img} alt={x.alt}></Image>
              <div className=" md:px-0">
                <p className="mb-4 text-lg text-center md:text-right leading-none font-bold">
                  {x.name}
                </p>
                <div className="p-4 md:p-8 mt-0 md:-ml-14 shadow-xl z-10 bg-gray-500 bg-opacity-30 rounded-lg">
                  <p className="mb-2 text-center md:text-right text-sm text-grey-600">
                    {x.description}
                  </p>
                  <p className="text-center md:text-right text-sm text-gray-400">
                    {x.techStack}
                  </p>
                </div>
                <div className="mt-4 text-center md:text-right">
                  <a href={x.gitLink} target="_blank"><Image src={gitIcon} alt="Visit this reopsitory in github"></Image> </a>
                  <a href={x.liveLink} target="_blank"><Image src={linkIcon} alt="Visit it live"></Image></a>
                </div>
              </div>
            </div>
          </Fade>
        ))
      }
      <div className="mt-8 text-center">
        <OutlinedButton text={showExtraProjects ? 'Show less' : 'Load more'} click={toggleMoreProjects}></OutlinedButton>
      </div>
    </section>
  );
};

export default Projects;