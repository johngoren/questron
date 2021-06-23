export default function Next(props) {
    const animationClass = getAnimationClass(props.isAnimatingExit);

    return (
        <div className={animationClass}>
            <button onClick={props.onClickNext}>Next</button>
        </div>  
    )
}

function getAnimationClass(isAnimatingExit) {
    if (isAnimatingExit) {
        return "next fadeOut";
    }
    else {
        return "next Option";
    }
}

