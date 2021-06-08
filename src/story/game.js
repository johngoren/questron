import gameScript from './game.json';


export function getDecisionTitle(index, choice) {
  const choice = getChoice(index, choice);
  return choice.title ?? choice.label;
}

export function getDecisionText(index, choice) {
  return getChoice(index, choice).feedback;
}

function getChoice(index, choiceNum) {
  const choices = getChoicesForIndex(index);
  return choices[choiceNum];
}

function getChoicesForIndex(index) {
  const scene = getSceneForIndex(index);
  return scene.choices;
}

export function getSceneForIndex(index) {
  return gameScript[index];
}  

export function getMaxIndex() {
  return gameScript.length;
}

export function isGameOver(index) {
  const maxIndex = getMaxIndex();
  const gameIsOver = (index +1 === maxIndex);
  return gameIsOver;
}

export function isGameOnLastQuestion(index) {
  return (getMaxIndex() === index);
}

export function replay() {
  window.location.reload();
}