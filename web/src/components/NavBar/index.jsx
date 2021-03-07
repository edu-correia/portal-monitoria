import {useHistory} from 'react-router';

import './styles.css';
import ArrowLeft from "../../assets/icons/arrow-left.svg";

function NavBar({link = null}){
    const history = useHistory();

    function handleBack(){
        if(link === null){
            history.goBack();
        }else{
            history.push(link);
        }
    }

    return(
        <header className="hdr">
            <button onClick={handleBack} className="return">
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