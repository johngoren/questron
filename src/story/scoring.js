import { getValueForAnswer } from "./game";

export function calculateScore(numericalAnswers) {
    const ideological = getIdeologiesForNumbers(numericalAnswers);
    const tally = calculateTally(ideological);
    const winningTally = getWinningTally(tally);
    return winningTally;
}

export function getIdeologiesForNumbers(numericalAnswers) {
    return numericalAnswers.map(function(choiceNum, index) {
        return getValueForNumericalAnswer(choiceNum, index);
    });
}

export function getInitialTally() {
    return {
        "progressive": 0,
        "typical": 0,
        "conservative": 0
    }
}

export function calculateTally(answers) {
    if (answers != null) {
        let tally = getInitialTally();

        answers.forEach(function(answer) {
           switch(answer) {
               case "progressive":
                   tally["progressive"]++;
                   break;
               case "typical":
                   tally["typical"]++;
                   break;
               case "conservative":
                   tally["conservative"]++;
                   break;
               case null:
                   break;
               default:
                   throw new Error("Invalid answer:" + answer);
           }
       });
   
       return tally;  
    }
    else {
        throw new Error("Did not receive a valid set of answers to work with.");
    }

}

export function getWinningTally(tally) {
    let highestTally = 0;
    let winningCategory = null;

    for (let scoreKey of Object.keys(tally)) {
        let total = tally[scoreKey];
        if (total > highestTally) { 
            highestTally = total 
            winningCategory = scoreKey;
        }
    }
    return winningCategory;
}

export function getScoreInfo(score) {
    const title = getScoreTitle(score);
    const body = getScoreDescription(score);
    return {
        title: title,
        body: body
    }
}

function getScoreTitle(score) {
    return score.toUpperCase();
}

function getScoreDescription(score) {
    switch(score) {
        case "progressive":
            return "Text about why you are progressive.";
        case "typical":
            return "Text about why you are typical.";
        case "conservative":
            return "Text about why you are conservative.";
        default:
            throw new Error("Invalid score: " + score);
    }
}

function getValueForNumericalAnswer(answer, index) {
    return 
}