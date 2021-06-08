import React, { useEffect } from 'react';
import { fadeInLetters } from '../effects/effects';
import { prepareText } from '../helpers/textUtils';

export default function Decision(props) {
    const text = prepareText(props.body);

    useEffect(fadeInLetters);

    let questionClassName = "question feedback";
    if (props.isFadingOut) {
        questionClassName += " fadeOut";
    }

    return (
        <div className={questionClassName}>
            <div className="teletype">{text}</div>
        </div>
    )
}