import {useState, useEffect} from 'react';

import history from '../../history';
import api from '../../services/api';

function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, [])

    async function handleLogin(email, password){
        const obj = {
            email,
            password
        }

        try {
            const {data: {token}} = await api.post('/authenticate', obj);

            localStorage.setItem('token', JSON.stringify(token));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
            history.push('/dashboard');
        } catch (error) {
            console.log("Error");
        }
    }

    function handleLogout(){
        setAuthenticated(true);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/');
    }

    return {authenticated, loading, handleLogin, handleLogout}
}

export default useAuth;