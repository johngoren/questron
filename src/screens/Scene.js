import React from 'react';
import Welcome from './Welcome';
import Situation from './Situation';
import Decision from './Decision';
import Menu from '../ui/Menu';
import { WELCOME, NEW_SITUATION, USER_MADE_DECISION, GAME_IS_ON_LAST_QUESTION } from '../constants/modes';
import { getSceneForIndex } from '../story/game';

export default function Scene(props) {
    const mode = props.mode;
    if (mode === WELCOME) { return <Welcome onClickWelcomeButton={props.onClickWelcomeButton}/> }

    const scene = getSceneForIndex(props.index);
    const gameIsOver = props.gameIsOver;
    
    let Content;

    switch(mode) {
        case NEW_SITUATION, GAME_IS_ON_LAST_QUESTION:
            Content = getQuestionContent(props);
            break;
        case USER_MADE_DECISION:
            Content = getDecisionContent(props);
            break;
        default:
            throw new Error("Invalid mode.");
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

    Content = (
        <Decision 
            body={feedback} 
            index={props.index} 
            currentChoice={currentChoice}
        />
    )
}

function getGameOverContent(props) {
    // TODO bring this in.
}