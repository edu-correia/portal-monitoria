import {useHistory} from 'react-router';

import './styles.css';
import ArrowLeft from "../../assets/icons/arrow-left.svg";

function NavBar(){
    const history = useHistory();
    return(
        <header className="hdr">
            <button onClick={() => history.goBack()} className="return">
                <img src={ArrowLeft} alt="Voltar"/>
                <span>Voltar</span>
            </button>
            <div className="logo">
                <span>Portal</span>
                <span>Monitoria</span>
            </div>
        </header>
    );
}

export default NavBar;