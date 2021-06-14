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
    const text = game.getDecisionText(0, 0);
    expect(text).toBeTruthy();
});

test('Gets More Info text for a scene', () => {
    const text = game.getSupplementalTextForIndex(0);
    expect(text).toBeTruthy();
});

test('Gets More Info text for a choice', () => {
    const text = game.getSupplementalTextForChoice(0, 0);
    expect(text).toBeTruthy();
})