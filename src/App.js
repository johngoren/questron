import './App.css';
import React, { useState } from 'react';
import Scene from './Scene';
import Endgame from './Endgame';
import gameScript from './data/game.json';

function App() {

  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [didChoose, setDidChoose] = useState(false);

  const scene = gameScript[index];
  if (!scene) {
    return (
      <Endgame/>
    )
  }
  
  const onChoose = (choiceIndex) => {
    setChoice(choiceIndex);
    setDidChoose(true);
  }

  const onClickFeedback = () => {
    clearForNextQuestion();
    setIndex(index + 1);
  }

  const getFeedback = () => {
    if (choice != null) {
      const scene = gameScript[index];
      const choices = scene["choices"];
      const text = choices[choice].feedback;
      console.log(text);
      return text;
    }
    return null;
  }
  const clearForNextQuestion = () => {
    setChoice(null);
    setDidChoose(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Scene
          choice={choice}
          didChoose={didChoose}
          index={index}
          feedback={getFeedback()}
          scene={scene}
          onChoose={onChoose}
          onClickFeedback={onClickFeedback}
        />

      </header>
    </div>
  );
}


export default App;