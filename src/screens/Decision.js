import React, { useEffect } from 'react';
import { fadeInLetters } from '../effects/effects';
import { getDecisionText, getDecisionTitle } from '../story/game';

export default function Decision(props) {
    const title = getDecisionTitle(props.currentChoice, props.currentIndex);
    const body = getDecisionText(props.currentChoice, props.currentIndex);
    const questionClassName = getQuestionClassName(props.isAnimatingExit);

    useEffect(fadeInLetters);


    return (
        <div className={questionClassName}>
            <h1>{title}</h1>
            <div className="teletype">{body}</div>
        </div>
    )
}

function getQuestionClassName(isAnimatingExit) {
    const baseClassName = "question feedback";
    return isAnimatingExit ? baseClassName + " fadeOut" : baseClassName;
}