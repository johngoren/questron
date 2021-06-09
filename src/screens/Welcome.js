export default function WelcomeScreen(props) {
    return <div>
        <img src="/images/welcome_logo.png" alt="welcome logo"/>
        <p>Welcome!</p>
        <button onClick={props.onClickWelcomeButton}>
            <img src="/images/play.png" alt="play button"/>    
        </button>
    </div>
}