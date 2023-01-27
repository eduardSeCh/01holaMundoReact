import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NombreCompleto } from './components/NombreCompleto';
import { Edad } from './components/Edad';
import { Mascota } from './components/Mascota';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NombreCompleto name='yomero' edad={7}/>
    <NombreCompleto name='yomero2' edad={7}/>
    <Mascota name='Solovino' age={6}/>
  </React.StrictMode>
);

//Consejos:
// para abrirlo en otro puerto => "start": "set PORT=3001 && react-scripts start",