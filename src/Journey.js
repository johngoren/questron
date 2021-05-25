export default function Journey(props) {
    const answers = props.answers;
    const JourneyMarks = getJourneyMarks(answers);
    const JourneyClassName = getJourneyClassName(answers);
    const Hidden = getClassName(answers);

    return (
        <div className={JourneyClassName}>
           <ul className={Hidden}>{JourneyMarks}</ul>
       </div>
    )
}

function getJourneyMarks(answers) {
    if (answers.length === 0) {
        return (
            <li>No answers yet.</li>
        )       
    }
    return answers.map((answer, index) => {
        const icon = getIconForAnswer(answer, index);

        return (
            <li>{icon}</li>
        )
    });
}

// TODO: Real icons
function getIconForAnswer(answer, index) {
    return <img src="/ceo.png" alt="your progress"/>;
}

function getJourneyClassName(answers) {
    if (answers.length === 0) {
        return "hidden"
    }
    else {
        return "journey"
    }
}

function getClassName(answers) {
    if (answers.length === 0) {
        return "hidden"
    }
    return "icons"
}