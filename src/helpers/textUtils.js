import parse from 'html-react-parser';

const PLACEHOLDER = "TEXT TK";
const NEW_PARAGRAPH = "<br/><br/>";

export function prepareText(text) {
    if (text === null) { return PLACEHOLDER; }

    const spans = spannifyForFading(text);
    const parsed = parse(spans);
    return parsed;
}

export function prepareHeadline(text) {
    if (text === null) { return PLACEHOLDER; }

    const split = text.split(" ");
    const noWidows = split.map((word, index) => {
        switch(index) {
            case 0:
                return word;
            case split.length - 1:
                return `\xa0${word}`;   // nbsp
            default:
                return ` ${word}`;
        }
    }).join('');
    return noWidows;
}

export function spannifyForFading(text) {
    if (!text) { return null; }
    let newText = "";
    let italicsIsOn = false;
    const chars = text.split("");
    for (var i=0; i<chars.length; i++) {
        const char = chars[i];
        switch(char) {
            case "#":
                newText += NEW_PARAGRAPH;
                break;
            case "*":
                if (!italicsIsOn) {
                    newText += "<em>";
                    italicsIsOn = true;
                }
                else {
                    newText += "</em>";
                    italicsIsOn = false;
                }
                break;
            case "@":
                break;
            default:
                newText += `<span class="teletypeFade">${char}</span>`
        }
    }
    return `${newText}`
}

export function addLinebreaksToText(text) {
    const withLineBreaks = text.replace("#", NEW_PARAGRAPH);
    return parse(withLineBreaks);
}