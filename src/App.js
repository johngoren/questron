import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [currentIndex, setIndex] = useState(0);
  const handleClick = () => setIndex(currentIndex + 1);

  return (
    <div className="App">
      <header className="App-header">
        You are on scene {currentIndex}.
        <button onClick={handleClick}>Next scene!</button>
      </header>
    </div>
  );
}

export default App;
