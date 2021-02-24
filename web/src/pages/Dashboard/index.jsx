import {useEffect, useState, useContext} from 'react';

import {Context} from '../../Context/AuthContext';

import api from '../../services/api';

function Dashboard(){
    const [info, setInfo] = useState([]);
    const {handleLogout} = useContext(Context);

    useEffect(() => {
        (async () => {
            const {data} = await api.get('/topics');
    
            console.log(data);
            setInfo(data);
        })()
    }, [])

    return (
        <button onClick={handleLogout}>Sair</button>
    )
}

export default Dashboard;