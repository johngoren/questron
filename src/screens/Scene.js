import React from 'react';
import WelcomeScreen from './Welcome';
import ScoreScreen from './Score';
import Situation from './Situation';
import Decision from './Decision';
import Menu from '../ui/Menu';
import Next from '../ui/Next';

import { WELCOME_SCREEN, SCORE_SCREEN, CHOICES_SCREEN, FEEDBACK_SCREEN } from '../constants/modes';
import { getSceneForIndex } from '../story/game';

export default function Scene(props) {
    const mode = props.mode;
    if (mode === WELCOME_SCREEN) { return <WelcomeScreen onClickWelcomeButton={props.onClickWelcomeButton}/> }
    if (mode === SCORE_SCREEN) { return <ScoreScreen onClickReplay={props.onClickReplay}/> }

    let Content;
    let UIContent;

    switch(mode) {
        case CHOICES_SCREEN:
            Content = getQuestionContent(props);
            UIContent = getMenuContent(props);
            break;
        case FEEDBACK_SCREEN:
            Content = getDecisionMadeContent(props);
            UIContent = getNextContent(props);
            break;
        default:
            throw new Error("Invalid mode");
    }

    return (
        <>
        <div className="main">
            <div className="content">
                {Content}
            </div>
        </div>
        <div className="footer">
            {UIContent}
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
            title={title} 
            body={body} 
            onChoose={props.onChoose} 
            index={index} 
        />
    )
}

function getDecisionMadeContent(props) {
    const feedback = props.feedback;
    const index = props.index;
    const choiceNum = props.choiceNum;
    const isAnimatingExit = props.isAnimatingExit;

    if (index === null) {
        throw new Error("No index number available while serving decision.");
    }

    if (choiceNum === null) {
        throw new Error("No choice number available while serving decision");
    }

    return (
        <Decision 
            body={feedback} 
            index={index} 
            choiceNum={choiceNum}
            isAnimatingExit={isAnimatingExit}
        />
    )
}

function getNextContent(props) {
    return (
        <Next
            isAnimatingExit={props.isAnimatingExit}
            onClickNext={props.onClickNext}
        />
    )
}

function getMenuContent(props) {
    const mode = props.mode;
    const isAnimatingExit = props.isAnimatingExit;
    const scene = getSceneForIndex(props.index);

    return (
        <Menu
            mode={mode}
            isAnimatingExit={isAnimatingExit}
            choices={scene.choices}
            onChoose={(choice) => {
                props.onChoose(choice);
            }}
        />
    )
}

 // eslint-disable-next-line
function getModeName(mode) {
    return mode ?? "NULL_MODE";
}