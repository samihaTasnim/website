import Head from 'next/head'
// import Image from 'next/image'
// import me from '../public/portfolio-img.png'
import GlowingButton from '../components/GlowingButton'
import Aboutme from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {

  return (
    <>
      <Head>
        <title>Samiha Tasnim | Full Stack Dev</title>
        <meta name="keywords" content="samiha tasnim website, blog, Samiha Tasnim, samthedev, samiha-tasnim, Full-stack developer, Front-end developer, react developer" />
        <meta name="description" content="Hello, I'm Samiha Tasnim, a Full stack web developer. Visit the website to know about my experiences, projects, tech stack and socials." />
        <meta name="copyright" content="Samiha Tasnim" />
        <meta name="robots" content="index, follow"></meta>
        <link href="https://samiha-tasnim.vercel.app" rel="canonical"></link>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samiha-tasnim.is-a.dev" />
        <meta property="og:title" content="Samiha Tasnim" />
        <meta property="og:description" content="Hello, I'm Samiha Tasnim, a Full stack developer. Visit the website to know about my experiences, projects, tech stack and socials. " />
        <meta property="og:image" content="https://i.ibb.co/sH0DVwQ/favicon.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://samiha-tasnim.is-a.dev" />
        <meta property="twitter:title" content="Samiha Tasnim" />
        <meta property="twitter:description" content="Hello, I'm Samiha Tasnim, a Full stack developer. Visit the website to know about my experiences, projects, tech stack and socials. " />
        <meta property="twitter:image" content="https://i.ibb.co/sH0DVwQ/favicon.png" />
        {/* google search console meta tag */}
        <meta name="google-site-verification" content="iQ3SunMUi3Qfa1kJ2H9N65yolH4TmXDZnt7xY9Q3KKw" />

        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Hero Section */}

      <div className="pt-16 mb-12 md:mb-0 ml-0 md:ml-16 md:pt-24" >
        <main className="md:mt-8 p-8">
          <p className="mb-2 text-2xl lg:text-3xl xxl:text-6xl font-bold">Hello, I'm</p>
          <h1 className="text-2xl lg:text-5xl xxl:text-6xl font-bold">Samiha Tasnim</h1>
          <br />
          <small className="text-xl text-bold font-semibold text-gray-300">Front-end Developer with a little exposure to the backend | Not looking for opportunities</small>
          <br />
          <br />
          <small className="text-lg text-gray-400">I love everything that looks nice to the human eye. Curating websites so that users doesn't want to leave the website at all!
            <br /> Currently, I am focused on getting started with open source contribution, blogging and graduating high school. Reach out if you have a amazing project and need my help!</small>
          {/* building UI parts, fixing bugs and adding extra features at Ripple Community. */}
          <br />
          <br />
          <GlowingButton className="pt-4 xl:pl-3" text='Resume' downloadResume></GlowingButton>
        </main>
        {/* <figure className='max-w-lg'>
          <Image src={me} alt="My svg image" />
        </figure> */}
      </div>
      <section id="about">
        <Aboutme></Aboutme>

      </section>
      <section id="projects">
        <Projects></Projects>
      </section>

      <section id="contact">
        <Contact></Contact>
      </section>

    </>
  )
}
