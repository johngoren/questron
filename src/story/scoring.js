import { getValueForAnswer, getRankTitle, getRankDescription } from "./game";

export function calculateScore(numericalAnswers) {
    const keywords = getKeywordsForNumbers(numericalAnswers);
    const tally = calculateTally(keywords);
    const winningTally = getWinningKeyword(tally);
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

export function getWinningKeyword(tally) {
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

export function getScoreTitle(score) {
    if (score != null) {
        return getRankTitle(score);
    }
}

export function getScoreDescription(score) {
    if (score != null) {
        return getRankDescription(score);
    }
}

function getValueForNumericalAnswer(answer, index) {
    return getValueForAnswer(answer, index);
}