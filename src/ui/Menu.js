import { CHOICES_SCREEN, FEEDBACK_SCREEN } from "../constants/modes";

export default function Menu(props) {
    switch(props.mode) {
        case FEEDBACK_SCREEN:
            return getGoToNextScreenUI(props);
        case CHOICES_SCREEN:
            return getChoicesUI(props);
        default:
            throw new Error("Tried to display menu on inappropriate screen");
    }
}

function MenuOption(props) {
    const index = props.choiceNum;

    return (
        <div key={index} className={'menuOption button'}>
            <button key={props.index} onClick={() => props.onChoose(props.choiceNum)}>{props.choice.label}</button>
        </div>
    )
}

function getChoicesUI(props) {
    const choices = props.choices;
    const ChoicesAsMenu = choices.map(function(choice, index) {
        return <MenuOption key={index} choiceNum={index} choice={choice} onChoose={props.onChoose}/>
    });
    return ChoicesAsMenu;  
}

function getGoToNextScreenUI(props) {
    const nextButtonText = getNextButtonText(props.gameIsOver);
    const menuClass = getMenuAnimationClass(props.isAnimatingExit);
    return (
        <div className={menuClass}>
            <button onClick={props.onClickFeedback}>{nextButtonText}</button>
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

function getMenuAnimationClass(isAnimatingExit) {
    if (isAnimatingExit) {
        return "menuOption fadeOut";
    }
    else {
        return "menuOption";
    }
}