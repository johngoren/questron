import React from 'react';
import Question from './Question';
import Feedback from './Feedback';
import Slider from './Slider';
import Menu from './Menu';

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
            <Question 
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
            <Feedback 
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
