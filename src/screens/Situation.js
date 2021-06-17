import React, { useEffect } from 'react';
import { fadeInLetters } from '../effects/effects';
import { prepareText, getLearnMorePositionFromText } from '../helpers/textUtils';
import { getIconForChapter } from '../helpers/iconUtils';

export default function Situation(props) {
    const title = props.title ?? "NO_TITLE";
    const learnMorePosition = getLearnMorePositionFromText(props.body);
    const text = prepareText(props.body);
    const Icon = getIconForChapter(props.chapterNum);
    useEffect(fadeInLetters);
    useEffect(() => {
        if (learnMorePosition != null) {
            // TODO: Scoot into correct place if it belongs higher up.
        }
    });

    return (
        <div className="question">
            <div className="banner">
                {Icon}
                <div className="text">
                    <h2 className="company">Capdes<span className="garnish">k</span></h2>
                    <h1 className="headline">{title}</h1>
                </div>
            </div>
          
            <div className="teletype">{text}</div>
            <FindOutMore
                learnMorePosition={learnMorePosition}
                onClickMore={props.onClickMore}
            />
        </div>
    )
}

function FindOutMore(props) {
    let learnMoreClass = "findOutMore";

    if (props.learnMorePosition === null) {
        learnMoreClass+= " hidden";
    }
    else {
        learnMoreClass+= " fadeIn";
    }

    return (
        <span className={learnMoreClass}>
            <a href="#" onClick={props.onClickMore}>Find Out More</a>
        </span>
    )
}

