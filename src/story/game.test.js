const game = require('./game');

test('Gets scene for index number', () => {
    const scene = game.getSceneForIndex(0);
    expect(scene).toBeTruthy();
});

test('Gets choices for index number', () => {
    const choices = game.getChoicesForIndex(0);
    expect(choices).toBeTruthy();
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
    const text = game.getMoreInfoTextForChoice(0, 0);
    expect(text).toBeTruthy();
})

test('Identifies correct index for displaying the score screen', () => {
    const initialIndex = 0;
    let gameIsOver = game.isGameOver(0);
    expect(gameIsOver).toBeFalsy();

    const scoreScreenIndex = 12;
    gameIsOver=game.isGameOver(scoreScreenIndex);
    expect(gameIsOver).toBeTruthy;

    const lastQuestionIndex = 11;
    gameIsOver=game.isGameOver(lastQuestionIndex);
    expect(gameIsOver).toBeFalsy();
})

test('Sets up correct number of initial answer blocks', () => {
    const answers = game.getInitialAnswerState();
    expect(answers.length === 12);

})