import { getIconForAnswer } from "./iconUtils.js";

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
    if (answers.length === 0) {
        return (
            <li key={0}></li>
        )       
    }
    return answers.map((answer, index) => {
        const icon = getIconForAnswer(answer, index);

        return (
            <li key={index}>{icon}</li>
        )
    });
}

