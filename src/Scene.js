import React from 'react';
import Intro from './Intro';
import Question from './Question';
import Feedback from './Feedback';
import Slider from './Slider';
import Journey from './Journey';
import Menu from './Menu';

export default function Scene(props) {
    const scene = props.scene;
    const didChoose = props.didChoose;
    const answers = props.answers;

    let Content;

    if (props.shouldShowSceneIntro) {
        if (props.index > 0) {
            props.removeIntroAfterDelay();
            return <Intro text={scene.title}/>  
        }
    }

    if (!didChoose) {
        const title = scene.title;
        const body = scene.body;
        const chapterNum = props.index + 1;
        const index = props.index;
        const maxIndex = props.maxIndex;

        Content = <Question chapterNum={chapterNum} body={body} title={title} onChoose={props.onChoose} index={index} maxIndex={maxIndex}/>
    }
    else {
        const feedback = props.feedback;
        Content = <Feedback body={feedback} isFadingOut={props.isFadingOut} index={props.index} maxIndex={props.maxIndex}/>
    }

    return (
        <>
        <div className="main">
            <Journey 
                answers={answers}            
            />
            <div className="content">
                {Content}
            </div>
        </div>
        <div className="footer">
            <Menu
                isFeedback={didChoose}
                choices={scene.choices}
                onChoose={(choice) => {
                    props.onChoose(choice);
                }}
                onClickFeedback={props.onClickFeedback} 
            />
            <Slider
                index={props.index}
                isFadingOut={props.isFadingOut}
                maxIndex={props.maxIndex}
            />
            </div>
        </>
    )

    
}