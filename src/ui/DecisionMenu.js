export default function DecisionMenu(props) {
    const choices = props.choices;
    const ChoicesAsMenu = choices.map(function(choice, index) {
        return <DecisionMenuOption key={index} choiceNum={index} choice={choice} onChoose={props.onChoose} onClickMoreAboutDecision={props.onClickMoreAboutDecision} />
    });
    return ChoicesAsMenu;  
}

function DecisionMenuOption(props) {
    return (
        <div key={props.choiceNum} className={'menuOption button'} onClick={() => props.onChoose(props.choiceNum)}>
            <DecisionLabel choice={props.choice} choiceNum={props.index} />
            <LearnMoreButton index={props.index} choiceNum={props.choiceNum} onClickMoreAboutDecision={props.onClickMoreAboutDecision}/>
        </div>
    )
}

function DecisionLabel(props) {
    return (
        <span key={props.index}>{props.choice.label}</span>
    )
}

function LearnMoreButton(props) {
    return (
        <>
            <span className="learnMore" onClick={props.onClickMoreAboutDecision}>Learn More</span>
        </>
    )
}