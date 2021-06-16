// TODO: Lots of magic

export function getIconForChapter(chapterNum) {
    return <img class="chapter" src="/images/ceo.png" alt="chapter icon"/>;
}

export function getIconForAnswer(answer, index) {
    if (answer > -1) {
        return <img class="answer" src="/images/1.png" alt="your progress"/>;
    }
    else {
        return <img class="answer" src="/images/empty.png" alt="No answer yet"/>;
    }
}
