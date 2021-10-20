import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const name = 'George Bush';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  <React.StrictMode>
    {element}
    <h1>HELLO</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// reportWebVitals();
