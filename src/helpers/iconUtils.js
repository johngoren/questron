export function getIconForAnswer(answer, index) {
    if (answer != null) {
        return getNumberIcon(index, true);
    }
    else {
        return getNumberIcon(index, false);
    }
}

export function getNumberIcon(index, isOn) {
    const isOnSlug = getStateSlug(isOn);
    const path = `/images/numbers/${index}-${isOnSlug}.png`;
    return getImageElementForPath(path, index);
}

export function getDecisionIcon(choiceNum, index, title) {
    const path = `/images/decisions/${index + 1}.${choiceNum + 1}.png`;
    return getImageElementForPath(path, title);
}

function getImageElementForPath(path, title) {
    return <img className="answer" src={path} alt={title} />
}

function getStateSlug(isOn) {
    return isOn ? "on" : "off"
}