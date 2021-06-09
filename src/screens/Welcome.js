export default function WelcomeScreen(props) {
    return <div>
        <p>Welcome!</p>
        <button onClick={props.onClickWelcomeButton}>Ok</button>
    </div>
}