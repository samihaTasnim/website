import React from 'react';

const Footer = () => {
  return (
    <div className="text-center pt-16">
      <p> &copy; {new Date().getFullYear()} Samiha Tasnim</p>
      <small>Made with Next.js and Tailwindcss</small>
    </div>
  );
};

export default Footer;