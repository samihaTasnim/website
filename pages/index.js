import Head from 'next/head'
import Image from 'next/image'
import me from '../public/portfolio-img.png'
import { useState } from 'react';
import Alert from '../components/Alert';
import GlowingButton from '../components/GlowingButton'

export default function Home() {

  const [showAlert, setShowAlert] = useState(false)

  return (
    <>
      <Head>
        <title>Samiha Tasnim | Full Stack Dev</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Hero Section */}

      <div className="py-4 ml-0 md:ml-16 md:pt-8 grid grid-cols-1 md:grid-cols-3 gap-0" >
        <main className="md:mt-8 col-span-2 p-8">
          <h1 className="mb-4 text-2xl lg:text-6xl font-bold">Hello, I'm</h1>
          <h1 className="text-xl lg:text-6xl font-bold">Samiha Tasnim</h1>
          <br />
          <small className="text-lg text-gray-300">Front-end Developer with a little exposure to the backend | open for opportunities</small>
          <br />
          <br />
          <small className="text-lg text-gray-500">I love everything that looks nice to the human eye. Curating websites so that users doesn't want to leave the website at all! Currently, I’m focused on building UI parts, fixing bugs and adding extra features at Ripple Community.</small>
          <br />
          <br />
          <GlowingButton className="px-2 xl:pl-3" text='Resume' downloadResume></GlowingButton>
        </main>
        <figure>
          <Image src={me} alt="My svg image" />
        </figure>
      </div>
    { showAlert && <Alert message="You copied my discord user name!"></Alert>}
    </>
  )
}
