export default function ScoreScreen(props) {
    return (
        <div>
        <p>Your score!</p>
        <button onClick={props.onClickReplay}>Replay</button>
    </div>
    )
}