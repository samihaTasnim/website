import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image'
import githubIco from '../public/icons8-github.svg'
import linkedinIco from '../public/icons8-linkedin.svg'
import discordIco from '../public/icons8-discord.svg'
import Alert from '../components/Alert'

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [showSentConfirmation, setShowSentConfirmation] = useState(false)

  console.log(process.env.USER_ID);
  console.log(process.env.TEMPLATE_ID);
  
  const copydiscordUsername = () => {
    navigator.clipboard.writeText("samm#6276")
    setShowAlert(true)
    setTimeout(function(){
      setShowAlert(false)
   }, 3000);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
      .then((result) => {
        setShowSentConfirmation(true)
      }, (error) => {
        console.log('Error: ', error.text, 'Error sending message, try again later or please contact me either by phone or email');
      });
  }

  return (
    <>
    <div className="text-white px-8 py-12">
      <div
        className="max-w-screen-xl mt-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-500 bg-opacity-30 text-white rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div className="text-gray-300 mt-8">
              <p>
                As of now, <span className="font-bold">I'm looking for new job opportunities with React/Node.js tech stack for part-time/freelance opportunities</span>, but my inbox is always open if you want to just say hi. Hit me up if you have some question, want a collaboration or just want to get to know me. I'll try to get back to you as soon as I can.
              </p>
              <div className="flex align-middle mt-6">
                <span> Or, find me on &nbsp;</span>
                <a href="https://github.com/samihaTasnim" target="_blank" className="mr-2 "><Image src={githubIco}></Image></a>
                <a href="https://www.linkedin.com/in/samiha-tasnim/" className="mr-2" target="_blank"><Image src={linkedinIco}></Image> </a>
                <span className="cursor-pointer" onClick={copydiscordUsername}><Image src={discordIco}></Image></span>
              </div>
              Hate forms? Send me an <a href="mailto:samxtasnim@gmail.com" className="underline">email</a> instead.
            </div>
          </div>
          <div className="mt-8 text-center">
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <div>
            <span className="uppercase text-sm text-white font-bold">Your Name</span>
            <input name="sender_name" className="w-full bg-gray-500 bg-opacity-30 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-white font-bold">Email</span> <span className="text-sm text-gray-200">(if you're expecting a reply from me)</span>
            <input type="email" name="email" className="w-full bg-gray-500 bg-opacity-30 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-white font-bold">Message</span>
            <textarea name="message"
              className="w-full h-32 bg-gray-500 bg-opacity-30 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-white text-black p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    { showAlert && <Alert message="Copied my discord user name !"></Alert>}
    { showSentConfirmation && <Alert message="Successfully sent message! I will be in touch with you soon"></Alert>}
    </>
  );
};

export default Contact;