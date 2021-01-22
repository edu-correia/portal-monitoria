import {Link} from 'react-router-dom';

import './styles.css';

function NotFoundPage(){
    return(
        <div className="not-found-page">
            <h1>404</h1>
            <p>Essa página não existe ou não está disponível!</p>
            <Link to="/" className="nfp-link">Voltar à página inicial!</Link>
        </div>
    );
}
 export default NotFoundPage;