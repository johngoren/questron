import Menu from './Menu';
import React, { useEffect } from 'react';
import parse from 'html-react-parser';

export default function Question(props) {
    
    useEffect(() => {
        setTimeout(() => {
            populateWithTypewriterEffect(props.body);
          }, 3000);
    });


    return (
        <div>
            
        <h1 className="headline">{props.chapterNum}. {props.title}</h1>
        <div id="teletype"></div>
        
        <Menu choices={props.choices} onChoose={(choice) => {
            props.onChoose(choice);
        }
        }/>
        
        </div>

    )
}

function populateWithTypewriterEffect(text) {
    const div = document.querySelector("#teletype");
    const chars = text.split("");

    let i = 0;
    const animation = setInterval(function() {
        div.innerHTML += chars[i];
        i++;
        if (i == text.length) { clearInterval(animation); }
    }, 25);
}