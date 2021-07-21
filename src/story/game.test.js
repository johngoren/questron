const game = require('./game');
const scoring = require('./scoring');
const textUtils = require('../helpers/textUtils');
const analyticsUtils = require('../helpers/analyticsUtils');

test('Gets scene for index number', () => {
    const scene = game.getSceneForIndex(0);
    expect(scene).toBeTruthy();
});

test('Gets choices for index number', () => {
    const choices1 = game.getChoicesForIndex(0);
    expect(choices1).toBeTruthy();

    const choices2 = game.getChoicesForIndex(1);
    expect(choices2).toBeTruthy();
});

test('Gets decision text for choice and index', () => {
    const text = game.getDecisionText(2, 0);
    expect(text).toBeTruthy();
});

test('Gets More Info text for a scene', () => {
    const text = game.getMoreInfoTextForIndex(1);
    expect(text).toBeTruthy();
});


test('Gets More Info text for a choice', () => {
    const text = game.getMoreInfoTextForChoice(0, 2);
    expect(text).toBeTruthy();
});


test('Identifies correct index for displaying the score screen', () => {
    let gameIsOver = game.isGameOver(0);
    expect(gameIsOver).toBeFalsy();

    const scoreScreenIndex = 13;
    gameIsOver=game.isGameOver(scoreScreenIndex);
    expect(gameIsOver).toBeTruthy();

    const lastQuestionIndex = 12;
    gameIsOver=game.isGameOver(lastQuestionIndex);
    expect(gameIsOver).toBeFalsy();
})

test('Sets up correct number of initial answer blocks', () => {
    const answers = game.getInitialAnswerState();
    expect(answers.length === 12);
})

test('Checks whether decisions have learn more', () => {
    const noOption = game.hasLearnMore(0, 0);
    const hasOption = game.hasLearnMore(0, 2);

    expect(noOption).toBeFalsy();
    expect(hasOption).toBeTruthy();
})

test('Calculates score', () => {
    const ideology = game.getValueForAnswer(0, 2);
    expect(ideology).toBe("progressive");

    const numericalAnswers = [0, 0, 2, 1, 2, 0, 2];
    const asWordValues = scoring.getKeywordsForNumbers(numericalAnswers);
    expect(asWordValues).toBeTruthy();

    const ideologicalAnswers = ["progressive", "typical", null, "conservative", "conservative"];
    let tally = scoring.calculateTally(ideologicalAnswers);

    expect(tally["conservative"]).toBe(2);
    expect(tally["progressive"]).toBe(1);

    const winner = scoring.getWinningKeyword(tally);
    expect(winner).toBe("conservative");

    const title1 = game.getRankTitle("conservative");
    const title2 = game.getRankTitle("progressive");

    expect(title1).toBeTruthy();
    expect(title2).toBeTruthy();

})

test('Removes widowed text from headlines', () => {
    const headline = "Hello there Clara!";
    const noWidows = textUtils.prepareHeadline(headline);
    expect(noWidows).toContain("Clara");
    expect(noWidows).toContain('\xa0');
})

// Analytics

test('Get question for ID', () => {
    const questionId = 1;
    const question = game.getQuestionForId(questionId);
    expect(question).toBeTruthy();
    expect(question.title).toContain("Welcome");
})

test('Reports about a new question reached', () => {
    const questionId = 1;
    const report = analyticsUtils.getReportForNewQuestionReached(questionId);
    console.log(report);
    expect(report).toBeTruthy();
    expect(report.category).toEqual(analyticsUtils.EVENT_CATEGORY_NEW_QUESTION_REACHED);    // "Capdesk Startup Game"
    expect(report.action).toEqual(analyticsUtils.ACTION_NEW_QUESTION_REACHED);
    expect(report.value).toEqual("Welcome to the Game of Equity");
})

test('Reports about a choice made', () => {
    const choice = game.getDecision(0, 1);
    expect(choice.label).toContain("CEO");
})

test('Reports about a score awarded', () => {
    const score = "progressive";
    const report = analyticsUtils.getReportForScoreAwarded(score);
    expect(report).toBeTruthy();
    expect(report.category).toEqual(analyticsUtils.EVENT_CATEGORY_SCORE_AWARDED);
    expect(report.value).toEqual("progressive");
})
