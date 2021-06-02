import './style/App.css';
import React, { useState } from 'react';
import Scene from './Scene';
import Journey from './Journey';
import gameScript from './data/game.json';
import scoreAnswers from './scores';

const DELAY_MS_BEFORE_NEXT_QUESTION = 2000;

function App() {

  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [didChoose, setDidChoose] = useState(false);
  const [shouldShowSceneIntro, setShouldShowSceneIntro] = useState(true);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnding, setIsEnding] = useState(false);
  const [answers, setAnswers] = useState([]);

  const scene = gameScript[index];
  
  const onChoose = (choiceIndex) => {
    if (gameIsOver) {
      reset();
      return;
    }

    setIsEnding(false); // TODO: Right?
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
    setIsEnding(true);

    if (gameIsOver) {
      reset();
    }
    else {
      setTimeout(() => {
        clearForNextQuestion();
        setIndex(index + 1);
      }, DELAY_MS_BEFORE_NEXT_QUESTION) 
    }
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


  const gameIsOver = isGameOver(index, gameScript.length);

  return (
    <div className="App">
      <Journey
        answers={answers}            
      />
      <header className="App-container">
        <Scene
          choice={choice}
          didChoose={didChoose}
          gameIsOver={gameIsOver}
          index={index}
          isBeginning={isBeginning}
          isEnding={isEnding}
          scene={scene}
          shouldShowSceneIntro={shouldShowSceneIntro}
          maxIndex={gameScript.length}
          feedback={getFeedback()}
          onChoose={onChoose}
          onClickFeedback={onClickFeedback}
          answers={answers}
        />
      </header>
    </div>
  );
}

function reset() {
  window.location.reload();
}

function isGameOver(index, maxIndex) {
  const gameIsOver = (index +1 === maxIndex);
  return gameIsOver;
}


export default App;