import { getMoreInfoTextForChoice, getMoreInfoTextForIndex } from "../story/game";
import { addLinebreaksToText } from "../helpers/textUtils";

export default function More(props) {
    let moreText;

    if (props.isMoreAboutDecision != null) {
        moreText = getMoreInfoTextForChoice(props.isMoreAboutDecision, props.index);
    }
    else {
        moreText = getMoreInfoTextForIndex(props.index).body;
    }

    if (!moreText) {
        throw new Error("Tried to show More screen but there was no text to work with.");
    }

    const prepared = prepareBodyText(moreText);  

    return (
        <>
        <span className="more">{prepared}</span>
        </>
    )
}

function prepareBodyText(text) {
    return addLinebreaksToText(text);
}