import 'tailwindcss/tailwind.css'
import '../app.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Footer from '../components/Footer';
import githubLogo from '../public/icons8-github.svg'
import twitterLogo from '../public/twitter.svg'
import linkedinLogo from '../public/icons8-linkedin.svg'
import discordLogo from '../public/icons8-discord.svg'
import emailLogo from '../public/email.svg'
import Image from 'next/image'
import Alert from '../components/Alert'

export default function MyApp({ Component, pageProps }) {

  const [showAlert, setShowAlert] = useState(false)

  const copydiscordUsername = () => {
    navigator.clipboard.writeText("sam.#7750")
    setShowAlert(true)
    setTimeout(function () {
      setShowAlert(false)
    }, 3000);
  }

  return (
    <main className="bg-black text-white px-2 md:px-12 pt-4 bg-opacity-90">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <div className='fixed bottom-0 hidden md:block'>
        <ul className="list-none -ml-3 py-4">
          <li className='pb-2'>
            <a href="https://github.com/samihaTasnim" target="_blank" className="mr-2"><Image src={githubLogo}></Image></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/samiha-tasnim/" className="mr-2" target="_blank"><Image src={linkedinLogo}></Image> </a>
          </li>
          <li className='pt-2'>
            <a href="https://twitter.com/SamihaTasnimm" className="mr-2" target="_blank"><Image src={twitterLogo}></Image> </a>
          </li>
          <li>
            <a href="mailto:samxtasnim@gmail.com" className="mr-2" target="_blank"><Image src={emailLogo}></Image> </a>
          </li>
          <li>
            <span onClick={copydiscordUsername} className="mr-2 hover:cursor-pointer"><Image src={discordLogo}></Image></span>
          </li>
        </ul>
        <div className='border-l-white border-l-2 h-20'></div>
      </div>
      {showAlert && <Alert message="You copied my discord user name!"></Alert>}
    </main>
  )
}