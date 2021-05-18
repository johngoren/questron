export default function Menu(props) {
    const choices = props.choices;
    const choicesAsMenu = choices.map(function(choice, index) {
        return <MenuOption choiceNum={index} choice={choice} onChoose={props.onChoose}/>
    });
    return choicesAsMenu;
}

function MenuOption(props) {
    return (
        <div key={props.index}>
            <button key={props.index} onClick={() => props.onChoose(props.choiceNum)}>{props.choice.title}</button>
        </div>
    )
}