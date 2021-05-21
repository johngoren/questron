import React, { useEffect } from 'react';
import Slider from './Slider';

export default function Feedback(props) {
    let questionClassName = "question";
    let menuClassName = "menu";
    if (props.isFadingOut) {
        questionClassName += " fadeOut";
        menuClassName += " fadeOut";
    }

    return (
        <>
        <div className={questionClassName}>
            <div className="teletype">{props.body}</div>
        </div>
        <div class={menuClassName}>
            <div className="menuOption">
                <button onClick={props.onClickFeedback}>Next</button>
            </div>
            <Slider
              index={props.index}
              maxIndex={props.maxIndex}
            />       
        </div>
        </>
    )
}