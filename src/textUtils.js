import parse from 'html-react-parser';

const PLACEHOLDER = "TEXT TK";
const LINEBREAK = "<br/><br/>";

export function prepareText(text) {
    if (text === null) { return PLACEHOLDER; }

    const spans = spannifyForFading(text);
    const parsed = parse(spans);
    return parsed;
}


function spannifyForFading(text) {
    if (!text) { return null; }
    let newText = "";
    const chars = text.split("");
    for (var i=0; i<chars.length; i++) {
        const char = chars[i];
        if (char === "#") {
            newText += LINEBREAK;
        }
        else {
            newText += `<span class="fadeIn">${char}</span>`
        }
    }

    return newText;
}