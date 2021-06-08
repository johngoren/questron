import React from 'react';
import Situation from './Situation';
import Decision from './Decision';
import Slider from '../ui/Slider';
import Menu from '../ui/Menu';

export default function Scene(props) {
    const scene = props.scene;
    const didChoose = props.didChoose;
    const index = props.index;
    const maxIndex = props.maxIndex;
    const gameIsOver = props.gameIsOver;
    
    let Content;

    if (!didChoose) {
        const title = scene.title;
        const body = scene.body;
        const chapterNum = props.index + 1;

        Content = 
            <Situation 
                chapterNum={chapterNum} 
                body={body} 
                title={title} 
                onChoose={props.onChoose} 
                index={index} 
                maxIndex={maxIndex}
            />
    }
    else {
        const feedback = props.feedback;

        // TODO: Incorporate user choice as title.

        Content = 
            <Decision 
                body={feedback} 
                isEnding={props.isEnding} 
                index={props.index} 
                maxIndex={props.maxIndex}
            />
    }

    return (
        <>
        <div className="main">
            <div className="content">
                {Content}
            </div>
        </div>
        <div className="footer">
            <Menu
                isEnding={props.isEnding}
                isFeedback={didChoose}
                choices={scene.choices}
                onChoose={(choice) => {
                    props.onChoose(choice);
                }}
                onClickFeedback={props.onClickFeedback} 
                gameIsOver={gameIsOver}
            />
            <Slider
                index={props.index}
                isEnding={props.isEnding}
                maxIndex={props.maxIndex}
            />
            </div>
        </>
    )   
}
