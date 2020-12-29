import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import './styles.css';

function AddTopic(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [subject, setSubject] = useState('');
    const [course, setCourse] = useState('');
    const [content, setContent] = useState('');

    const handleFormSubmit = () => {
        const data = {
            title,
            author,
            subject,
            course,
            content
        }

        console.log(data);

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
                <div className="input-group">
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="author">Autor:</label>
                    <input type="text" id="author" onChange={(e) => setAuthor(e.target.value)}/>
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
                    <input type="text" id="subject" onChange={(e) => setSubject(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="text">Conteúdo:</label>
                    <textarea id="text" onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <button onClick={handleFormSubmit}>Criar</button>
            </div>
        </>
    )
}

export default AddTopic;