import './style/App.css';
import React, { useState } from 'react';
import Scene from './screens/Scene';
import Journey from './ui/Journey';
import { isGameOnLastQuestion, isGameOver, getSceneForIndex, getReactionText, replay } from './story/game';
import { DELAY_MS_BEFORE_NEXT_QUESTION } from './config/settings';

function App() {

  const [shouldShowWelcomeScreen] = useState(true);
  const [index, setIndex] = useState(0);
  const [currentChoice, setCurrentChoice] = useState(null);
  const [didChoose, setDidChoose] = useState(false);
  const [isAnimatingExit, setIsAnimatingExit] = useState(false);
  const [answers, setAnswers] = useState([]);
  
  const scene = getSceneForIndex(index);

  // User makes a choice
  function onMakeDecision(choiceIndex) {
    if (gameIsOver) {
      replay();
      return;
    }
    setIsAnimatingExit(false);
    setCurrentChoice(choiceIndex);
    updateAnswerRecords(choiceIndex);
    setDidChoose(true);
  }

  function updateAnswerRecords(choiceIndex) {
    const newAnswers = answers;
    newAnswers.push(choiceIndex);
    setAnswers(newAnswers);
  }


  // User continues to the next screen after reading decision text

  function onClickFeedback(completion) {
    setIsAnimatingExit(true);

    if (gameIsOver) {
      replay();
    }
    else {
      setTimeout(() => {
        completion();
        setIndex(index + 1);
      }, DELAY_MS_BEFORE_NEXT_QUESTION) 
    }
  }

  function clearForNextQuestion() {
      setCurrentChoice(null);
      setDidChoose(false);
  } 

  const gameIsOnLastQuestion = isGameOnLastQuestion(index);
  const gameIsOver = isGameOver(index);
  const decisionFeedbackText = getReactionText(index, currentChoice);

  return (
    <div className="App">
      <Journey
        answers={answers}            
      />
      <header className="App-container">
        <Scene
          scene={scene}
          welcome={shouldShowWelcomeScreen}
          currentChoice={currentChoice}
          didChoose={didChoose}
          gameIsOnLastQuestion={gameIsOnLastQuestion}
          gameIsOver={gameIsOver}
          index={index}
          isAnimatingExit={isAnimatingExit}
          feedback={decisionFeedbackText}
          onChoose={() => onMakeDecision()}
          onClickFeedback={() => onClickFeedback(clearForNextQuestion)}
          answers={answers}
        />
      </header>
    </div>
  );
}


export default App;