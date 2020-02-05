import React from 'react';
import rLogo from '../../assets/rLogo.svg';
import './App.css';
import {Board} from "../Borad/Board";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rLogo} className="App-logo" alt="logo"/>
      </header>

      <Board/>
    </div>
  );
};
