import React, { useRef, useState } from 'react';
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
  const inputRef = useRef();

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
    if (inputRef.current) hideMenu();
    setTimeout(() => {
      navigate('/projet');
    }, 2100);
  };

  const navigateSkills = () => {
    changeLocation();
    setDestination('skills');
    if (inputRef.current) hideMenu();
    setTimeout(() => {
      navigate('/skills');
    }, 2100);
  };

  const navigateHome = () => {
    changeLocation();
    setDestination('home');
    if (inputRef.current) hideMenu();
    setTimeout(() => {
      navigate('/home');
    }, 2100);
  };

  const toggleMenu = (e) => {
    setIsOpen(e.target.checked);
  };

  const hideMenu = () => {
    const input = inputRef;
    input.current.checked = false;
    setIsOpen(false);
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
                target='blank'
              >
                <i className='fa-brands fa-linkedin'> </i>
              </a>
            </li>
            <li className='navbar-social'>
              <a
                href='https://github.com/Linch022'
                className='contact'
                target='blank'
              >
                <i className='fa-brands fa-github'></i>
              </a>
            </li>
            <li className='navbar-social'>
              <a
                href='mailto:berthollet.nicolas@gmail.com'
                className='contact'
                target='blank'
              >
                <i className='fa-sharp fa-solid fa-envelope'></i>
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav
          className={
            isOpen
              ? 'menu-open menu-responsive-container'
              : 'menu-responsive-container'
          }
        >
          <label htmlFor='menu'>
            {' '}
            <img
              src={isOpen ? closeMenuIcon : menuIcon}
              alt='Menu Icon'
              className='menu-icon'
            />
          </label>
          <input
            type='checkbox'
            id='menu'
            className='menu'
            onChange={toggleMenu}
            ref={inputRef}
          ></input>
          {isOpen ? (
            <ul className='navlink-container'>
              <li
                className={
                  location.pathname === '/home'
                    ? 'navbar-responsive-item navbar-selected'
                    : 'navbar-responsive-item'
                }
                onClick={navigateHome}
              >
                home
              </li>
              <li
                className={
                  location.pathname === '/projet'
                    ? 'navbar-responsive-item navbar-selected'
                    : 'navbar-responsive-item'
                }
                onClick={navigateProjet}
              >
                projets
              </li>
              <li
                className={
                  location.pathname === '/skills'
                    ? 'navbar-responsive-item navbar-selected'
                    : 'navbar-responsive-item'
                }
                onClick={navigateSkills}
              >
                compétences
              </li>
              <ul className='social-navbar-responsive'>
                <li className='navbar-responsive-social-item'>
                  <a
                    href='https://www.linkedin.com/in/nicolasberthollet/'
                    className='contact'
                    target='blank'
                  >
                    <i className='fa-brands fa-linkedin'> </i>
                  </a>
                </li>
                <li className='navbar-responsive-social-item'>
                  <a
                    href='https://github.com/Linch022'
                    className='contact'
                    target='blank'
                  >
                    <i className='fa-brands fa-github'></i>
                  </a>
                </li>
                <li className='navbar-responsive-social-item'>
                  <a
                    href='mailto:berthollet.nicolas@gmail.com'
                    className='contact'
                    target='blank'
                  >
                    <i className='fa-sharp fa-solid fa-envelope'></i>
                  </a>
                </li>
              </ul>
            </ul>
          ) : null}
        </nav>
      )}
    </>
  );
};

export default Navbar;
