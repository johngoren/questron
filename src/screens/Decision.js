import React, { useEffect } from 'react';
import { fadeInLettersAndButtons, displayAllLettersImmediately } from '../effects/effects';
import { getDecisionText, getDecisionTitle } from '../story/game';

export default function Decision(props) {
    const choiceNum = props.choiceNum;
    const index = props.index;
    const isAnimatingExit = props.isAnimatingExit;
    const hasTeletyped = props.hasTeletyped;

    if (choiceNum != null) {
        // const title = getDecisionTitle(choiceNum, index); // TODO: Get title where there is no decision icon.
        const body = getDecisionText(choiceNum, index);
        const fadingAnimationClassName = getFadingAnimationClass(isAnimatingExit);
        const blockAnimationClass = getBlockAnimationClass(isAnimatingExit);

        useEffect(            
            function performTeletypeEffect() {
                fadeInLettersAndButtons();

                // if (!hasTeletyped) {
                // }
                // else {
                //     displayAllLettersImmediately();
                // }
            }
        );
    
        return (
            <div className="question feedback">
                <img src="/images/ceo.png" alt="CEO decision" className={blockAnimationClass} /><br/>
                <div className={fadingAnimationClassName}>{body}</div>
            </div>
        )   
    }
    else {
        throw new Error("Tried to render a decision screen but was lacking needed information.");
    }
}

function getFadingAnimationClass(isAnimatingExit) {
    const baseClassName = "teletype";
    return isAnimatingExit ? baseClassName + " fadeOut" : baseClassName;
}

function getBlockAnimationClass(isAnimatingExit) {
    const baseClassName = "graphicBlock";
    return isAnimatingExit ? baseClassName + " flying" : baseClassName;
}