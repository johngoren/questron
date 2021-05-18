import React from 'react';
import Intro from './Intro';
import Question from './Question';
import Feedback from './Feedback';

export default function Scene(props) {
    const scene = props.scene;

    if (props.shouldShowSceneIntro) {
        props.removeIntroAfterDelay();
        return <Intro text={scene.title}/>
    }

    if (!props.didChoose) {
        const title = scene.title;
        const body = prepareBodyText(scene.body);
        const choices = scene.choices;
        const chapterNum = props.index + 1;
        return <Question chapterNum={chapterNum} title={title} body={body} choices={choices} onChoose={props.onChoose}/>
    }
    else {
        const feedback = props.feedback;
        return <Feedback text={feedback} onClickFeedback={props.onClickFeedback}/>
    }
    
}

// TODO: Instead perform this at the import to JSON stage.

function prepareBodyText(text) {
    return text
        .replaceAll("#", "</p><p>");
}