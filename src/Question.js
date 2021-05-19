import Menu from './Menu';
import React, { useEffect } from 'react';
import parse from 'html-react-parser';

export default function Question(props) {
    
    useEffect(() => {
        setTimeout(() => {
            populateWithTypewriterEffect(props.body);
          }, 1200);
    });


    return (
        <>
        <div className="question">
            <h1 className="headline">{props.chapterNum}. {props.title}</h1>
            <div id="teletype"></div>
        </div>

        <div className="menu">
            <Menu choices={props.choices} onChoose={(choice) => {
                props.onChoose(choice);
            }
            }/>
        
        </div>
        </>
    )
}

function populateWithTypewriterEffect(text) {
    if (!text) {
        return;
    }

    const div = document.querySelector("#teletype");
    if (!div) { return; }

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