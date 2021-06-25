import { calculatePlayerScore, getPlayerScoreTitle, getPlayerScoreDescription } from "../story/game"
import { getRankIcon } from "../helpers/iconUtils";

export default function ScoreScreen(props) {
    const score = calculatePlayerScore(props.answers);

    return (
        <div class="score">
            <ScoreResult score={score} />
            <button onClick={props.onClickReplay}>Replay</button>
        </div>
    )
}

function ScoreResult(props) {
    const title = getPlayerScoreTitle(props.score);
    const bannerGraphic = getRankIcon(props.score);
    const body = getPlayerScoreDescription(props.score);

    return <div>
        {bannerGraphic}
        <p>{body}</p>
    </div>
}