import React from 'react';
import Intro from './Intro';
import Question from './Question';
import Feedback from './Feedback';
import Slider from './Slider';
import Journey from './Journey';

export default function Scene(props) {
    const scene = props.scene;
    let Content;

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

        Content = <Question chapterNum={chapterNum} body={body} title={title} choices={choices} onChoose={props.onChoose} index={index} maxIndex={maxIndex} isFeedback={false}/>
    }
    else {
        const feedback = props.feedback;
        Content = <Feedback body={feedback} onClickFeedback={props.onClickFeedback} isFadingOut={props.isFadingOut} index={props.index} maxIndex={props.maxIndex} isFeedback={true}/>
    }

    return (
        <>
        <div className="main">
            <Journey 
                answers={props.answers}            
            />
            <div className="content">
                {Content}
            </div>
        </div>
        <div className="footer">
            <Slider
              index={props.index}
              maxIndex={props.maxIndex}
            />
            </div>
        </>
    )

    
}