// Biblioteca que deve estar em qualquer arquivo que tiver React
import React from 'react';
// ReactDom e a interação com React e DOM
// DOM e a arvore de elementos do HTML
import ReactDOM from 'react-dom';
import App from './App';
import 'leaflet/dist/leaflet.css';

// Recebe elemento HTML e coloca dentro de uma tag de HTML
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
