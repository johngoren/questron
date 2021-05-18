export default function Feedback(props) {
    return (
        <div>
            <p>{props.text}</p>
            <button onClick={props.onClickFeedback}>OK</button>
        </div>
    )
}
