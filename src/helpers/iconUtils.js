export function getIconForChapter(chapterNum) {
    return <img className="chapter" src="/images/ceo.png" alt="chapter icon"/>;
}

export function getIconForAnswer(answer, index) {
    if (answer != null) {
        return <img className="answer" src="/images/1.png" alt="your progress"/>;
    }
    else {
        return <img className="answer" src="/images/empty.png" alt="No answer yet"/>;
    }
}
