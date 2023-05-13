import React, { useEffect, useState } from 'react';
import { useLocationContext } from '../contexts/Location';
import { useDestinationContext } from '../contexts/Destination';
import playLogo from '../assets/playlogo.png';

const Projet = () => {
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
      destination !== 'projet' &&
      destination === 'skills'
    ) {
      setClassName('leave-left');
    } else if (location === 'projet' && destination === 'home') {
      setClassName('leave-right');
    } else if (location === 'home' && destination === 'projet') {
      setClassName('incoming-right');
    } else if (location !== 'welcome' && location === 'skills') {
      setClassName('incoming-left');
    } else if (location === 'welcome') {
      setClassName('display-middle');
    }
  }, [location, destination]);
  console.log(location);
  return (
    <div>
      <h2 className={`${className}-projet-title projet-title`}>mes projets</h2>
      {showContent ? (
        <div className={`${className}-projet-container projet-container`}>
          <div className={`projet`}>
            <div className='projet-box5'></div>
            <div className='projet-content'>
              <a
                href='https://linch022.github.io/lespetitsfripons/index.html'
                className='projet-link'
              >
                <img
                  src={playLogo}
                  alt='Bouton pour accéder au projet'
                  className='projet-play-logo'
                />{' '}
              </a>
              <span>#1</span>
              <p>LES PETITS FRIPONS</p>
              <p>Création d'un site web en HTML / CSS / JS</p>
              <p>Projet dans le cadre de ma formation Développeur Web</p>
              <p>Déc. 2022 - Janv. 2023</p>
            </div>
          </div>
          <div className={`projet`}>
            <div className='projet-box5'></div>
            <div className='projet-content'>
              <a href='https://linch022.github.io/' className='projet-link'>
                <img
                  src={playLogo}
                  alt='Bouton pour accéder au projet'
                  className='projet-play-logo'
                />{' '}
              </a>
              <span>#2</span>
              <p>PORTFOLIO V1</p>
              <p>Création de mon portfolio en HTML / CSS / JS</p>
              <p>Projet personnel</p>
              <p>Janv. 2023</p>
            </div>
          </div>
          <div className={`projet`}>
            <div className='projet-box5'></div>
            <div className='projet-content'>
              <img
                src={playLogo}
                alt='Bouton pour accéder au projet désactivé'
                className='projet-play-logo-disabled'
              />{' '}
              <span>#3</span>
              <p>MOVIESCOPE</p>
              <p>
                Création d'un site web sur le cinéma en react avec l'API
                themoviedb
              </p>
              <p>
                Projet en groupe dans le cadre de ma formation Développeur Web
              </p>
              <p>Fév. 2023 - Mars 2023</p>
            </div>
          </div>
          <div className={`projet`}>
            <div className='projet-box5'></div>
            <div className='projet-content'>
              <a href='https://prof-linch-pokedex.netlify.app/'>
                <img
                  src={playLogo}
                  alt='Bouton pour accéder au projet'
                  className='projet-play-logo'
                />
              </a>
              <span>#4</span>
              <p>PROF-LINCH-POKEDEX</p>
              <p>Création d'un pokedex en react avec l'API pokebuild</p>
              <p>Projet personnel</p>
              <p>Mars 2023</p>
            </div>
          </div>
          <div className={`projet`}>
            <div className='projet-box5'></div>
            <div className='projet-content'>
              <a href='https://travelers-gig.netlify.app/'>
                <img
                  src={playLogo}
                  alt='Bouton pour accéder au projet'
                  className='projet-play-logo'
                />
              </a>
              <span>#5</span>
              <p>TRAVELERS-GIG</p>
              <p>
                Création d'un site qui répertorie les concerts dans le monde
              </p>
              <p>Projet lors d'un Hackaton</p>
              <p>Avril 2023</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Projet;
