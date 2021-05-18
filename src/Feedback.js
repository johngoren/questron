export default function Feedback(props) {
    return (
        <div className="menuOption">
            <p>{props.text}</p>
            <button onClick={props.onClickFeedback}>Next</button>
        </div>
    )
}
