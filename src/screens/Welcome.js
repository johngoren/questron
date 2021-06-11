export default function WelcomeScreen(props) {
    return <div class="welcome">
        <img src="/images/welcome_logo.png" alt="welcome logo" className="logo"/>
        <a onClick={props.onClickWelcomeButton}><img src="/images/play.png" alt="play button" className="play"/></a>
    </div>
}