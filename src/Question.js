import Menu from './Menu';
import React, { useEffect } from 'react';
import { fadeIn } from './effects';
import { prepareText } from './textUtils';
export default function Question(props) {

    const text = prepareText(props.body);
    useEffect(fadeIn);

    return (
        <>
        <div className="question">
            <h1 className="headline">{props.chapterNum}. {props.title}</h1>
            <div className="teletype">{text}</div>
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
