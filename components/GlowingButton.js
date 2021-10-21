import React from 'react';
import Link from 'next/link';
import styles from './glowingButton.module.css';

const GlowingButton = ({ text , link, fileName= ''}) => {
  return (
    <Link href={link} download = {fileName}>
      <a className={`${styles.glow} inline-block text-base px-4 py-2 leading-none border transition rounded border-white hover:border-transparent text-black font-semibold bg-white transform hover:-translate-y-1 hover:scale-140 mt-4 lg:mt-0`}>
        {text}</a>
    </Link>
  );
};

export default GlowingButton;


