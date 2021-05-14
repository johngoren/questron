export default function Menu(props) {
    const choices = props.choices;
    const choicesAsMenu = choices.map(choice, index => <MenuOption choice={choice} onChoose={props.onChoose} index={index}/>);
    return choicesAsMenu;
}

function MenuOption(props) {
    return (
        <div>
            <button onClick={() => props.onChoose(index)}>{props.choice.title}</button>
        </div>
    )
}