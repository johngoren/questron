import React, { useEffect } from 'react';
import FindOutMore from '../ui/FindOutMore';
import More from '../ui/More';
import { fadeInLettersAndButtons, displaySceneContentRightAway } from '../effects/effects';
import { prepareText, prepareHeadline } from '../helpers/textUtils';
import { getNumberIcon } from '../helpers/iconUtils';
import { SITUATION_SCREEN } from '../constants/modes';

export default function Situation(props) {
    const title = props.title ?? "NO_TITLE";
    const Icon = getNumberIcon(props.index, true);
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
    const noWidows = prepareHeadline(props.title);

    return (
        <div className="text">
            <h1 className="headline">{noWidows}</h1>
        </div>
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
               return <p key={index}><SituationText key={index} text={prepared} /></p>
            }
            else {
                return (
                    <p key={index}>
                        <SituationText key={index} text={prepared} />
                        <FindOutMore onClickMore={props.onClickMore}/>
                    </p>
                )
            }
        });
        return content;
    }
}

function SituationText(props) {
    return <span key={props.index} className="teletype situationText">{props.text}</span>
}

