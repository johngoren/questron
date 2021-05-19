export default function Slider(props) {

    return (
        <div class="slidecontainer">
            <input type="range" min="0" max={props.maxIndex} value={props.index} class="slider" id="myRange"/>
        </div>
    )

}