export default function WelcomeScreen(props) {

    return <div className="welcome">
        <img src="./images/numbers/0-on.png" alt="welcome" className="graphicBlock"/>
        <img src="./images/logo_equity.png" alt="welcome logo" className="logo"/>
        <div className="play">
            <a onClick={props.onClickWelcomeButton}><img src="./images/play.png" alt="play button" className="playImage"/></a>
        </div>
    </div>
}