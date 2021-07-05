export default function FindOutMore(props) {
    let learnMoreClass = "findOutMore";

    if (props.learnMorePosition === null || props.isMore) {
        learnMoreClass+= " hidden";
    }
    else {
        learnMoreClass+= " teletypeFade";
    }

    return (
        <span className={learnMoreClass}>
            <a href="#" onClick={props.onClickMore}>Find out&nbsp;more</a>
        </span>
    )
}