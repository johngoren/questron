import gameScript from './game.json';
import { calculateScore, getScoreMeta, NO_ANSWER_YET } from './scoring';
import { prepareText } from '../helpers/textUtils';

export function calculatePlayerScore(answers) {
  return calculateScore(answers);
}

export function getPlayerScoreMeta(score) {
  return getScoreMeta(score);
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

export function getValueForAnswer(choiceNum, index) {
  const decision = getChoice(index, choiceNum);
  const value = decision.value;
  if (value != null) {
    return value;
  }
  else {
    return null;
  }
}

export function getRankTitle(keyword) {
  const entry = getRankEntry(keyword);
  console.log(entry);
  return entry.title;
}

export function getRankDescription(keyword) {
  return getRankEntry(keyword).description;
}

export function getRankEntry(keyword) {
  const filtered = gameScript.scores.filter(item => item.id === keyword);
  if (filtered != null) {
    return filtered[0];
  }
  else {
    return null;
  }
}

// "scenes": [
//   {
//      "id": 0,
//      "title":"Welcome to the Capdesk startup simulator",
//      "body":"You've got a billion dollar idea and a plan for turning it into a reality, so you're starting your own business. What role will you take?",
//      "choices":[
//         {
//            "label":"I'm the CEO",
//            "feedback":"Fantastic! The role of chief executive officer is a natural choice, putting you squarely at the helm of the business. CEOs tend to be open and trustworthy by nature, and able to inspire confidence in others.",
//            "value":null
//         },
//         {
//            "label": "I'm the CFO",
//            "feedback":"Great! The CFO has the highest financial oversight and responsibility for the whole organisation. Chief financial officers are typically practical, resourceful leaders with a detail-oriented working style.",
//            "value":null
//         },
//         {
//            "label": "I'm the CTO",
//            "feedback":"Strong choice – if you're building a tech-powered business, chief technology officer is arguably the most important position. CTOs tend to be good at making decisions and highly driven to innovate.",
//            "value":null
//         }
//      ]
//   },