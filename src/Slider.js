export default function Slider(props) {

    const progress = props.index + 1;
    const max = props.maxIndex + 1;
    const widthPercentage = (progress / max * 100) + "%";

    return (
        <div className="slider">
            <div className="progress" style={{width: widthPercentage}}></div>
        </div>
    )

}