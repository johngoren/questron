import React, { useEffect } from 'react';
import { fadeInLettersAndButtons, displayAllLettersImmediately } from '../effects/effects';
import { getDecisionIcon } from '../helpers/iconUtils';
import { getDecisionText, getDecisionTitle } from '../story/game';

export default function Decision(props) {
    const choiceNum = props.choiceNum;
    const index = props.index;
    const isAnimatingExit = props.isAnimatingExit;
 
    if (choiceNum != null) {
        const title = getDecisionTitle(choiceNum, index);
        const icon = getDecisionIcon(choiceNum, index, title, isAnimatingExit);
        const body = getDecisionText(choiceNum, index);
        const fadingAnimationClassName = getFadingAnimationClass(isAnimatingExit);

        useEffect(            
            function performTeletypeEffect() {
                fadeInLettersAndButtons();
            }
        );
    
        return (
            <div className="question feedback">
                {icon}
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