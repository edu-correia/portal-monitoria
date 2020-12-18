import {Link} from 'react-router-dom';

import './styles.css';
import ArrowLeft from "../../assets/icons/arrow-left.svg";

function NavBar(){
    return(
        <header className="hdr">
            <Link to="/"className="return">
                <img src={ArrowLeft} alt="Voltar"/>
                <span>Voltar</span>
            </Link>
            <div className="logo">
                <span>Portal</span>
                <span>Monitoria</span>
            </div>
        </header>
    );
}

export default NavBar;