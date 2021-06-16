import './style/App.css';
import React, { useState } from 'react';
import Scene from './screens/Scene';
import ProgressBlocks from './ui/ProgressBlocks';
import { getInitialAnswerState, isGameOver, replay } from './story/game';
import { DELAY_MS_BEFORE_NEXT_QUESTION } from './constants/settings';
import { WELCOME_SCREEN, CHOICES_SCREEN, FEEDBACK_SCREEN, SCORE_SCREEN } from './constants/modes';

// TODO: "Learn more" feature

function App() {

  const [mode, setMode] = useState(WELCOME_SCREEN);
  const [index, setIndex] = useState(0);
  const [choiceNum, setChoiceNum] = useState(null);
  const [isAnimatingExit, setIsAnimatingExit] = useState(false);
  const [isOnLearnMoreScreen, setIsOnLearnMoreScreen] = useState(false);

  const initialAnswerState = getInitialAnswerState();
  const [answers, setAnswers] = useState(initialAnswerState);

  function setNewMode(mode) {
    console.log(mode);
    setMode(mode);
  }

  function onClickWelcome() {
    document.getElementById('audio').play();
    setNewMode(CHOICES_SCREEN);
  }

  function onUserMakesChoice(choiceNum) {
    if (choiceNum != null) {
      setIsAnimatingExit(false);  
      setChoiceNum(choiceNum);
      updateAnswerRecords(choiceNum);
      setNewMode(FEEDBACK_SCREEN);  
    }
    else {
      throw new Error("User's choice was null.");
    }
  }

  function onClickNext(completion) {
    setIsAnimatingExit(true);

    setTimeout(() => {
        completion();
        const newIndex = index +1;
        if (isGameOver(newIndex)) {
          setNewMode(SCORE_SCREEN);
        }
        else {
          setIndex(newIndex);
        }
      }, DELAY_MS_BEFORE_NEXT_QUESTION) 
  }

  function onClickReplay() {
    window.location.reload();
  }
  
  function updateAnswerRecords(choiceIndex) {
    const newAnswers = answers;
    newAnswers[index] = choiceIndex;
    setAnswers(newAnswers);
  }

  function clearForNextQuestion() {
      setNewMode(CHOICES_SCREEN);
  } 
 
  return (
    <div className="App">
      <ProgressBlocks
        mode={mode}
        answers={answers}            
      />
      <header className="App-container">
        <Scene
          mode={mode}
          index={index}
          choiceNum={choiceNum}
          isAnimatingExit={isAnimatingExit}
          isOnLearnMoreScreen={isOnLearnMoreScreen}
          answers={answers}
          onChoose={(choiceNum) => onUserMakesChoice(choiceNum)}
          onClickNext={() => onClickNext(clearForNextQuestion)}
          onClickReplay={() => onClickReplay()}
          onClickWelcomeButton={() => onClickWelcome() }
      />
      </header>
    </div>
  );
}


export default App;