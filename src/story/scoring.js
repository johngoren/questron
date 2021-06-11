export const NO_ANSWER_YET = -1;
export const PROGRESSIVE = 1;
export const TYPICAL = 2;
export const CONSERVATIVE = 3;

export function calculateScore(answers) {
    const tally = [null, 0, 0, 0];

    for (let i=0; i<answers.length; i++) {
        const answer = answers[i];
        if (answer < 1) {
            throw new Error("Invalid answers found during scoring.");
        }
        const category = answer + 1;
        tally[category]++;
    }

    let highestScoreFound = 0;
    let categoryWithHighestScore = 0;

    for (let j=1; j<tally.length; j++) {
        const scoreForThisCategory = tally[j];
        if (scoreForThisCategory > highestScoreFound) {
            highestScoreFound = scoreForThisCategory;
            categoryWithHighestScore = j;
        }
    }

    return categoryWithHighestScore;
}