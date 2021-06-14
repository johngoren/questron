import { getIconForAnswer } from "../helpers/iconUtils";

export default function Journey(props) {
    const answers = props.answers;
    const JourneyMarks = getJourneyMarks(answers);
    const JourneyClassName = "journey icons";

    return (
        <div className={JourneyClassName}>
           {JourneyMarks}
       </div>
    )
}

function getJourneyMarks(answers) {
    return answers.map((answer, index) => {
        const icon = getIconForAnswer(answer, index);
        const zIndex = 100- index;
        return (
            <span key={index} style={{zIndex: zIndex, height: "65px"}}>{icon}</span>
        )
    });
}

