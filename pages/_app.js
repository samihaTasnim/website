import 'tailwindcss/tailwind.css'
import '../app.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import githubLogo from '../public/icons8-github.svg'
import twitterLogo from '../public/twitter.svg'
import linkedinLogo from '../public/icons8-linkedin.svg'
import discordLogo from '../public/icons8-discord.svg'
import emailLogo from '../public/email.svg'
import Image from 'next/image'

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="bg-black text-white p-2 sm:p-12 bg-opacity-90 min-h-screen">
      <div className='fixed bottom-0 hidden md:block'>
        <ul className="list-none -ml-3 py-4">
          <li className='py-2'>
            <a href="https://github.com/samihaTasnim" target="_blank" className="mr-2"><Image src={githubLogo}></Image></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/samiha-tasnim/" className="mr-2" target="_blank"><Image src={linkedinLogo}></Image> </a>
          </li>
          <li className='py-2'>
            <a href="https://twitter.com/SamihaTasnimm" className="mr-2" target="_blank"><Image src={twitterLogo}></Image> </a>
          </li>
          <li>
            <a href="mailto:samxtasnim@gmail.com" className="mr-2" target="_blank"><Image src={emailLogo}></Image> </a>
          </li>
          <li className='pt-2'>
            <a href="https://discords.com/bio/p/samthedev" className="mr-2" target="_blank"><Image src={discordLogo}></Image></a>
          </li>
        </ul>
        <div className='border-l-white border-l-4 h-40'></div>
      </div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}