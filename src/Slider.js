export default function Slider(props) {

    const progress = props.index + 1;
    const max = props.maxIndex + 1;
    const widthPercentage = (progress / max * 100) + "%";
    const sliderClass = getSliderClassForState(props.isFadingOut);

    return (
        <div className={sliderClass}>
            <div className="progress" style={{width: widthPercentage}}></div>
        </div>
    )

}

function getSliderClassForState(isFadingOut) {
    if (isFadingOut) {
        return "slider sliderIsLeaving";
    }
    else {
        return "slider";
    }
}