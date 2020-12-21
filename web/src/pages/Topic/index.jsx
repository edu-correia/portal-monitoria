import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import api from '../../services/api';
import fullCourse from '../../utils/fullCourse';

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

        setCourseName(fullCourse(course));
    },  [])
    return (
        <>
            <NavBar />
            <p className="title">{courseName}</p>
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