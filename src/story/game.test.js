const game = require('./game');

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

test('Checks whether a particular choice has More Info', () => {
    const first = game.hasLearnMore(0, 0);
    const second = game.hasLearnMore(2, 0);

    const firstCheck = game.hasLearnMore(first);
    const secondCheck = game.hasLearnMore(second);

    expect(firstCheck).toBeFalse();
    expect(secondCheck).toBeTrue();
});

test('Gets More Info text for a choice', () => {
    const text = game.getMoreInfoTextForChoice(0, 2);
    expect(text).toBeTruthy();
    console.log(text);
})

test('Identifies correct index for displaying the score screen', () => {
    let gameIsOver = game.isGameOver(0);
    expect(gameIsOver).toBeFalsy();

    const scoreScreenIndex = 12;
    gameIsOver=game.isGameOver(scoreScreenIndex);
    expect(gameIsOver).toBeTruthy();

    const lastQuestionIndex = 11;
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