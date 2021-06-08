import gameScript from './game.json';
import { prepareText } from '../helpers/textUtils';

export function getSceneForIndex(index) {
  return gameScript.scenes[index];
}  

export function getMaxIndex() {
  return gameScript.scenes.length;
}

export function getDecisionTitle(choice, index) {
  const decision = getChoice(index, choice);
  if (decision != null) {
    return decision.title ?? decision.label;
  }
}

export function getDecisionText(choice, index) {
  const decision = getChoice(index, choice);
  if (decision != null) {
    const body = getChoice(index, choice).feedback;
    return prepareText(body);
  }
}

function getChoice(index, choiceNum) {
  const choices = getChoicesForIndex(index);
  return choices[choiceNum];
}

function getChoicesForIndex(index) {
  const scene = getSceneForIndex(index);
  return scene.choices;
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

