// Teletype effect

const DURATION_TELETYPE = 15;

export function fadeIn() {
    const fadeSpans = document.getElementsByClassName("fadeIn");

    for (let i=0; i<fadeSpans.length; i++) {       
        const fadeSpan = fadeSpans[i];
        fadeSpan.style.animationDelay = getAnimationDelayForIndex(i);
    }
}

function getAnimationDelayForIndex(i) {
    const ms = DURATION_TELETYPE * i;
    return `${ms}ms`;
}
