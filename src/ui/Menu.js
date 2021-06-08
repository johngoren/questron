export default function Menu(props) {
    if (props.isFeedback) {
        const nextButtonText = getNextButtonText(props.gameIsOver);
        const menuClass = getMenuClass(props.isAnimatingExit);
        return (
            <div className={menuClass}>
                <button onClick={props.onClickFeedback}>{nextButtonText}</button>
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
            <button key={props.index} onClick={() => props.onChoose(props.choiceNum)}>{props.choice.label}</button>
        </div>
    )
}

function getNextButtonText(gameIsOver) {
    if (gameIsOver) {
        return "Play Again"
    }
    else {
        return "Next";
    }
}

function getMenuClass(isAnimatingExit) {
    if (isAnimatingExit) {
        return "menuOption fadeOut";
    }
    else {
        return "menuOption";
    }
}