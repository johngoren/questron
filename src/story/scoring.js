import { getValueForAnswer } from "./game";

export function calculateScore(numericalAnswers) {
    const keywords = getKeywordsForNumbers(numericalAnswers);
    const tally = calculateTally(keywords);
    const winningTally = getWinningTally(tally);
    return winningTally;
}

export function getKeywordsForNumbers(numericalAnswers) {
    return numericalAnswers.map(function(choiceNum, index) {
        return getValueForNumericalAnswer(choiceNum, index);
    })
}


export function calculateTally(keywordAnswers) {
    if (keywordAnswers != null) {
        return keywordAnswers.reduce((tally, keyword) => {
            if (keyword != null) {
                tally[keyword] = (tally[keyword] || 0) + 1;
            }
            return tally;
        }, {})
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
    if (score != null) {
        const title = getScoreTitle(score);
        const body = getScoreDescription(score);
        return {
            title: title,
            body: body
        }   
    }
    else {
        throw new Error("Sco")
    }
}

function getScoreTitle(score) {
    if (score != null) {
        return score.toUpperCase();
    }
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
    return getValueForAnswer(answer, index);
}