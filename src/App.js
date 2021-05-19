import './App.css';
import React, { useState } from 'react';
import Scene from './Scene';
import Endgame from './Endgame';
import Slider from './Slider';
import gameScript from './data/game.json';
const DELAY_LENGTH = 4000;

function App() {

  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [didChoose, setDidChoose] = useState(false);
  const [shouldShowSceneIntro, setShouldShowSceneIntro] = useState(true);

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
    resetIntro();
  }

  const getFeedback = () => {
    if (choice != null) {
      const scene = gameScript[index];
      const choices = scene["choices"];
      const text = choices[choice].feedback;
      return text;
    }
    return null;
  }
  
  const clearForNextQuestion = () => {
    setChoice(null);
    setDidChoose(false);
  }

  const removeIntroAfterDelay = () => {
    setTimeout(() => {
      setShouldShowSceneIntro(false);
    }, DELAY_LENGTH);
  }

  const resetIntro = () => {
    setShouldShowSceneIntro(true);
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
          removeIntroAfterDelay={removeIntroAfterDelay}
          shouldShowSceneIntro={shouldShowSceneIntro}
          onChoose={onChoose}
          onClickFeedback={onClickFeedback}
        />
        <Slider
          index={index}
          maxIndex={gameScript.length}
        />
      </header>
    </div>
  );
}


export default App;