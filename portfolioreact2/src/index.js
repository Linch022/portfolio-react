import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/animation.css';
import './styles/accueil.css';
import './styles/App.css';
import './styles/home.css';
import './styles/navbar.css';
import './styles/projet.css';
import './styles/skills.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
