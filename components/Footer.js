import React from 'react';

const Footer = () => {
  return (
    <div className="text-center text-gray-500 pt-16 pb-8">
      <small>&copy; {new Date().getFullYear()} Samiha Tasnim | Made with Next.js and Tailwindcss</small>
    </div>
  );
};

export default Footer;