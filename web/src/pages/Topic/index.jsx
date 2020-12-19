import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import api from '../../services/api';

import './styles.css';

import NavBar from '../../components/NavBar';
import TopicDiv from '../../components/TopicDiv';

function Topic() {
    const [topics, setTopics] = useState([]);
    const [courseName, setCourseName] = useState([]);
    const {course} = useParams();
    

    useEffect(() => {
        api.get(`/topics?subject=${course}`).then(res => {
            setTopics(res.data);
        })

        switch(course.substr(1)){
            case 'EDF':
                setCourseName('Edificações');
            break;
            case 'ENF':
                setCourseName('Enfermagem');
            break;
            case 'GEO':
                setCourseName('Geodésia');
            break;
            case 'INF':
                setCourseName('Informática');
            break;
            case 'MEC':
                setCourseName('Mecânica');
            break;
            case 'QLD':
                setCourseName('Qualidade');
            break;
            case 'BEQ':
                setCourseName('Biologia e Química');
            break;
            case 'FEM':
                setCourseName('Física e Matemática');
            break;
            case 'HUM':
                setCourseName('Humanas');
            break;
        }
    },  [])
    return (
        <>
            <NavBar />
            <p className="title">{courseName} - {course[0]}º ano</p>
            <div className="topics-container">
                {topics.map((topic) => {
                    return (
                        <TopicDiv
                            key={topic.id}
                            title={topic.title}
                            subject={topic.subject}
                            author={topic.author}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default Topic;