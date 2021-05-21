import Menu from './Menu';
import React, { useEffect } from 'react';
import Slider from './Slider';
import { spannifyForFading, fadeIn } from './effects';
import parse from 'html-react-parser';

export default function Question(props) {

    const fadeable = spannifyForFading(props.body);
    const parsed = parse(fadeable);
    
    useEffect(() => {
        fadeIn();
    });

    return (
        <>
        <div className="question">
            <h1 className="headline">{props.chapterNum}. {props.title}</h1>
            <div className="teletype">{parsed}</div>
        </div>

        <div className="menu">
            <Menu choices={props.choices} onChoose={(choice) => {
                props.onChoose(choice);
            }
            }/>
         <Slider
              index={props.index}
              maxIndex={props.maxIndex}
        />        
        </div>
        </>
    )
}
