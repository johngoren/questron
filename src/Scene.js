import React, { useState } from 'react';
import Question from './Question';
import Feedback from './Feedback';
import parse from 'html-react-parser';

export default function Scene(props) {
    const didChoose = props.didChoose;

    if (!didChoose) {
        const scene = props.scene;
        const title = scene.title;
        const body = prepareBodyText(scene.body);
        const choices = scene.choices;
        const chapterNum = props.currentIndex + 1;
        const Content = <Question chapterNum={chapterNum} title={title} body={body} choices={choices} onChoose={props.onChoose}/>
    }
    else {
        const feedback = props.feedback;
        const Content = <Feedback text={feedback} onClickFeedback={props.onClickFeedback}/>
    }
    
    return (
        {Content}
    )
}

// TODO: Instead perform this at the import to JSON stage.

function prepareBodyText(text) {
    return text
        .replaceAll("#", "</p><p>");
}