import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const [buttonClass, setButtonClass] = useState('enter-btn');
  const [letterClass, setLetterClass] = useState('letter letter-coming');

  const handleClick = () => {
    setButtonClass('hide-enter-btn');
    setLetterClass('letter smokey-letter');
    setTimeout(() => {
      navigate('/home');
    }, 4000);
  };
  return (
    <div className='accueil-container'>
      <div className='title-accueil'>
        <span className={letterClass}>b</span>
        <span className={letterClass}>i</span>
        <span className={letterClass}>e</span>
        <span className={letterClass}>n</span>
        <span className={letterClass}>v</span>
        <span className={letterClass}>e</span>
        <span className={letterClass}>n</span>
        <span className={letterClass}>u</span>
        <span className={letterClass} style={{ marginRight: 20 }}>
          e
        </span>{' '}
        <span className={letterClass}>s</span>
        <span className={letterClass}>u</span>
        <span className={letterClass} style={{ marginRight: 20 }}>
          r
        </span>{' '}
        <span className={letterClass}>m</span>
        <span className={letterClass}>o</span>
        <span className={letterClass} style={{ marginRight: 20 }}>
          n
        </span>{' '}
        <span className={letterClass}>p</span>
        <span className={letterClass}>o</span>
        <span className={letterClass}>r</span>
        <span className={letterClass}>t</span>
        <span className={letterClass}>f</span>
        <span className={letterClass}>o</span>
        <span className={letterClass}>l</span>
        <span className={letterClass}>i</span>
        <span className={letterClass}>o</span>
      </div>
      <button className={buttonClass} onClick={handleClick}>
        <span className='enter-txt'>
          e<span className='faulty-letter'>n</span>ter
        </span>
      </button>
    </div>
  );
};

export default Welcome;
