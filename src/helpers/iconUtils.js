export function getIconForAnswer(answer, index) {
    if (answer != null) {
        return getNumberIcon(index, true);
    }
    else {
        return getNumberIcon(index, false);
    }
}

export function getNumberIcon(index, isOn) {
    const chapterNum = index + 1
    const isOnSlug = getStateSlug(isOn);
    const path = `/images/numbers/${chapterNum}-${isOnSlug}.png`;
    return getImageElementForPath(path, index);
}

export function getDecisionIcon(choiceNum, index, title) {
    const chapterNum = index + 1;
    const choiceIndex = choiceNum + 1;
    let path = `/images/decisions/${chapterNum}.${choiceIndex}.png`;

    switch(chapterNum) {
        case 3:
        case 5:
        case 6:
            path = `/images/decisions/${chapterNum.png}`;
            break;
        default:
            break;
    }
    return getImageElementForPath(path, title);
}

function getImageElementForPath(path, title) {
    return <img className="answer" src={path} alt={title} />
}

function getStateSlug(isOn) {
    return isOn ? "on" : "off"
}