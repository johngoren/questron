import { getValueForAnswer } from "./game";

export function calculateScore(answers) {
    const tally = {
        "progressive": 0,
        "typical": 0,
        "conservative": 0
    }

    for (let i=0; i<answers.length; i++) {
        const answer = answers[i];
        const value = getScoreValueForAnswer(answer);

        switch(value) {
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
                throw new Error("Invalid answer:" + value);
        }
    }

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

function getScoreValueForAnswer(answerNum) {
    return getValueForAnswer(answerNum);
}