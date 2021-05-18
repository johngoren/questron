import Menu from './Menu';
import parse from 'html-react-parser';

export default function Question(props) {
    return (
        <div>
            
        <h1>{props.chapterNum}. {props.title}</h1>
        {parse(props.body)}
        
        <Menu choices={props.choices} onChoose={(choice) => {
            props.onChoose(choice);
        }
        }/>
        
        </div>

    )
}