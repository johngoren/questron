import { calculatePlayerScore, getPlayerScoreTitle, getPlayerScoreDescription } from "../story/game"
import { getRankIcon } from "../helpers/iconUtils";
import { reportUserWasAwardedScore } from "../helpers/analyticsUtils";

export default function ScoreScreen(props) {
    const score = calculatePlayerScore(props.answers);

    return (
        <div class="score">
            <ScoreResult score={score} />
            <button className="miniButton" onClick={props.onClickReplay}>Replay</button>
        </div>
    )
}

function ScoreResult(props) {
    const title = getPlayerScoreTitle(props.score);
    const bannerGraphic = getRankIcon(props.score);
    const body = getPlayerScoreDescription(props.score);

    reportUserWasAwardedScore(title);

    return <div>
        <div className="flexHorizontal">
            <div>Your result:</div>
            <div className="scoreGraphic">
                {bannerGraphic}
            </div>
        </div>
        <p>{body}</p>
    </div>
}