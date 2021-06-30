// Teletype effect

const BASE_DELAY = 0;
const DURATION_TELETYPE = 5;

export function fadeInLettersAndButtons() {
    const fadeSpans = document.getElementsByClassName("teletypeFade");

    for (let i=0; i<fadeSpans.length; i++) {       
        const fadeSpan = fadeSpans[i];
        fadeSpan.style.animationDelay = getAnimationDelayForIndex(i);
    }

    fadeInButtons(fadeSpans.length * DURATION_TELETYPE);
}
 
export function bouncyAnimation() {
    setTimeout(function() {
        const block = document.getElementsByClassName("graphicBlock")[0];
        if (block != null) {
            block.classList.remove("pop");
            block.classList.add("bouncy");    
        }
    }, 1100);
}

function getAnimationDelayForIndex(i) {
    const ms = (DURATION_TELETYPE * i) + BASE_DELAY;
    return `${ms}ms`;
}

function fadeInButtons(initialDelay) {
    const buttons = document.getElementsByClassName("decisionOption");
    for (let i=0; i<buttons.length; i++) {
        const button = buttons[i];
        const newDelayMs = initialDelay + (i * 1000);
        const newDelayValue = `${newDelayMs}ms`; 
        button.style.animation = "fadeIn 2s ease-in-out forwards";
        button.style.animationDelay = newDelayValue;
    }
}

export function displaySceneContentRightAway() {
    const spans = document.getElementsByClassName("teletypeFade");
    for (const span of spans) {
        span.style.animation = "none";
        span.style.transition = "none";
        span.style.opacity = 1.0;
    }
    fadeInButtons(0);
}

export function scootLearnMoreIntoPlace(position) {
    const learnMoreClass = "findOutMore";
    const learnMore = document.getElementsByClassName(learnMoreClass);
    if (learnMore.length > 0) {
        const graphs = document.getElementsByClassName("bodyText");
        if (graphs.length > 0) {
            graphs[position].append(learnMore);
        }
    }
}