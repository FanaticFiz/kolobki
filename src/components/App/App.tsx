import React from 'react';
import {Board} from "../Borad/Board";
import vsLogo from '../../assets/vs.png';
import aLogo from '../../assets/aLogo.svg';
import rLogo from '../../assets/rLogo.svg';
import {GamePanel} from "../GamePanel/GamePanel";

import './App.css';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <GamePanel />

        <img src={rLogo} className="App-logo" alt="logo"/>
        <img src={vsLogo} className="Vs-Logo" alt="logo"/>
        <img src={aLogo} className="App-logo" alt="logo"/>
      </header>

      <Board />
    </div>
  );
};
