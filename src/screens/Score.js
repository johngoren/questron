export default function ScoreScreen(props) {
    return (
        <div class="score">
        <p>Your score! TODO</p>
        <button onClick={props.onClickReplay}>Replay</button>
    </div>
    )
}