import { hasLearnMore } from '../story/game';

export default function DecisionMenu(props) {
    const ChoicesAsMenu = props.choices.map(function(choice, index) {
        return <DecisionMenuOption index={props.index} key={index} choiceNum={index} choice={choice} onChoose={props.onChoose} onClickMoreAboutDecision={props.onClickMoreAboutDecision} />
    });
    return ChoicesAsMenu;  
}

function DecisionMenuOption(props) {
    return (
        <div className="decisionOption">
            <button className="decisionButton" key={props.index} onClick={() => props.onChoose(props.choiceNum)}>
                {props.choice.label}
            </button>

            <MoreInfoButton index={props.index} choiceNum={props.choiceNum} onClickMoreAboutDecision={props.onClickMoreAboutDecision}/>
        </div>
    )
}


function MoreInfoButton(props) {
    const handleClick = e => {
        // e.stopPropagation();
        props.onClickMoreAboutDecision(props.choiceNum);
    }

    const visibilityClass = getVisibilityClassForLearnMoreButton(props);

    return (
        <button onClick={handleClick} className="moreInfoButton"><img className="info" src="/images/info-on.png"/></button>
    )
}

function getVisibilityClassForLearnMoreButton(props) {
    // const hasMore = hasLearnMore(props.choiceNum, props.index);
    const hasMore = true;
    return hasMore ? "learnMore" : "hidden";
}

