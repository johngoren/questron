import React, { useEffect } from 'react';
import Banner from '../ui/Banner';
import FindOutMore from '../ui/FindOutMore';
import More from '../ui/More';
import { fadeInLettersAndButtons, displaySceneContentRightAway } from '../effects/effects';
import { prepareText } from '../helpers/textUtils';
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


function getContentForState(props) {
    if (props.isMore) {
        return <More index={props.index} isMoreAboutDecision={props.isMoreAboutDecision}/>
    }

    else {
        const split = props.body.split("#");
        const Content = split.map((paragraph, index) => {
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
        return (
            <div className="body">
                {Content}
            </div>
        );
    }
}

function SituationText(props) {
    return <span key={props.index} className="teletype">{props.text}</span>
}

