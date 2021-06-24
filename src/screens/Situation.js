import React, { useEffect } from 'react';
import { More } from '../ui/More';
import { fadeInLettersAndButtons, displaySceneContentRightAway } from '../effects/effects';
import { prepareText } from '../helpers/textUtils';
import { getIconForChapter } from '../helpers/iconUtils';
import { SITUATION_SCREEN } from '../constants/modes';
import { hasLearnMore } from '../story/game';

export default function Situation(props) {
    const title = props.title ?? "NO_TITLE";
    const Icon = getIconForChapter(props.index + 1);
    const Content = getContentForState(props);
    const hasTeletyped = props.hasTeletyped;

    useEffect(function performTeletypeEffect() {
            if (!hasTeletyped) {
                fadeInLettersAndButtons();
            }
            else {
                displaySceneContentRightAway();
            }
    });
 
    const situationClassName = (props.mode === SITUATION_SCREEN) ? "situation" : "feedback";

    return (
        <div className={situationClassName}>
            <div className="banner">
                {Icon}
                <Banner title={title}/>
            </div>
            {Content}
        </div>
    )
}

function Banner(props) {
    return (
        <div className="text">
            <h2 className="company">Capdes<span className="garnish">k</span></h2>
            <h1 className="headline">{props.title}</h1>
        </div>
    )
}

function FindOutMore(props) {
    let learnMoreClass = "findOutMore";

    if (props.learnMorePosition === null || props.isMore) {
        learnMoreClass+= " hidden";
    }
    else {
        learnMoreClass+= " teletypeFade";
    }

    return (
        <span className={learnMoreClass}>
            <a href="#" onClick={props.onClickMore}>Find out more</a>
        </span>
    )
}

function getContentForState(props) {
    if (props.isMore) {
        return <More index={props.index} isMoreAboutDecision={props.isMoreAboutDecision}/>
    }

    else {
        const split = props.body.split("#");
        const content = split.map((paragraph, index) => {
            const hasLearnMore = paragraph.includes("@");
            const prepared = prepareText(paragraph, props.onClickMore);
            if (!hasLearnMore) {
               return <SituationText key={index} text={prepared} />
            }
            else {
                return (
                    <>
                        <SituationText key={index} text={prepared} />
                        <FindOutMore onClickMore={props.onClickMore}/>
                    </>
                )
            }
        });
        return content;
    }
}

function SituationText(props) {
    return <div key={props.index} className="teletype situationText">{props.text}</div>
}

