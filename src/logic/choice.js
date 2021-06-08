export function onMakeDecision(choiceIndex) {
    if (gameIsOver) {
      reset();
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

export function onClickFeedback(completion) {
    setIsEnding(true);

    if (gameIsOver) {
      reset();
    }
    else {
      setTimeout(() => {
        completion();
        setIndex(index + 1);
      }, DELAY_MS_BEFORE_NEXT_QUESTION) 
    }
}
  
