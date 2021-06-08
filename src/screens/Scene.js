import React from 'react';
import Welcome from './Welcome';
import Situation from './Situation';
import Decision from './Decision';
import Menu from '../ui/Menu';

export default function Scene(props) {
    const welcome = props.welcome;
    if (welcome) {
        return (
            <Welcome/>
        )
    }

    const scene = props.scene;
    const didChoose = props.didChoose;
    const index = props.index;
    const gameIsOver = props.gameIsOver;
    const currentChoice = props.currentChoice;
    
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
            />
    }
    else {
        const feedback = props.feedback;

        // TODO: Incorporate user choice as title.

        Content = 
            <Decision 
                body={feedback} 
                index={props.index} 
                currentChoice={currentChoice}
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
                isAnimatingExit={props.isAnimatingExit}
                isFeedback={didChoose}
                choices={scene.choices}
                onChoose={(choice) => {
                    props.onChoose(choice);
                }}
                onClickFeedback={props.onClickFeedback} 
                gameIsOver={gameIsOver}
            />
            </div>
        </>
    )   
}
