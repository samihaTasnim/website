import React from 'react';
import Link from "next/link"

const Navbar = () => {


  return (
    <nav className=" py-4 md:py-8 text-gray-300">

      <div className="text-base">
        <Link href="/">
          <a className="underline">home</a>
        </Link>
        <Link href="/blog">
        <a className="underline pl-4">blog</a>
        </Link>
        <Link href="/resources">
          <a className="underline pl-4">resources</a>
        </Link>
        <Link href="/contact">
          <a className="underline pl-4">contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;