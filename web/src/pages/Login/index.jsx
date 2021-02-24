import {useContext, useState} from 'react';

import {Context} from '../../Context/AuthContext';
import NavBar from '../../components/NavBar';

import eyeIcon from '../../assets/icons/eye.svg';
import eyeOffIcon from '../../assets/icons/eye-off.svg';
import emailIcon from '../../assets/icons/email.svg';
import keyIcon from '../../assets/icons/key.svg';

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
            <NavBar />
            <div className="login-form">
                <h1>Login</h1>
                <div className="login-input">
                    <img src={emailIcon} alt="Email" className="input-icon"/>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="login-input">
                    <img src={keyIcon} alt="Senha" className="input-icon"/>
                    <input type={isShowingPass ? "text" : "password"} placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <img onClick={handleShowPass} src={isShowingPass ? eyeOffIcon : eyeIcon} alt="Show Password" className="show"/>
                </div>
                
                <button onClick={() => handleLogin(email, password)}>Entrar</button>
            </div>
        </>
    );
}
 export default Login;