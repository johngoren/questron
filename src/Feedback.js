import React, { useEffect } from 'react';

export default function Feedback(props) {
    useEffect(() => {
        setTimeout(() => {
            populateWithTypewriterEffect(props.text);
          }, 0);
    });

    return (
        <>
        <div className="question">
            <div id="teletype"></div>
        </div>
        <div class="menu">
            <div className="menuOption">
                <button onClick={props.onClickFeedback}>Next</button>
            </div>
        </div>
        </>
    )
}

function populateWithTypewriterEffect(text) {
    if (!text) { return; }

    const div = document.querySelector("#teletype");
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
