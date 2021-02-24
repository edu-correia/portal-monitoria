import {useContext} from 'react';

import {Context} from '../../Context/AuthContext';

import './styles.css';

function Login(){

    const {authenticated, handleLogin} = useContext(Context);

    console.log(authenticated);
    return(
        <>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Senha"/>
            <button onClick={handleLogin}>Entrar</button>
        </>
    );
}
 export default Login;