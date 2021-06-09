import React from 'react';
import Welcome from './Welcome';
import Situation from './Situation';
import Decision from './Decision';
import Menu from '../ui/Menu';
import { WELCOME, USER_NEEDS_TO_CHOOSE, USER_MADE_DECISION } from '../constants/modes';
import { getSceneForIndex } from '../story/game';

export default function Scene(props) {
    const mode = props.mode;
    if (mode === WELCOME) { return <Welcome onClickWelcomeButton={props.onClickWelcomeButton}/> }

    const scene = getSceneForIndex(props.index);
    const gameIsOver = props.gameIsOver;
    
    let Content;

    switch(mode) {
        case USER_NEEDS_TO_CHOOSE:
            Content = getQuestionContent(props);
            break;
        case USER_MADE_DECISION:
            Content = getDecisionContent(props);
            break;
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

function getQuestionContent(props) {
    const index = props.index;
    const scene = getSceneForIndex(props.index);
    const title = scene.title;
    const body = scene.body;
    const chapterNum = index + 1;

    return (
        <Situation 
            chapterNum={chapterNum} 
            body={body} 
            title={title} 
            onChoose={props.onChoose} 
            index={index} 
        />
    )
}

function getDecisionContent(props) {
    const feedback = props.feedback;

   return (
        <Decision 
            body={feedback} 
            index={props.index} 
            currentChoice={props.currentChoice}
        />
    )
}



function getModeName(mode) {
    return mode ?? "NULL_MODE";
}