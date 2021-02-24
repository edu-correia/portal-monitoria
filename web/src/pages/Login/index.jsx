import {useContext, useState} from 'react';

import {Context} from '../../Context/AuthContext';

import './styles.css';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowingPass, setIsShowingPass] = useState(false);
    const {handleLogin} = useContext(Context);

    function handleShowPass(){
        setIsShowingPass(!isShowingPass);
    }

    return(
        <>
            <button onClick={handleShowPass}>Show pass</button>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type={isShowingPass ? "text" : "password"} placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => handleLogin(email, password)}>Entrar</button>
        </>
    );
}
 export default Login;