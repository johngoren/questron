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
    const filenameNum = getFilenameNumForChapter(chapterNum);
    const isOnSlug = getStateSlug(isOn);
    const path = `/images/numbers/${filenameNum}-${isOnSlug}.png`;
    return getImageElementForPath(path, index);
}

export function getDecisionIcon(choiceNum, index, title, isAnimatingExit) {
    const chapterNum = index + 1;
    const choiceIndex = choiceNum + 1;
    let path = `/images/decisions/${chapterNum}.${choiceIndex}.png`;
    const animationClass = getAnimationClassForDecisionBlock(isAnimatingExit);

    switch(chapterNum) {
        case 3:
        case 5:
        case 6:
            path = `/images/decisions/${chapterNum}.png`;
            break;
        default:
            break;
    }

    return <img className={animationClass} src={path} alt={title} />
}

function getImageElementForPath(path, title) {
    return <img className="answer" src={path} alt={title} />
}

function getStateSlug(isOn) {
    return isOn ? "on" : "off"
}

function getAnimationClassForDecisionBlock(isAnimatingExit) {
    let classes = ["graphicBlock"];
    if (isAnimatingExit) {
        classes.push("fadeOut");
    }
    else {
        classes.push("pop");
    }
    return classes.join(" ");
}

// Makes adjustment for certain late chapters whose images don't line up with the index because a question was snipped out.
function getFilenameNumForChapter(rawNum) {
    // return rawNum;

    if (rawNum > 8) {
        return rawNum + 1;
    }
    else {
        return rawNum;
    }
}

export function getRankIcon(keyword) {
    const path = `/images/result-${keyword}.png`;
    return getImageElementForPath(path, keyword);
}