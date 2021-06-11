import gameScript from './game.json';
import { prepareText } from '../helpers/textUtils';

export const NO_ANSWER_YET = -1;
export const PROGRESSIVE = 1;
export const TYPICAL = 2;
export const CONSERVATIVE = 3;

export function getSceneForIndex(index) {
  return gameScript.scenes[index];
}  

export function getMaxIndex() {
  return gameScript.scenes.length;
}

function getNumQuestions() {
  return gameScript.scenes.length -1;
}

export function getInitialAnswerState() {
  const answers = [];
  for (let i=0; i<getNumQuestions; i++) {
    answers.push(NO_ANSWER_YET);
  }
  return answers;
}

export function getDecisionTitle(choice, index) {
  const decision = getChoice(index, choice);
  if (decision != null) {
    return decision.title ?? decision.label;
  }
}

export function getDecisionText(choice, index) {
  if (choice != null && index != null) {
    const decision = getChoice(index, choice);
    if (decision != null) {
      const body = getChoice(index, choice).feedback;
      return prepareText(body);
    } 
  }
  throw Error("Was asked for decision text, but was missing information.");
}

function getChoice(index, choiceNum) {
  if (choiceNum != null && index != null) {
    const choices = getChoicesForIndex(index);
    return choices[choiceNum];
  }
  throw Error("Was asked for a choice, but was missing information.");
}

export function getChoicesForIndex(index) {
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

