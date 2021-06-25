export function getIconForChapter(chapterNum) {
    return <img className="chapter" src="/images/ceo.png" alt="chapter icon"/>;
}

export function getIconForAnswer(answer, index) {
    if (answer != null) {
        return getNumberIcon(index, true);
    }
    else {
        return getNumberIcon(index, false);
    }
}

function getNumberIcon(index, isOn) {
    const isOnSlug = getStateSlug(isOn);
    const path = `/images/numbers/${index}-${isOnSlug}.png`;
    return getImageElementForPath(path, index);
}

export function getDecisionIcon(choiceNum, index, title) {
    const path = `/images/decisions/${index}.${choiceNum}.png`;
    return getImageElementForPath(path, title);
}

function getImageElementForPath(path, title) {
    return <img className="answer" src={path} alt={title} />
}

function getStateSlug(isOn) {
    return isOn ? "on" : "off"
}