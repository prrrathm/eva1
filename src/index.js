import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './component/game';

const user = {
  firstname : 'Acharya',
  lastname : 'Narendra'
}

function formatname(user){
  return user.firstname + ' and  ' + user.lastname;
}

const name = 'George Bush';
const element = <h1>Hello, {formatname(user)}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
// reportWebVitals();
