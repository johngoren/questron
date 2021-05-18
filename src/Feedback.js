export default function Feedback(props) {
    return (
        <div>
            <p>{props.feedback}</p>
            <button onClick={props.onClickFeedback}/>
        </div>
    )
}
