import React, { useEffect, useState } from 'react';
import { useLocationContext } from '../contexts/Location';
import { useDestinationContext } from '../contexts/Destination';
import htmlLogo from '../assets/html-logo.svg';
import cssLogo from '../assets/css-logo.svg';
import sassLogo from '../assets/sass.svg';
import jsLogo from '../assets/js-logo.svg';
import reactLogo from '../assets/react-logo.svg';
import expressLogo from '../assets/expressjs.svg';
import nodeLogo from '../assets/nodejs-logo.svg';
import mysqlLogo from '../assets/MySQL.svg';

const Skills = () => {
  const { location } = useLocationContext();
  const { destination } = useDestinationContext();
  const [className, setClassName] = useState();

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (
      destination !== null &&
      destination !== 'skills' &&
      (destination === 'projet' || destination === 'home')
    )
      setClassName('leave-right');
    else if (location !== 'welcome' && (location === 'projet' || 'home')) {
      setClassName('incoming-right');
    } else if (location === 'welcome') {
      setClassName('display-middle');
    }
  }, [location, destination]);

  return (
    <main className='skills-page'>
      {showContent ? (
        <>
          <h2 className={`${className}-skills-title skills-title`}>
            Mes compétences
          </h2>
          <div className={`${className}-skills-container skills-container`}>
            <img
              src={htmlLogo}
              alt='Logo de ma compétence en HTML'
              className={`${className}-skills-logo skills-logo`}
            />
            <img
              src={cssLogo}
              alt='Logo de ma compétence en CSS'
              className={`${className}-skills-logo skills-logo`}
            />
            <img
              src={sassLogo}
              alt='Logo de ma compétence en SASS'
              className={`${className}-skills-logo skills-logo`}
            />
            <img
              src={jsLogo}
              alt='Logo de ma compétence en Javascript'
              className={`${className}-skills-logo skills-logo`}
            />
            <img
              src={reactLogo}
              alt='Logo de ma compétence en React'
              className={`${className}-skills-logo skills-logo`}
            />
            <img
              src={expressLogo}
              alt='Logo de ma compétence en ExpressJS'
              className={`${className}-skills-logo skills-logo`}
            />
            <img
              src={nodeLogo}
              alt='Logo de ma compétence en NodeJS'
              className={`${className}-skills-logo skills-logo`}
            />
            <img
              src={mysqlLogo}
              alt='Logo de ma compétence en MySQL'
              className={`${className}-skills-logo skills-logo`}
            />
          </div>
        </>
      ) : null}
    </main>
  );
};

export default Skills;
