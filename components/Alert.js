import React from 'react';
import styles from './alert.module.css';

const Alert = ({message}) => {
  return (
    <div className={` ${styles.alertToast} fixed bottom-6 right-0 m-2 w-25 md:w-full max-w-sm`}>
      <input type="checkbox" className="hidden" id="footertoast"/>

      <label className ="close cursor-pointer flex items-start justify-between w-full p-4 bg-white h-20 rounded shadow-lg text-black" title="close" htmlFor="footertoast">
      {message}

      <svg className ="fill-black text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
      </svg>
      </label>
    </div>
  );
};

export default Alert;