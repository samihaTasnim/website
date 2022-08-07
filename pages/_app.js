import 'tailwindcss/tailwind.css'
import '../app.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head'


export default function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>sam's space</title>
        <meta name="keywords" content="samiha tasnim website, blog, Samiha Tasnim, samthedev, samiha-tasnim, Full-stack developer, Front-end developer, react developer, samiha tasnim, sam's blog, sam's space" />
        <meta name="description" content="Hello, I'm Samiha Tasnim, a Full stack web developer. Visit the website to know about my experiences, projects, or to read my blog." />
        <meta name="copyright" content="Samiha Tasnim" />
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samihatasnim.is-a.dev" />
        <meta property="og:title" content="Samiha Tasnim" />
        <meta property="og:description" content="Hello, I'm Samiha Tasnim, a Full stack developer. Visit the website to know about my experiences, projects, tech stack and socials. " />
        {/* <meta property="og:image" content="https://i.ibb.co/sH0DVwQ/favicon.png" /> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://samihatasnim.is-a.dev" />
        <meta property="twitter:title" content="Samiha Tasnim" />
        <meta property="twitter:description" content="Hello, I'm Samiha Tasnim, a Full stack developer. Visit the website to know about my experiences, projects, tech stack and socials. " />
        {/* <meta property="twitter:image" content="https://i.ibb.co/sH0DVwQ/favicon.png" /> */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍩</text></svg>"></link>
      </Head>
      <main className="bg-black px-6 md:px-[20%] bg-opacity-90 min-h-screen	brake-all">
        <br />
        <h1 className=" text-white font-extrabold">sam's space</h1>
        {/* <span className='place-self-end text-sm text-gray-300 cur'>light theme</span> */}
        {/* </div> */}
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}