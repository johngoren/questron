export default function WelcomeScreen(props) {
    return <div class="welcome">
        <img src="/images/ceo.png" alt="CEO decision" className="graphicBlock" /><br/>
        <img src="/images/welcome_logo.png" alt="welcome logo" className="logo"/><br/>
        <a onClick={props.onClickWelcomeButton}><img src="/images/play.png" alt="play button" className="play"/></a>
    </div>
}