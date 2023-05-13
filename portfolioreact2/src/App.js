import './styles/App.css';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';
import { useState } from 'react';
import Projet from './components/Projet';
import { LocationProvider } from './contexts/Location';
import Skills from './components/Skills';
import { DestinationProvider } from './contexts/Destination';
import './styles/animation.css';

function App() {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX - window.innerWidth / 2,
      y: e.clientY - window.innerHeight / 2,
    });
  };

  return (
    <DestinationProvider>
      <LocationProvider>
        <div className='app' onMouseMove={handleMouseMove}>
          <div
            className='background'
            style={{
              transform: `translate(calc(${mousePosition.x / -70}px), calc(${
                mousePosition.y / -70
              }px))`,
            }}
          >
            <div className='main'></div>
            <div className='main2'></div>
            <div className='main3'></div>
            <div className='main4'></div>
            <div className='main5'></div>
            <div className='main6'></div>
          </div>
          {location.pathname === '/' ? null : <Navbar />}
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projet' element={<Projet />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </div>
      </LocationProvider>
    </DestinationProvider>
  );
}

export default App;
