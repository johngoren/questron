
export default function Next(props) {
    const animationClass = getAnimationClass(props.isAnimatingExit);

    return (
        <div className={animationClass}>
            <button onClick={props.onClickFeedback}>Next</button>
        </div>  
    )
}


function getAnimationClass(isAnimatingExit) {
    if (isAnimatingExit) {
        return "menuOption fadeOut";
    }
    else {
        return "menuOption";
    }
}
