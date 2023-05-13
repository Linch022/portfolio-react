import React, { useState } from 'react';
import { useDestinationContext } from '../contexts/Destination';
import { useLocationContext } from '../contexts/Location';
import useMediaQueries from 'media-queries-in-react';
import menuIcon from '../assets/icon-burger.svg';
import closeMenuIcon from '../assets/icon-close.svg';
import { useLocation, useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setLocation } = useLocationContext();
  const { setDestination } = useDestinationContext();
  const [isOpen, setIsOpen] = useState(false);

  const changeLocation = () => {
    if (location.pathname === '/home') setLocation('home');
    else if (location.pathname === '/projet') setLocation('projet');
    else if (location.pathname === '/skills') setLocation('skills');
  };

  const mediaQueries = useMediaQueries({
    screen: 'screen and (min-width: 750px)',
  });

  const navigateProjet = () => {
    changeLocation();
    setDestination('projet');
    setTimeout(() => {
      navigate('/projet');
    }, 2100);
  };

  const navigateSkills = () => {
    changeLocation();
    setDestination('skills');
    setTimeout(() => {
      navigate('/skills');
    }, 2100);
  };

  const navigateHome = () => {
    changeLocation();
    setDestination('home');
    setTimeout(() => {
      navigate('/home');
    }, 2100);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {mediaQueries.screen ? (
        <nav className='navbar'>
          <ul className='navbar-right'>
            <li className='navbar-item' onClick={navigateHome}>
              home
            </li>
            <li className='navbar-item' onClick={navigateProjet}>
              projets
            </li>
            <li className='navbar-item' onClick={navigateSkills}>
              compétences
            </li>
          </ul>
          <ul className='navbar-left'>
            <li className='navbar-social'>
              <a
                href='https://www.linkedin.com/in/nicolasberthollet/'
                className='contact'
              >
                <i className='fa-brands fa-linkedin'> </i>
              </a>
            </li>
            <li className='navbar-social'>
              <a href='https://github.com/Linch022' className='contact'>
                <i className='fa-brands fa-github'></i>
              </a>
            </li>
            <li className='navbar-social'>
              <a href='mailto:berthollet.nicolas@gmail.com' className='contact'>
                <i className='fa-sharp fa-solid fa-envelope'></i>
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className='menu-responsive-container'>
          <button type='button' className='menu' onClick={toggleMenu}>
            <img
              src={isOpen ? closeMenuIcon : menuIcon}
              alt='Menu Icon'
              className='menu-icon'
            />
          </button>
          <ul className='navlink-container'>
            <li></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
