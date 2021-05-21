import './App.css';
import React, { useState } from 'react';
import Scene from './Scene';
import Endgame from './Endgame';
import gameScript from './data/game.json';
const DELAY_LENGTH = 4000;

function App() {

  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [didChoose, setDidChoose] = useState(false);
  const [shouldShowSceneIntro, setShouldShowSceneIntro] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [answers, setAnswers] = useState([]);

  const scene = gameScript[index];
  if (!scene) {
    return (
      <Endgame/>
    )
  }
  
  const onChoose = (choiceIndex) => {
    setIsFadingOut(false);
    setChoice(choiceIndex);
    updateAnswers(choiceIndex);
    setDidChoose(true);
  }

  const updateAnswers = (choiceIndex) => {
    const newAnswers = answers;
    newAnswers.push(choiceIndex);
    setAnswers(newAnswers);
  }

  const onClickFeedback = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      clearForNextQuestion();
      setIndex(index + 1);
      resetIntro(); 
    }, 2000)
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
    setIsFadingOut(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Scene
          choice={choice}
          didChoose={didChoose}
          index={index}
          isFadingOut={isFadingOut}
          scene={scene}
          shouldShowSceneIntro={shouldShowSceneIntro}
          maxIndex={gameScript.length}
          removeIntroAfterDelay={removeIntroAfterDelay}
          feedback={getFeedback()}
          onChoose={onChoose}
          onClickFeedback={onClickFeedback}
          answers={answers}
        />
      </header>
    </div>
  );
}


export default App;