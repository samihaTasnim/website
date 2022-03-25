import React, { useState } from 'react';
import Image from 'next/image'
import githubIco from '../public/icons8-github.svg'
import linkedinIco from '../public/icons8-linkedin.svg'
import discordIco from '../public/icons8-discord.svg'
import twitterLogo from '../public/twitter.svg'
import Alert from './Alert'

const Contact = () => {

  const [showAlert, setShowAlert] = useState(false)

  const copydiscordUsername = () => {
    navigator.clipboard.writeText("sam.#7750")
    setShowAlert(true)
    setTimeout(function () {
      setShowAlert(false)
    }, 4000);
  }

  return (
    <>
      <div className="text-white px-4 md:px-20 py-8 md:py-12">
        <div
          className="max-w-screen-lg mt-10 px-8 md:px-20 py-8 md:py-16 mx-auto bg-gray-500 bg-opacity-30 text-white rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Get in touch</h2>
              <div className="text-gray-300 mt-8">
                <p className='mb-0 md:mb-6'>
                  As of now, <span className="font-bold">I'm not looking for new job opportunity </span>, but my inbox is always open if you want to just say hi. Hit me up if you have questions, collaboration offers or just want to get to know me. I'll try to get back to you as soon as I can.
                </p>
                <div className="flex align-middle my-2 md:hidden">
                  <span> Or, find me on &nbsp;</span>
                  <a href="https://github.com/samihaTasnim" target="_blank" className="mr-2 "><Image src={githubIco} alt="Visit my github"></Image></a>
                  <a href="https://www.linkedin.com/in/samiha-tasnim/" className="mr-2" target="_blank"><Image src={linkedinIco} alt="Visit my LinkedIn"></Image> </a>
                  <a href="https://twitter.com/SamihaTasnimm" className="mr-2" target="_blank"><Image src={twitterLogo} alt="Visit my Twitter"></Image> </a>
                  <span className="cursor-pointer" onClick={copydiscordUsername}><Image src={discordIco} alt="Copy my discord user name"></Image></span>
                </div>
                 Send me an email at <a href="mailto:samihatasnim@protonmail.com" className="underline">samihatasnim@protonmail.com</a>.
              </div>
            </div>
            <div className="mt-8 text-center">
            </div>
          </div>

        </div>
      </div>
      {showAlert && <Alert message="You copied my discord user name! "></Alert>}
    </>
  );
};

export default Contact;