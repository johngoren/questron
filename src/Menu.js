export default function Menu(props) {
    if (props.isFeedback) {
        return (
            <div className="menuOption">
                <button onClick={props.onClickFeedback}>Next</button>
            </div>  
        )
    }
    else {
        const choices = props.choices;
        const ChoicesAsMenu = choices.map(function(choice, index) {
            return <MenuOption key={index} choiceNum={index} choice={choice} onChoose={props.onChoose}/>
        });
        return ChoicesAsMenu;  
    }
}

function MenuOption(props) {
    const index = props.choiceNum;

    return (
        <div key={index} className={'menuOption button' + index}>
            <button key={props.index} onClick={() => props.onChoose(props.choiceNum)}>{props.choice.title}</button>
        </div>
    )
}

