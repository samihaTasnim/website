import React from 'react';
import Link from "next/link"

const Navbar = () => {


  return (
    <nav className="pb-4 md:pb-8">

      <div className="text-xl">
        <Link href="/">
          <a className="">home</a>
        </Link>
        <Link href="/blog">
        <a className=" pl-4">blog</a>
        </Link>
        <Link href="/projects">
        <a className=" pl-4">projects</a>
        </Link>
        <Link href="/resources">
          <a className=" pl-4">resources</a>
        </Link>
        <Link href="/contact">
          <a className=" pl-4">contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;