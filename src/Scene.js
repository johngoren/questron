import React from 'react';
import Intro from './Intro';
import Question from './Question';
import Feedback from './Feedback';

export default function Scene(props) {
    const scene = props.scene;
  
    if (props.shouldShowSceneIntro) {
        if (props.index > 0) {
            props.removeIntroAfterDelay();
            return <Intro text={scene.title}/>  
        }
    }

    if (!props.didChoose) {
        const title = scene.title;
        const body = scene.body;
        const choices = scene.choices;
        const chapterNum = props.index + 1;
        const index = props.index;
        const maxIndex = props.maxIndex;

        return <Question chapterNum={chapterNum} body={body} title={title} choices={choices} onChoose={props.onChoose} index={index} maxIndex={maxIndex}/>
    }
    else {
        const feedback = props.feedback;
        return <Feedback text={feedback} onClickFeedback={props.onClickFeedback} isFadingOut={props.isFadingOut} index={props.index} maxIndex={props.maxIndex}/>
    }

    
}