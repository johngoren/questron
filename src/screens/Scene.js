import React from 'react';
import WelcomeScreen from './Welcome';
import ScoreScreen from './Score';
import Situation from './Situation';
import Decision from './Decision';
import DecisionMenu from '../ui/DecisionMenu';
import Next from '../ui/Next';
import Back from '../ui/Back';

import { WELCOME_SCREEN, SCORE_SCREEN, SITUATION_SCREEN, DECISION_SCREEN } from '../constants/modes';
import { getSceneForIndex } from '../story/game';

// TODO: UseEffect to 1) move Learn More into proper position, 2) hide if there was none found.

export default function Scene(props) {
    const mode = props.mode;
    if (mode === WELCOME_SCREEN) { return <WelcomeScreen onClickWelcomeButton={props.onClickWelcomeButton}/> }
    if (mode === SCORE_SCREEN) { return <ScoreScreen answers={props.answers} onClickReplay={props.onClickReplay}/> }

    let Content;
    let UIContent;

    switch(mode) {
        case SITUATION_SCREEN:
            Content = getQuestionContent(props);
            UIContent = getMenuContent(props);
            break;
        case DECISION_SCREEN:
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
    const scene = getSceneForIndex(props.index);
    const title = scene.title;
    const body = scene.body;

    return (
        <Situation 
            index={props.index} 
            mode={props.mode}
            title={title} 
            body={body} 
            hasTeletyped={props.hasTeletyped}
            onChoose={props.onChoose} 
            onClickMore={props.onClickMore}
            isMore={props.isMore}
            isMoreAboutDecision={props.isMoreAboutDecision}
        />
    )
}

function getDecisionMadeContent(props) {
    if (props.index === null) {
        throw new Error("No index number available while serving decision.");
    }

    if (props.choiceNum === null) {
        throw new Error("No choice number available while serving decision");
    }

    return (
        <Decision 
            body={props.feedback} 
            index={props.index} 
            choiceNum={props.choiceNum}
            iconNum={props.iconNum}
            isAnimatingExit={props.isAnimatingExit}
            hasTeletyped={props.hasTeletyped}
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
    if (props.isMore) {
        return (
            <Back
                onClickBack={props.onClickBack}
            />
        )
    }
    else {
        const scene = getSceneForIndex(props.index);

        return (
            <DecisionMenu
                index={props.index}
                mode={props.mode}
                isMore={props.isMore}
                isAnimatingExit={props.isAnimatingExit}
                choices={scene.choices}
                onChoose={(choice) => {
                    props.onChoose(choice);
                }}
                onClickMoreAboutDecision={props.onClickMoreAboutDecision}
            />
        )
   
    }
}

 // eslint-disable-next-line
function getModeName(mode) {
    return mode ?? "NULL_MODE";
}