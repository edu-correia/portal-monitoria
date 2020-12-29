import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Topic from '../../components/Topic';

import './styles.css';

function LandingPage(){
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        api.get('/topics').then(res => setTopics(res.data));
    }, [])

    return (
        <>
            <Header />
            <SideBar active="history"/>
            <div className="topic-list">
                {topics.map((topic) => {
                    return (
                        <Topic 
                            key={topic.id}
                            title={topic.title}
                            subject={topic.subject}
                            course={topic.course}
                            author={topic.author}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default LandingPage;