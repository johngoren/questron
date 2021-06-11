import React, { useEffect } from 'react';
import { fadeInLetters } from '../effects/effects';
import { getDecisionText, getDecisionTitle } from '../story/game';

export default function Decision(props) {
    const choiceNum = props.choiceNum;
    const index = props.index;

    if (choiceNum != null) {
        const title = getDecisionTitle(choiceNum, index);
        const body = getDecisionText(choiceNum, index);
        const questionClassName = getQuestionClassName(props.isAnimatingExit);
    
        useEffect(fadeInLetters);
    
        return (
            <div className={questionClassName}>
                <h1>{title}</h1>
                <div className="teletype">{body}</div>
            </div>
        )   
    }
    else {
        throw new Error("Tried to render a decision screen but was lacking needed information.");
    }

}

function getQuestionClassName(isAnimatingExit) {
    const baseClassName = "question feedback";
    return isAnimatingExit ? baseClassName + " fadeOut" : baseClassName;
}