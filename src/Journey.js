export default function Journey(props) {
    const answers = props.answers;
    const JourneyMarks = getJourneyMarks(answers);

    return (
       <ul>{JourneyMarks}</ul>
    )
}

function getJourneyMarks(answers) {
    if (answers.length === 0) {
        return (
            <li>No answers yet.</li>
        )       
    }
    return answers.map((answer) => {
        return (
            <li>{answer}</li>
        )
    });
}