import 'tailwindcss/tailwind.css'
import '../app.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="bg-black text-white p-2 sm:p-12 bg-opacity-90">
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </main>
  )
}