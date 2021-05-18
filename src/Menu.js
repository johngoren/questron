export default function Menu(props) {
    const choices = props.choices;
    const choicesAsMenu = choices.map(function(choice, index) {
        return <MenuOption key={index} choiceNum={index} choice={choice} onChoose={props.onChoose}/>
    });
    return choicesAsMenu;
}

function MenuOption(props) {
    const index = props.choiceNum;

    return (
        <div key={index} className={'menuOption button' + index}>
            <button key={props.index} onClick={() => props.onChoose(props.choiceNum)}>{props.choice.title}</button>
        </div>
    )
}