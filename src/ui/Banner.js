import { prepareHeadline } from "../helpers/textUtils";

export default function Banner(props) {
    const noWidows = prepareHeadline(props.title);

    return (
        <div className="text">
            <h1 className="headline">{noWidows}</h1>
        </div>
    )
}