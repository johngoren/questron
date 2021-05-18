import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Scene from './Scene';
import gameScript from './data/game.json';

function App() {

  const [currentIndex, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);

  const nextScene = () => setIndex(currentIndex + 1);
  const scene = gameScript[currentIndex];
  const onChoose = (choiceIndex) => {
    setChoice(choiceIndex);
  }
  const onClickFeedback = () => {
    clearForNextQuestion();
    nextScene();
  }
  const getFeedback = () => {
    if (choice) {
      return getFeedbackForChoice(choice);
    }
    return null;
  }
  const clearForNextQuestion = () => {
    setChoice(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Scene
          choice={choice}
          currentIndex={currentIndex}
          feedback={getFeedback()}
          scene={scene}
          onChoose={onChoose}
          onClickFeedback={onClickFeedback}
        />

      </header>
    </div>
  );
}

function getFeedbackForChoice(currentChoice, currentIndex) {
  return gameScript[currentIndex]["choices"][currentChoice];
}


export default App;
