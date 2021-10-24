import React from 'react';

const OutlinedButton = ({ text, click, isActive}) => {
  return (
    <button onClick={click} className={`m-2 ${isActive && 'bg-white text-black'} hover:bg-white text-white -700 font-semibold hover:text-black py-2 px-6 border hover:border-transparent rounded`}>
      {text}
    </button>
  );
};

export default OutlinedButton;