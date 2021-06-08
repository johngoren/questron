import gameScript from './game.json';


export function getReactionText(index, choice) {
    if (choice != null) {
      const scene = gameScript[index];
      const choices = scene["choices"];
      const text = choices[choice].feedback;
      return text;
    }
    return null;
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