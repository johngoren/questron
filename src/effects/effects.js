// Teletype effect

const DURATION_TELETYPE = 15;

export function fadeInLettersAndButtons() {
    const fadeSpans = document.getElementsByClassName("teletypeFade");

    for (let i=0; i<fadeSpans.length; i++) {       
        const fadeSpan = fadeSpans[i];
        fadeSpan.style.animationDelay = getAnimationDelayForIndex(i);
    }

    fadeInButtons(fadeSpans.length * DURATION_TELETYPE);
}
 

function getAnimationDelayForIndex(i) {
    const ms = DURATION_TELETYPE * i;
    return `${ms}ms`;
}

function fadeInButtons(initialDelay) {
    const buttons = document.getElementsByClassName("menuOption");
    for (let i=0; i<buttons.length; i++) {
        const button = buttons[i];
        const newDelayMs = initialDelay + (i * 1000);
        const newDelayValue = `${newDelayMs}ms`; 
        button.style.animation = "fadeIn 2s ease-in-out forwards";
        button.style.animationDelay = newDelayValue;
    }
}

export function displayAllLettersImmediately() {
    const spans = document.getElementsByClassName("teletypeFade");
    for (const span of spans) {
        span.style.animation = "none";
        span.style.transition = "none";
        span.style.opacity = 1.0;
    }
    fadeInButtons(0);
}