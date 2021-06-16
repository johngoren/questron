import { getIconForAnswer } from "../helpers/iconUtils";
import { WELCOME_SCREEN } from "../constants/modes";

export default function Journey(props) {
    const answers = props.answers;
    const JourneyMarks = getJourneyMarks(answers);
    let journeyClassName = "journey icons";

    if (props.mode === WELCOME_SCREEN) {
        journeyClassName += " hidden";
    }

    return (
        <div className={journeyClassName}>
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

