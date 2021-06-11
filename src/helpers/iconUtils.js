// TODO: Lots of magic

export function getIconForChapter(chapterNum) {
    return <img class="chapter" src="/images/ceo.png" alt="chapter icon"/>;
}

export function getIconForAnswer(answer, index) {
    if (answer > 0) {
        return <img class="answer" src="/images/ceo.png" alt="your progress"/>;
    }
    else {
        return <span>No answer yet</span>
    }
}
