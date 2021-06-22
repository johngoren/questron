import gameScript from './game.json';
import { calculateScore, getScoreInfo, NO_ANSWER_YET } from './scoring';
import { prepareText } from '../helpers/textUtils';

export function calculatePlayerScore(answers) {
  return calculateScore(answers);
}

export function getPlayerScoreInfo(score) {
  return getScoreInfo(score);
}

export function getSceneForIndex(index) {
  try {
    return gameScript.scenes[index];
  }
  catch(e) {
    throw e;
  }
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
    answers.push(null);
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
  try {
    if (index != null) {
      const scene = getSceneForIndex(index);
      const choices = scene.choices;
      return choices; 
    }
    else {
      throw new Error("Invalid index:" + index);
    }
  }
  catch(e) {
    throw e;
  }
}

export function getMoreInfoTextForIndex(index) {
  try {
    const scene = getSceneForIndex(index);
    const more = scene.more;
    if (more) {
      return more;
    }
    else {
      return null;
    }
  }
  catch(e) {
    throw e;
  }

}

export function getMoreInfoTextForChoice(choiceNum, index) {
  const choices = getChoicesForIndex(index);
  const choice = choices[choiceNum];
  return choice.more ? choice.more : null;
}

export function hasLearnMore(choiceNum, index) {
    const choices = getChoicesForIndex(index);
    const choice = choices[choiceNum];
    if (choice.more) {
      return true
    }
    else {
      return false;
    }  
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
