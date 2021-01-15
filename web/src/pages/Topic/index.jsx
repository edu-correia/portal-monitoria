import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import api from '../../services/api';
import fullCourse from '../../utils/fullCourse';

import './styles.css';

import flagWhiteIcon from '../../assets/icons/flag-white.svg';
import emptyIcon from '../../assets/icons/empty.svg';

import NavBar from '../../components/NavBar';
import TopicDiv from '../../components/TopicDiv';
import ReportButton from '../../components/ReportButton';

function Topic() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [type, setType] = useState(null);
    const [text, setText] = useState("");

    const [whichPopup, setWhichPopup] = useState(null);
    const [topics, setTopics] = useState([]);
    const [courseName, setCourseName] = useState([]);

    const {course} = useParams();

    function sendReport(topic_id){
        if(type === null) {
            alert('Escolha um tipo');
            return;
        }

        const data = {
            name,
            title,
            type,
            text, 
            topic_id
        }

        api.post('/report', data).then((response) => {
            if(response.status === 201) {
                alert('Denúncia feita com sucesso!');
                setWhichPopup(null);
            }
          }, (error) => {
            console.log(error);
          });
    }

    useEffect(() => {
        api.get(`/topics?subject=${course}`).then(res => {
            setTopics(res.data);
        })

        setCourseName(fullCourse(course));
    },  []);

    return (
        <>
            <NavBar />
            <p className="title">{courseName}</p>
            {topics.length === 0 ? (
                        <div className="topics-empty">
                            <img src={emptyIcon} alt="Vazio"/>
                            <span>Ops! Parece que essa matéria ainda não possui conteúdo.</span>
                        </div>
                    ) : (
                        <div className="topics-container">
                            {topics.map((topic) => {
                                return (
                                    <TopicDiv
                                        key={topic.id}
                                        title={topic.title}
                                        subject={topic.subject}
                                        author={topic.author}
                                        id={topic.id}
                                        children={<ReportButton func={setWhichPopup} id={topic.id}/>}
                                    />
                                )
                            })}
                        </div>
                    )
                }
            

            {whichPopup !== null ? (
                <div className="report-popup">
                    <div className="report-title">
                        <img src={flagWhiteIcon} alt="Reportar"/>
                        <h2>Reportar</h2>
                    </div>

                    <div className="input-box">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="title">Título:</label>
                        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
                    </div>

                    <div className="radio-box">
                        <p>Tipo:</p>
                        <div className="radios">
                            <div>
                                <label className="radio-label" htmlFor="report">Denúncia:</label>
                                <input type="radio" id="report" name="type" onClick={() => setType("Denúncia")}/>
                            </div>
                            <div>
                                <label className="radio-label" htmlFor="error">Erro:</label>
                                <input type="radio" id="error" name="type" onClick={() => setType("Erro")}/>
                            </div>
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor="textarea">Descrição:</label>
                        <textarea id="textarea" onChange={(e) => setText(e.target.value)}/>
                    </div>

                    <div className="report-btns">
                        <button onClick={() => setWhichPopup(null)}>
                            Cancelar
                        </button>

                        <button onClick={() => sendReport(whichPopup)}>
                            Confirmar
                        </button>
                    </div>
                </div>
            ) : ""}
        </>
    );
}

export default Topic;