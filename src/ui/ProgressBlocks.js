import { getIconForAnswer } from "../helpers/iconUtils";
import { WELCOME_SCREEN } from "../constants/modes";

export default function ProgressBlocks(props) {
    const answers = props.answers;
    const JourneyMarks = getProgressBlocks(answers);
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

function getProgressBlocks(answers) {
    console.log("Getting progress blocks from answers:");
    console.log(answers);

    return answers.map((answer, index) => {
        const icon = getIconForAnswer(answer, index);
        const zIndex = 100- index;
        return (
            <span key={index} style={{zIndex: zIndex, height: "65px"}}>{icon}</span>
        )
    });
}

