export default function Slider(props) {

    const progress = props.index + 1;
    const max = props.maxIndex + 1;
    const widthPercentage = (progress / max * 100) + "%";
    const sliderClass = getSliderClassForState(props.isEnding);

    return (
        <div className={sliderClass}>
            <div className="progress" style={{width: widthPercentage}}></div>
        </div>
    )

}

function getSliderClassForState(isEnding) {
    if (isEnding) {
        return "slider sliderIsLeaving";
    }
    else {
        return "slider";
    }
}