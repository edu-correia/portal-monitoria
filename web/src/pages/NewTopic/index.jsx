import {useState} from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import BallonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';

import api from '../../services/api';

import NavBar from '../../components/NavBar';

import './styles.css';

function NewTopic(){
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [course, setCourse] = useState('');

    function handleEditorChange(e, editor){
        const value = editor.getData();
        setContent(value);
    }

    async function handleFormSubmit(){
        const data = {
            content,
            title,
            subject,
            course
        }

        const response = await api.post('/topics', data);

        console.log(data);
        console.log(response);
    }

    return (
        <>
            <NavBar />
            <fieldset className="newtopic-div">
                <legend>Novo tópico</legend>
                <div className="newtopic-input">
                    <label htmlFor="title">Título do tópico:</label>
                    <input type="text" id="title" onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="newtopic-input">
                    <label htmlFor="subject">Matéria do tópico:</label>
                    <input type="text" id="subject"onChange={e => setSubject(e.target.value)}/>
                </div>
                <div className="newtopic-input">
                    <label htmlFor="course">Série do tópico:</label>
                    <input type="text" id="course"onChange={e => setCourse(e.target.value)} />
                </div>
                <div className="newtopic-input">
                    <label>Conteúdo do tópico:</label>
                    <CKEditor 
                        editor={BallonBlockEditor}
                        data={content}
                        onChange={handleEditorChange}
                    />
                </div>
                <button onClick={handleFormSubmit}>
                    Criar
                </button>
            </fieldset>
        </>
    )
}

export default NewTopic;