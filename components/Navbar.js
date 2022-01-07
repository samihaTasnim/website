import React, { useState } from 'react';
import Image from 'next/image'
import logo from '../public/LogoMakr-2XsKla.png'
import Link from "next/link";
import styles from './navbar.module.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav className="grid grid-cols-3 gap-4 p-4 md:p-0 ">

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
        <div className="text-base lg:flex-grow">
          <Link href="/about" >
            <span className={`${styles.hoverUnderlineAnimation} block mt-4 lg:inline-block lg:mt-0 px-2 xl:px-3 mr-4 transition duration-150 border-b-8 border-transparent cursor-pointer`}> About me</span>
          </Link>
          <Link href="/projects" >
            <span className={`${styles.hoverUnderlineAnimation} block mt-4 lg:inline-block lg:mt-0 px-2 xl:px-3 mr-4 transition duration-150 border-b-8 border-transparent cursor-pointer`}>Projects</span>
          </Link>
          <Link href="/contact">
            <span className={`${styles.hoverUnderlineAnimation} block mt-4 lg:inline-block lg:mt-0 px-2 xl:px-3 mr-4 transition duration-150 border-b-8 border-transparent cursor-pointer`}>Contact me</span>
          </Link>
          <Link href="/blog">
            <span className={`${styles.hoverUnderlineAnimation} block mt-4 lg:inline-block lg:mt-0 px-2 xl:px-3 mr-4 transition duration-150 border-b-8 border-transparent cursor-pointer`}>Blog</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;