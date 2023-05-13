import React, { useEffect, useState } from 'react';
import playLogo from '../assets/playlogo.png';
import { useLocationContext } from '../contexts/Location';
import { useDestinationContext } from '../contexts/Destination';

const Home = () => {
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
      destination !== 'home' &&
      (destination === 'projet' || destination === 'skills')
    )
      setClassName('leave-left');
    else if (location !== 'welcome' && (location === 'projet' || 'skills')) {
      setClassName('incoming-left');
    } else if (location === 'welcome') {
      setClassName('display-middle');
    }
  }, [location, destination]);

  return (
    <div className='home-container'>
      <div className={`${className}-auto-text-container`}>
        <h1 id='title-auto-text'>Je suis Nicolas Berthollet</h1>
        <span id='auto-text'></span>
      </div>
      {showContent ? (
        <>
          <section className='homepage-content'>
            <div className={`${className}-presentation-container`}>
              <div className='projet-box5'></div>
              <div className='presentation-content'>
                <h3>présentation</h3>
                <p className='text'>
                  Après une expérience réussie en restauration, j'ai décidé
                  d'apprendre le développement web et plus précisement le métier
                  de développeur web frontend. <br /> en formation à la{' '}
                  <span className='text-link'>
                    <a href='https://www.wildcodeschool.com/fr-FR.wild'>
                      wild code school
                    </a>
                  </span>{' '}
                  j'apprends à développer le frontend et le backend d'une
                  application web avec react / nodejs / expressjs / mysql.{' '}
                  <br /> je suis à la recherche d'un stage en tant que
                  développeur frontend d'une durée de 4 mois du 3 Juillet 2023
                  au 7 novembre 2023 pour compléter mon cursus et mettre mes
                  nouvelles compétences en action. <br /> si vous le souhaitez
                  voici{' '}
                  <span className='text-link'>
                    <a href='./img/CV_Nicolas_Berthollet.pdf' download>
                      mon cv
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className={`${className}-home-project-container`}>
              <div className='projet-box5'></div>
              <div className='home-projet-content'>
                <h3>mon dernier projet</h3>
                <div className='projet-link-container'>
                  <a
                    href='https://travelers-gig.netlify.app/'
                    className='projet-link'
                    target='blank'
                  >
                    <img
                      src={playLogo}
                      alt='Bouton pour accéder au projet'
                      className='home-play-logo'
                    />
                  </a>
                </div>
                <h3>TRAVELERS-GIG</h3>
                <p className='text'>
                  <span className='underline'> Projet Hackaton : </span> <br />
                  Création d'un site qui répertorie les concerts dans le monde
                  grâce à une recherche par Artiste
                </p>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
};

export default Home;
