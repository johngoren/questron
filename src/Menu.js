export default function Menu(props) {
    const choices = props.choices;
    const choicesAsMenu = choices.map(choice => <MenuOption choice={choice} onChoose={props.onChoose}/>);
    return choicesAsMenu;
}

function MenuOption(props) {
    return (
        <div>
            <button onClick={() => props.onChoose(props.choice.feedback)}>{props.choice.title}</button>
        </div>
    )
}