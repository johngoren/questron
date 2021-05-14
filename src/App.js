import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Scene from './Scene';
import gameScript from './data/game.json';

function App() {

  const [currentIndex, setIndex] = useState(0);
  const handleClick = () => setIndex(currentIndex + 1);
  const scene = gameScript[currentIndex];

  return (
    <div className="App">
      <header className="App-header">
        <Scene
          scene={scene}
          handleClick={handleClick}
        />

      </header>
    </div>
  );
}

export default App;
