import React, { useEffect } from 'react';
import Slider from './Slider';

export default function Feedback(props) {
    useEffect(() => {
        setTimeout(() => {
            populateWithTypewriterEffect(props.text);
          }, 0);
    });

    let questionClassName = "question";
    let menuClassName = "menu";
    if (props.isFadingOut) {
        questionClassName += " fadeOut";
        menuClassName += " fadeOut";
    }

    return (
        <>
        <div className={questionClassName}>
            <div id="teletype"></div>
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

function populateWithTypewriterEffect(text) {
    if (!text) { return; }
    
    const div = document.querySelector("#teletype");
    if (!div) { return; }

    if (div.innerHTML.length > 0) { return; }

    const chars = text.split("");

    let i = 0;
    const animation = setInterval(function() {
        const newChar = chars[i];
        if (newChar === "#") {
            div.innerHTML += "<br/><br/>";
        }
        else {
            div.innerHTML += chars[i];
        }
        i++;
        if (i == text.length) { clearInterval(animation); }
    }, 15);
}
