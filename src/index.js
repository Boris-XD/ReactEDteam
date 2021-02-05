import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root =  document.getElementById("root");

//const element = React.createElement(componente, propiedades, hijos);
//const element = React.createElement("h1", {className: "saludo"}, "hola mundo");

ReactDOM.render(<App />,root);