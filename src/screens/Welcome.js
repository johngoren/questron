import { getNumberIcon } from "../helpers/iconUtils"

export default function WelcomeScreen(props) {
    const icon = getNumberIcon(0, true);

    return <div className="welcome">
        {icon}<br/>
        <img src="/images/welcome_logo.png" alt="welcome logo" className="logo"/><br/>
        <a onClick={props.onClickWelcomeButton}><img src="/images/play.png" alt="play button" className="play"/></a>
    </div>
}