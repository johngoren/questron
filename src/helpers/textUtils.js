import parse from 'html-react-parser';

const PLACEHOLDER = "TEXT TK";
const NEW_PARAGRAPH = "<br/><br/>";

export function prepareText(text, onClick) {
    if (text === null) { return PLACEHOLDER; }

    const spans = spannifyForFading(text);
    const parsed = parse(spans);
    return parsed;
}

export function spannifyForFading(text, onClick) {
    if (!text) { return null; }
    let newText = "";
    const chars = text.split("");
    for (var i=0; i<chars.length; i++) {
        const char = chars[i];
        if (char === "#") {
            newText += NEW_PARAGRAPH;
        }
        else if (char === "@") {
            // Do nothing
        }
        else {
            newText += `<span class="teletypeFade">${char}</span>`
        }
    }

    return newText;
}

export function addLinebreaksToText(text) {
    const withLineBreaks = text.replace("#", NEW_PARAGRAPH);
    return parse(withLineBreaks);
}

export function getLearnMorePositionFromText(text) {

    if (text != null) {
        const hasAnchor = text.includes("@");
        if (!hasAnchor) {
            return null;
        }
        const split = text.split("#");
        let position = null;
        for (let i=0; i<split.length; i++) {
            if (split[i].includes("@")) {
                console.log(`Found it at ${i}`);
                position = i;
            }
        }
        return position;
    }
    else {
        throw new Error("Tried to learn position from null text");
    }
}