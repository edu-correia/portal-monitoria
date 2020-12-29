import React, {useState} from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import marked from 'marked';

import './styles.css';

function AddTopic(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [subject, setSubject] = useState('');
    const [course, setCourse] = useState('');
    const [content, setContent] = useState('');
    const [preview, setPreview] = useState(false);

    const handleFormSubmit = () => {
        const data = {
            title,
            author,
            subject,
            course,
            content
        }

        api.post('topics', data).then((response) => {
            if(response.status === 201) alert('Success!');
          }, (error) => {
            console.log(error);
          });
    }

    return (
        <>
            <Header />
            <SideBar active="plus"/>
            <div className="form">
                <button className={preview ? 'pv-active pv-btn' : 'pv-btn'} onClick={() => setPreview(!preview)}>Preview: {preview ? 'Ativado' : 'Desativado'}</button>
                {preview ? 
                    (
                        <div className="pv-box" dangerouslySetInnerHTML={{ __html: marked(content, {breaks: true})}}></div>
                    ) : (
                        <div>
                            <div className="input-group">
                                <label htmlFor="title">Título:</label>
                                <input value={title} type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="author">Autor:</label>
                                <input value={author} type="text" id="author" onChange={(e) => setAuthor(e.target.value)}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="course">Curso:</label>
                                <select value={course} onChange={(e) => setCourse(e.target.value)}id="course">
                                    <option value="" disabled hidden>Selecione uma opção</option>
                                    <option value="1MEC">1º Mecânica</option>
                                    <option value="2MEC">2º Mecânica</option>
                                    <option value="3MEC">3º Mecânica</option>
                                    <option value="1INF">1º Informática</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="subject">Matéria:</label>
                                <input value={subject} type="text" id="subject" onChange={(e) => setSubject(e.target.value)}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="text">Conteúdo:</label>
                                <textarea value={content} id="text" onChange={(e) => setContent(e.target.value)}></textarea>
                            </div>
                            <button className="add-btn" onClick={handleFormSubmit}>Criar</button> 
                        </div>
                )}
            </div>
        </>
    )
}

export default AddTopic;