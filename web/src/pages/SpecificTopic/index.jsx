import {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router';
import marked from 'marked';

import api from '../../services/api';
import fullCourse from '../../utils/fullCourse';

import './styles.css';

import ArrowLeft from "../../assets/icons/arrow-left.svg";

function SpecificTopic() {
    const [topic, setTopic] = useState({
        id: 0,
        title: "",
        subject: "",
        course: null,
        author: "",
        content: ""
    });
    const [courseName, setCourseName] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        async function getTopic() {
            await api.get(`/specific/${id}`).then(res => {
                setTopic(res.data);
            });
        }
        getTopic();
        setCourseName(fullCourse(topic.course));
    }, [topic]);

    return (
        <>
            <header className="lg-header">
                <div className="topic-title">
                    <p>
                        {topic.title}
                    </p>
                    <span>
                        {courseName}
                    </span>
                </div>
                <button onClick={() => history.goBack()} className="topic-return">
                    <img src={ArrowLeft} alt="Voltar"/>
                    <span>Voltar</span>
                </button>
            </header>

            <main className="topic-content" dangerouslySetInnerHTML={{ __html: marked(topic.content, {breaks: true})}}>
                
            </main>
        </>
    );
}

export default SpecificTopic;