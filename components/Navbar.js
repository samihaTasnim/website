import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import logo from '../public/LogoMakr-2XsKla.png'
import Link from "next/link";
import styles from './navbar.module.css'
import { debounce } from './utils/debounce';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
   // new:
   const [prevScrollPos, setPrevScrollPos] = useState(0);
   // new:
   const [visible, setVisible] = useState(true);
   const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);


  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav className={`grid grid-cols-3 gap-4 p-4 md:p-4 bg-[#191919] z-20 sticky animate ${visible ? 'top-0' : 'top-0 md:-top-20'}`}>
      <div className="flex items-center flex-shrink-0 text-white mr-6 col-span-2 lg:col-span-1">
        <Image src={logo} alt="logo of my initial" width={40} height={40} /> &nbsp; &nbsp; &nbsp;
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight cursor-pointer">Samiha Tasnim</span>
        </Link>
      </div>

      <button
        className="flex flex-col h-12 w-12 rounded place-self-end items-center group lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
            }`}
        />
        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
        <div
          className={`${genericHamburgerLine} ${isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
            }`}
        />
      </button>

      <div className={`lg:flex ${isOpen ? "block" : "hidden"} col-span-2 lg:place-self-end`}>
        <div className="text-base flex-grow">
          <a href="#about" className='block mt-4 lg:inline-block lg:mt-0 mr-4 border-b-8 border-transparent cursor-pointer'>
            <span className={`${styles.hoverUnderlineAnimation} px-1 xl:px-3`}> About me</span>
          </a>
          <a href="#projects" className='block mt-4 lg:inline-block lg:mt-0 mr-4 border-b-8 border-transparent cursor-pointer'>
            <span className={`${styles.hoverUnderlineAnimation} px-1 xl:px-3`}>Projects</span>
          </a>
          <a href="#contact" className='block mt-4 lg:inline-block lg:mt-0 mr-4 border-b-8 border-transparent cursor-pointer'>
            <span className={`${styles.hoverUnderlineAnimation} px-1 xl:px-3` }>Contact me</span>
          </a>
          <a href="https://samihatasnim.hashnode.dev" className='block mt-4 lg:inline-block lg:mt-0 mr-4 border-b-8 border-transparent cursor-pointer'>
            <span className={`${styles.hoverUnderlineAnimation} px-1 xl:px-3`}>Blog</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;