import './style/App.css';
import React, { useState } from 'react';
import Scene from './screens/Scene';
import Journey from './ui/Journey';
import { isGameOnLastQuestion, isGameOver, getSceneForIndex, getReactionText, replay } from './story/game';
import { DELAY_MS_BEFORE_NEXT_QUESTION } from './config/settings';

function App() {

  const [shouldShowWelcomeScreen] = useState(true);
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [didChoose, setDidChoose] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const [answers, setAnswers] = useState([]);
  
  const scene = getSceneForIndex(index);

  // User makes a choice
  function onMakeDecision(choiceIndex) {
    if (gameIsOver) {
      replay();
      return;
    }

    setIsEnding(false); // TODO: Right?
    setChoice(choiceIndex);
    updateAnswers(choiceIndex);
    setDidChoose(true);
  }

  function updateAnswers (choiceIndex) {
    const newAnswers = answers;
    newAnswers.push(choiceIndex);
    setAnswers(newAnswers);
  }


  // User continues to the next screen after reading decision text

  function onClickFeedback(completion) {
    setIsEnding(true);

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
      setChoice(null);
      setDidChoose(false);
  } 

  const gameIsOnLastQuestion = isGameOnLastQuestion(index);
  const gameIsOver = isGameOver(index);
  const decisionFeedbackText = getReactionText(index, choice);

  return (
    <div className="App">
      <Journey
        answers={answers}            
      />
      <header className="App-container">
        <Scene
          welcome={shouldShowWelcomeScreen}
          choice={choice}
          didChoose={didChoose}
          gameIsOnLastQuestion={gameIsOnLastQuestion}
          gameIsOver={gameIsOver}
          index={index}
          isBeginning={isBeginning}
          isEnding={isEnding}
          scene={scene}
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