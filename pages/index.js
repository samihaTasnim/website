import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>sam's space</title>
        <meta name="keywords" content="samiha tasnim website, blog, Samiha Tasnim, samthedev, samiha-tasnim, Full-stack developer, Front-end developer, react developer" />
        <meta name="description" content="Hello, I'm Samiha Tasnim, a Full stack web developer. Visit the website to know about my experiences, projects, tech stack and socials." />
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
        {/* google search console meta tag */}
        <meta name="google-site-verification" content="iQ3SunMUi3Qfa1kJ2H9N65yolH4TmXDZnt7xY9Q3KKw" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍩</text></svg>"></link>

      </Head>

      {/* Hero Section */}

        <div className="text-lg text-gray-200">
          <p>I'm a Full stack web developer, sucker for knowledge and a ISFJ-T. I interned at two companies and unfortunately none of them ended well. I also worked full time building UI parts, fixing bugs and adding extra features at Ripple Community, I had to quit because I wanted fo focus on studying. </p>
          <br />
          <p>Currently, I am getting into open source contribution, blogging and studying full time. I still appear occasionaly on discord servers and help people out. I keep a <a href="/resources">collection of resources</a> I found over the time.</p>
          <br />
          <p>During my free time, I enjoy reading and watching movies. I mainly read mangas and novels but sometimes I read other people's writings too. You can see my collections of favourite quotes from movies and books <a href="/quotes">here</a>.</p>
          <br />
        </div>

    </>
  )
}
