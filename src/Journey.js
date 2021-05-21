export default function Journey(props) {
    const answers = props.answers;
    const JourneyMarks = getJourneyMarks(answers);
    const Hidden = getClassname(answers);

    return (
        <div className="journey">
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
    return <img src="/ceo.png"/>;
}

function getClassname(answers) {
    if (answers.length === 0) {
        return "hidden"
    }
    return "icons"
}