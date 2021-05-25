import React, { useEffect } from 'react';
import { fadeIn } from './effects';
import { prepareText } from './textUtils';

export default function Feedback(props) {
    const text = prepareText(props.body);

    useEffect(fadeIn);

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