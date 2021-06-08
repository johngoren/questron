import React, { useEffect } from 'react';
import { fadeInLetters } from '../effects/effects';
import { prepareText } from '../helpers/textUtils';
import { getDecisionTitle } from '../story/game';

export default function Decision(props) {
    const title = getDecisionTitle(props.currentChoice, props.currentIndex);
    const text = prepareText(props.body);

    useEffect(fadeInLetters);

    let questionClassName = "question feedback";
    if (props.isFadingOut) {
        questionClassName += " fadeOut";
    }

    return (
        <div className={questionClassName}>
            <h1>{title}</h1>
            <div className="teletype">{text}</div>
        </div>
    )
}