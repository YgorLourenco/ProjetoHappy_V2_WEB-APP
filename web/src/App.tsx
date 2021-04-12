import React from 'react';



import './styles/global.css';

import Routes from './routes';


// Interface e onde se coloca o tipo da propriedade do componente
// interface TitleProps {
//   text: string;
// }

// // Componente Filho
// function Title(props: TitleProps) {
//   return (
//     <h1>{props.text}</h1>
//   )
// }

// Componente Pai
// HTML dentro do JavaScript se chama JSX(JavaScript XML)
function App() {
  return (
    <Routes />
  );
}

export default App;
