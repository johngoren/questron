export function getIconForChapter(chapterNum) {
    return <img className="chapter" src="/images/ceo.png" alt="chapter icon"/>;
}

export function getIconForAnswer(answer, index) {
    if (answer != null) {
        return getNumberIconForQuestion(index, true);
    }
    else {
        return getNumberIconForQuestion(index, false);
    }
}

function getNumberIconForQuestion(index, isOn) {
    const isOnSlug = getStateSlug(isOn);
    const path = `/images/numbers/${index}-${isOnSlug}.png`;
    return getImageElementForPath(path);
}

function getQuestionIcon(answer, index) {

}

function getImageElementForPath(path) {
    return <img className="answer" src={path} alt="startup icon"/>
}


function getStateSlug(isOn) {
    return isOn ? "on" : "off"
}