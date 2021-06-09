export default function Welcome(props) {
    return <div>
        <p>Welcome!</p>
        <button onClick={props.onClickWelcomeButton}>Ok</button>
    </div>
}