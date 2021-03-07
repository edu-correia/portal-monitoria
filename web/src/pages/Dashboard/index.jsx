import {useEffect, useState, useContext} from 'react';

import {Context} from '../../Context/AuthContext';

import api from '../../services/api';

import './styles.css'

function Dashboard(){
    const [info, setInfo] = useState([]);
    const {handleLogout} = useContext(Context);

    useEffect(() => {
        (async () => {
            const {data} = await api.get('/topics-monitor');

            setInfo(data);
        })()
    }, [])

    return (
        <>
            {info.map((item) => {
                return (
                    <div key={item.id} className="temp">
                        <h1>{item.title}</h1>
                        <p>{item.subject} - {item.course}</p>
                        <hr/>
                    </div>
                )
            })}
            <br/>
            <br/>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Dashboard;