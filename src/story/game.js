import gameScript from './game.json';
import { calculateScore, NO_ANSWER_YET } from './scoring';
import { prepareText } from '../helpers/textUtils';

export function calculatePlayerScore(answers) {
  return calculateScore(answers);
}

export function getSceneForIndex(index) {
  return gameScript.scenes[index];
}

export function getMaxIndex() {
  return gameScript.scenes.length;
}

function getNumQuestions() {
  return gameScript.scenes.length;
}

export function getInitialAnswerState() {
  const answers = [];
  for (let i=0; i<getNumQuestions(); i++) {
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

export function getMoreInfoTextForIndex(index) {
  const scene = getSceneForIndex(index);
  return scene.more_info;
}

export function getMoreInfoTextForChoice(choiceNum, index) {
  return getChoice(index, choiceNum).more_info;
}

export function isGameOver(index) {
  const maxIndex = getMaxIndex();
  const gameIsOver = (index === maxIndex);
  return gameIsOver;
}

export function isGameOnLastQuestion(index) {
  return (getMaxIndex() === index);
}

export function getDescriptionForCategoryEnum(categoryEnum) {
  const categories = getPlayerCategories();
  const category = categories[categoryEnum - 1];
  return category.description;
}

function getPlayerCategories() {
  return gameScript.categories;
}


export function replay() {
  window.location.reload();
}
