import './style/App.css';
import React, { useState } from 'react';
import Scene from './screens/Scene';
import ProgressBlocks from './ui/ProgressBlocks';
import { getInitialAnswerState, isGameOver } from './story/game';
import { DELAY_MS_BEFORE_NEXT_QUESTION } from './constants/settings';
import { WELCOME_SCREEN, SITUATION_SCREEN, DECISION_SCREEN, SCORE_SCREEN } from './constants/modes';
import { initStats, reportUserReachedNewQuestion, reportUserChoseAnswer } from './helpers/analyticsUtils';
import { Social } from './helpers/social';

initStats();

function App() {
  const [mode, setMode] = useState(WELCOME_SCREEN);
  const [index, setIndex] = useState(0);
  const [activeChoice, setActiveChoice] = useState(null);
  const [isAnimatingExit, setIsAnimatingExit] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [isMoreAboutDecision, setIsMoreAboutDecision] = useState(null);
  const initialAnswerState = getInitialAnswerState();
  const [answers, setAnswers] = useState(initialAnswerState);
  const [hasTeletyped, setHasTeletyped] = useState(false);

  const setNewMode = (mode) => setMode(mode);

  const onUserMakesChoice = (choiceNum) => {
    if (choiceNum != null) {
      const questionId = index + 1;
      reportUserChoseAnswer(choiceNum, questionId);
      setIsAnimatingExit(false);  
      setActiveChoice(choiceNum);
      setNewMode(DECISION_SCREEN);  
    }
    else {
      throw new Error("User's choice was null.");
    }
  }
  
  const updateAnswerRecords = (choiceIndex) => {
    const newAnswers = answers;
    newAnswers[index] = choiceIndex;
    setAnswers(newAnswers);
  }

  const clearForNextQuestion = () => {
      setHasTeletyped(false);
      setNewMode(SITUATION_SCREEN);
  } 

   
  // MARK: Click handlers

  const onClickWelcome = () => {
    document.getElementById('audio').play();
    setNewMode(SITUATION_SCREEN);
  }

  const onClickNext = (completion) => {
    setIsAnimatingExit(true); 

    setTimeout(() => {
        completion();
        updateAnswerRecords(activeChoice);
        const newIndex = index +1;
        reportUserReachedNewQuestion(newIndex);
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

  function onClickMore() {
    setIsMore(true);
  }

  function onClickMoreAboutDecision(choiceNum) {
    setIsMore(true);
    setIsMoreAboutDecision(choiceNum);
  }

  function onClickBack() {
    setIsMore(false);
    setHasTeletyped(true);
  }

  // MARK: Mode

  function getAppLayoutClassFromMode(mode) {
    if (mode === WELCOME_SCREEN) {
      return "App welcomeScreen";
    }
    else {
      return "App";
    }
  }
  const appClass = getAppLayoutClassFromMode(mode);

  // MARK: Render

  return (
    <div className={appClass}>
      <ProgressBlocks
        mode={mode}
        answers={answers}            
      />
      <header className="App-container">
        <Scene
          mode={mode}
          index={index}
          choiceNum={activeChoice}
          isAnimatingExit={isAnimatingExit}
          isMore={isMore}
          isMoreAboutDecision={isMoreAboutDecision}
          answers={answers}
          hasTeletyped={hasTeletyped}
          onChoose={(choiceNum) => onUserMakesChoice(choiceNum)}
          onClickBack={() => onClickBack()}
          onClickMoreAboutDecision={(choiceNum) => onClickMoreAboutDecision(choiceNum) }
          onClickNext={() => onClickNext(clearForNextQuestion)}
          onClickReplay={() => onClickReplay()}
          onClickWelcomeButton={() => onClickWelcome() }
          onClickMore={() => onClickMore()}
      />
      </header>
      <Social/>
    </div>
  );
}


export default App;
