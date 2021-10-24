import React from 'react';
import Link from 'next/link';
import styles from './glowingButton.module.css';

const GlowingButton = ({ text, link, downloadResume }) => {
  return (
    (!downloadResume ?
      <Link href={link}>
        <a target="_blank" className={`${styles.glow} inline-block px-4 py-2 leading-none border transition rounded border-white hover:border-transparent text-black font-semibold bg-white transform hover:-translate-y-1 hover:scale-140 mt-4 lg:mt-0`}>
          {text}</a>
      </Link>
      : <a href="/Samiha-Tasnim-Resume.pdf" target="_blank" className={`${styles.glow} inline-block px-4 py-2 leading-none border transition rounded border-white hover:border-transparent text-black font-semibold bg-white transform hover:-translate-y-1 hover:scale-140 mt-4 lg:mt-0`}>
        {text}</a>))
}
//   );
// };

export default GlowingButton;


