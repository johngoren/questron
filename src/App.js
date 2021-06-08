import './style/App.css';
import React, { useState } from 'react';
import Scene from './screens/Scene';
import Journey from './ui/Journey';
import gameScript from './story/game.json';
import { getFeedback } from './story/content';
import { onMakeDecision, onClickFeedback } from './logic/choice';
import { isGameOver } from './helpers/gameState';


function App() {

  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [didChoose, setDidChoose] = useState(false);
  const [shouldShowSceneIntro, setShouldShowSceneIntro] = useState(true);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnding, setIsEnding] = useState(false);
  const [answers, setAnswers] = useState([]);
  
  const scene = gameScript[index];

  const clearForNextQuestion = () => {
    setChoice(null);
    setDidChoose(false);
  } 
  const gameIsOver = isGameOver(index, gameScript.length);
  const decisionFeedbackText = getFeedback(index);

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
          feedback={decisionFeedbackText}
          onChoose={onMakeDecision}
          onClickFeedback={() => onClickFeedback(clearForNextQuestion)}
          answers={answers}
        />
      </header>
    </div>
  );
}


export default App;