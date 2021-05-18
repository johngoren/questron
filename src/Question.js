import Menu from './Menu';  

export default function Question(props) {
    return (
        <div>
            
        <h1>{props.chapterNum}. {props.title}</h1>
        <p>
            {parse(body)}
        </p>

        <Menu choices={choices} onChoose={(choice) => {
            props.onChoose(choice);
        }
        }/>
        
        </div>

    )
}