import { getMoreInfoTextForIndex } from "../story/game";
import { addLinebreaksToText } from "../helpers/textUtils";

export function More(props) {
    const moreText = getMoreInfoTextForIndex(props.index).body;
    const prepared = prepareBodyText(moreText);

    return (
        <>
        <span className="more">{prepared}</span>
        </>
    )
}

function prepareBodyText(text) {
    console.log(text);
    return addLinebreaksToText(text);
}