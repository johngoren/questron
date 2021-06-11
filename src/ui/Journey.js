import { getIconForAnswer } from "../helpers/iconUtils";

export default function Journey(props) {
    const answers = props.answers;
    const JourneyMarks = getJourneyMarks(answers);
    const JourneyClassName = "journey";

    return (
        <div className={JourneyClassName}>
           <ul className="icons">{JourneyMarks}</ul>
       </div>
    )
}

function getJourneyMarks(answers) {
    return answers.map((answer, index) => {
        const icon = getIconForAnswer(answer, index);
        return (
            <li key={index}>{icon}</li>
        )
    });
}

