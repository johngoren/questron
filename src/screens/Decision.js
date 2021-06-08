import React, { useEffect } from 'react';
import { fadeInLetters } from '../effects/effects';
import { prepareText } from '../helpers/textUtils';
import { getDecisionTitle } from '../story/game';

export default function Decision(props) {
    const title = getDecisionTitle(props.currentChoice, props.currentIndex);
    const text = prepareText(props.body);
    const questionClassName = getQuestionClassName(props.isAnimatingExit);

    useEffect(fadeInLetters);


    return (
        <div className={questionClassName}>
            <h1>{title}</h1>
            <div className="teletype">{text}</div>
        </div>
    )
}

function getQuestionClassName(isAnimatingExit) {
    const baseClassName = "question feedback";
    return isAnimatingExit ? baseClassName + " fadeOut" : baseClassName;
}