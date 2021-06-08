import './style/App.css';
import React, { useState } from 'react';
import Scene from './screens/Scene';
import Journey from './ui/Journey';
import { isGameOnLastQuestion, isGameOver, replay } from './story/game';
import { DELAY_MS_BEFORE_NEXT_QUESTION } from './constants/settings';
import { WELCOME, NEW_SITUATION, USER_MADE_DECISION, GAME_IS_ON_LAST_QUESTION } from './constants/modes';

// TODO: "Learn more" feature
// TODO: Should animating transitions be part of the mode?

function App() {

  const [mode, setMode] = useState(WELCOME);
  const [index, setIndex] = useState(0);
  const [currentChoice, setCurrentChoice] = useState(null);
  const [isAnimatingExit, setIsAnimatingExit] = useState(false);
  const [answers, setAnswers] = useState([]);
  

  function onClickWelcome() {
    setMode(NEW_SITUATION);
  }

  function onUserMakesChoice(choiceIndex) {
    if (gameIsOnLastQuestion()) {
      replay();
      return;
    }
    setIsAnimatingExit(false);  // TODO: Replace with enum mode?
    setCurrentChoice(choiceIndex);
    updateAnswerRecords(choiceIndex);
    setMode(USER_MADE_DECISION);
  }

  // User continues to the next screen after reading decision text

  function onClickFeedback(completion) {
    setIsAnimatingExit(true);

    setTimeout(() => {
        completion();
        setIndex(index + 1);
      }, DELAY_MS_BEFORE_NEXT_QUESTION) 
  }
  
  function updateAnswerRecords(choiceIndex) {
    const newAnswers = answers;
    newAnswers.push(choiceIndex);
    setAnswers(newAnswers);
  }

  function gameIsOnLastQuestion() {
    return (mode === GAME_IS_ON_LAST_QUESTION);
  }

  function clearForNextQuestion() {
      setCurrentChoice(null);
      setMode(NEW_SITUATION);
  } 

  if (gameIsOnLastQuestion(index)) {
    setMode(GAME_IS_ON_LAST_QUESTION);
  }
  
  return (
    <div className="App">
      <Journey
        answers={answers}            
      />
      <header className="App-container">
        <Scene
          index={index}
          mode={mode}
          currentChoice={currentChoice}
          isAnimatingExit={isAnimatingExit}
          answers={answers}
          onChoose={() => onUserMakesChoice()}
          onClickFeedback={() => onClickFeedback(clearForNextQuestion)}
          onClickWelcomeButton={() => onClickWelcome() }
      />
      </header>
    </div>
  );
}


export default App;