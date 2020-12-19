import {Link} from 'react-router-dom';
import flagIcon from '../../assets/icons/flag.svg';

function TopicDiv({title, subject, author}){
    return (
        <div className="topic-div">
            <p>{title} - {subject}</p>
            <span>Feito por {author}</span>
            <div className="btns">
                <button>
                    <img src={flagIcon} alt="Reportar"/>
                </button>
                <Link className="specific" to="/">Visualizar</Link>
            </div>
        </div>
    );
}

export default TopicDiv;