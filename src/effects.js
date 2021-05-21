const DURATION_TELETYPE = 25;

export function spannifyForFading(text) {
    let newText = "";
    const chars = text.split("");
    for (var i=0; i<chars.length; i++) {
        const char = chars[i];
        if (char === "#") {
            newText += "<br/><br/>";
        }
        else {
            newText += `<span class="fadeIn">${char}</span>`
        }
    }

    return newText;
}

export function fadeIn() {
    const fadeSpans = document.getElementsByClassName("fadeIn");

    for (var i=0; i<fadeSpans.length; i++) {       
        const fadeSpan = fadeSpans[i];
        fadeSpan.style.animationDelay = getAnimationDelayForIndex(i);

    }
}

function getAnimationDelayForIndex(i) {
    const ms = DURATION_TELETYPE * i;
    return `${ms}ms`;
}
