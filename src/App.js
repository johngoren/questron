import './style/App.css';
import React, { useState } from 'react';
import Scene from './screens/Scene';
import Journey from './ui/Journey';
import { replay } from './story/game';
import { DELAY_MS_BEFORE_NEXT_QUESTION } from './constants/settings';
import { WELCOME, USER_NEEDS_TO_CHOOSE, USER_MADE_DECISION } from './constants/modes';

// TODO: "Learn more" feature
// TODO: Should animating transitions be part of the mode?

function App() {

  const [mode, setMode] = useState(WELCOME);
  const [index, setIndex] = useState(0);
  const [currentChoice, setCurrentChoice] = useState(null);
  const [isAnimatingExit, setIsAnimatingExit] = useState(false);
  const [answers, setAnswers] = useState([]);

  function setNewMode(mode) {
    console.log("New mode:");
    console.log(mode);
    setMode(mode);
  }

  function onClickWelcome() {
    setNewMode(USER_NEEDS_TO_CHOOSE);
  }

  function onUserMakesChoice(choiceIndex) {
    if (gameIsOnLastQuestion()) {
      replay();
      return;
    }
    setIsAnimatingExit(false);  // TODO: Replace with enum mode?
    setCurrentChoice(choiceIndex);
    updateAnswerRecords(choiceIndex);
    setNewMode(USER_MADE_DECISION);
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

  function gameIsOnLastQuestion(index) {
    return false; // TODO: Implement
  }

  function clearForNextQuestion() {
      setCurrentChoice(null);
      setNewMode(USER_NEEDS_TO_CHOOSE);
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