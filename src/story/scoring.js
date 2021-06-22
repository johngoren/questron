export function calculateScore(answers) {
    const tally = calculateTally(answers);
    const winningTally = getWinningTally(tally);
    return winningTally;
}

export function getInitialTally() {
    return {
        "progressive": 0,
        "typical": 0,
        "conservative": 0
    }
}

export function calculateTally(answers) {
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
