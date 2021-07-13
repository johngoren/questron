import { getIconForAnswer } from "../helpers/iconUtils";
import { WELCOME_SCREEN } from "../constants/modes";

export default function ProgressBlocks(props) {
    const answers = props.answers;
    const ProgressBlocksContent = getProgressBlocks(answers);
    let journeyClassName = "journey icons";

    if (props.mode === WELCOME_SCREEN) {
        journeyClassName += " hidden";
    }

    return (
        <div className={journeyClassName}>
           {ProgressBlocksContent}
       </div>
    )
}

function getProgressBlocks(answers) {
    return answers.map((answer, index) => {
        const icon = getIconForAnswer(answer, index);
        const zIndex = 100 - index;
        return (
            <span key={index} style={{zIndex: zIndex}}>{icon}</span>
        )
    });
}

