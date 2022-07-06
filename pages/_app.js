import 'tailwindcss/tailwind.css'
import '../app.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function MyApp({ Component, pageProps }) {


  return (
    <main className="bg-black text-white px-6 md:px-[20%] pt-4 bg-opacity-90 min-h-screen	">
      {/* <div className='flex'> */}
        <h1 className="text-2xl lg:text-4xl flex-1 font-bold pt-6 md:pt-10">Sam's space</h1>
        {/* <span className='place-self-end text-sm text-gray-300 cur'>light theme</span> */}
      {/* </div> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}