import { getIconForAnswer } from "../helpers/iconUtils";
import { WELCOME_SCREEN } from "../constants/modes";

export default function ProgressBlocks(props) {
    console.log(props.answers);
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
    console.log(answers);
    return answers.map((answer, index) => {
        const icon = getIconForAnswer(answer, index + 1);
        const zIndex = 100 - index;
        return (
            <span key={index} style={{zIndex: zIndex, height: "65px"}}>{icon}</span>
        )
    });
}

