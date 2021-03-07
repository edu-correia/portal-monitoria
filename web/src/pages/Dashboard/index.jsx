import {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';

import {Context} from '../../Context/AuthContext';

import NavBar from '../../components/NavBar';

import api from '../../services/api';

import './styles.css'

function Dashboard(){
    const [info, setInfo] = useState([]);
    const {handleLogout} = useContext(Context);

    useEffect(() => {
        (async () => {
            const {data} = await api.get('/topics-monitor');

            setInfo(data);

            console.log(data);
        })()
    }, [])

    return (
        <>
            <NavBar link="/"/>

            <div className="mytopics-header">
                <h1>Meus tópicos</h1>
                <Link to="/new-topic">Novo tópico</Link>
            </div>

            <div className="mytopics-div">
                {info.map((item) => {
                    return (
                        <div key={item.id} className="mytopic">
                            <p>{item.title} - {item.subject}</p>
                            <span>{item.course[0]}º ano</span>
                        </div>
                    )
                })}
            </div>
            
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Dashboard;