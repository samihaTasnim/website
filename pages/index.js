import Head from 'next/head'
// import Image from 'next/image'
// import me from '../public/portfolio-img.png'
import GlowingButton from '../components/GlowingButton'
import Aboutme from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {

  return (
    <>
      <Head>
        <title>Samiha Tasnim | Full Stack Dev</title>
        <meta name="keywords" content="website, blog, Samiha Tasnim, Samthedev, samiha-tasnim, Full-stack developer, Front-end developer, react developer" />
        <meta name="description" content="Hello, I'm Samiha Tasnim, a Full stack developer. Visit the website to know about my experiences, projects, tech stack and socials. " />
        <meta name="copyright" content="Samiha Tasnim" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samiha-tasnim.vercel.app/" />
        <meta property="og:title" content="Samiha Tasnim" />
        <meta property="og:description" content="Hello, I'm Samiha Tasnim, a Full stack developer. Visit the website to know about my experiences, projects, tech stack and socials. " />
        <meta property="og:image" content="https://i.ibb.co/sH0DVwQ/favicon.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://samiha-tasnim.vercel.app/" />
        <meta property="twitter:title" content="Samiha Tasnim" />
        <meta property="twitter:description" content="Hello, I'm Samiha Tasnim, a Full stack developer. Visit the website to know about my experiences, projects, tech stack and socials. " />
        <meta property="twitter:image" content="https://i.ibb.co/sH0DVwQ/favicon.png" />

        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Hero Section */}

      <div className="pt-4 ml-0 md:ml-16 md:pt-8 h-full md:h-screen xxl:h-80" >
        <main className="md:mt-8 p-8">
          <h1 className="mb-2 text-2xl lg:text-4xl xxl:text-6xl font-bold">Hello, I'm</h1>
          <h1 className="text-xl lg:text-4xl xxl:text-6xl font-bold">Samiha Tasnim</h1>
          <br />
          <small className="text-base text-gray-300">Front-end Developer with a little exposure to the backend | Not looking for opportunities</small>
          <br />
          <br />
          <small className="text-lg text-gray-500">I love everything that looks nice to the human eye. Curating websites so that users doesn't want to leave the website at all! Currently, I am focused on getting started with open source contribution, blogging and graduating high school. Reach out if you have a amazing project and need my help!</small>
          {/* building UI parts, fixing bugs and adding extra features at Ripple Community. */}
          <br />
          <br />
          <GlowingButton className="pt-2 xl:pl-3" text='Resume' downloadResume></GlowingButton>
        </main>
        {/* <figure className='max-w-lg'>
          <Image src={me} alt="My svg image" />
        </figure> */}
      </div>

      <Aboutme></Aboutme>
      <section id="projects">
        <Projects></Projects>
      </section>

      <section id="contact">
        <Contact></Contact>
      </section>

    </>
  )
}
