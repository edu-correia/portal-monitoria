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
            alert(`ERRO: ${error.message}`);
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
                                    <option value="1EDF">1º Edificações</option>
                                    <option value="2EDF">2º Edificações</option>
                                    <option value="3EDF">3º Edificações</option>
                                    <option value="1ENF">1º Enfermagem</option>
                                    <option value="2ENF">2º Enfermagem</option>
                                    <option value="3ENF">3º Enfermagem</option>
                                    <option value="1GEO">1º Geodésia</option>
                                    <option value="2GEO">2º Geodésia</option>
                                    <option value="3GEO">3º Geodésia</option>
                                    <option value="1INF">1º Informática</option>
                                    <option value="2INF">2º Informática</option>
                                    <option value="3INF">3º Informática</option>
                                    <option value="1MEC">1º Mecânica</option>
                                    <option value="2MEC">2º Mecânica</option>
                                    <option value="3MEC">3º Mecânica</option>
                                    <option value="1QLD">1º Qualidade</option>
                                    <option value="2QLD">2º Qualidade</option>
                                    <option value="3QLD">3º Qualidade</option>
                                    <option value="1BEQ">1º Biologia e Química</option>
                                    <option value="2BEQ">2º Biologia e Química</option>
                                    <option value="3BEQ">3º Biologia e Química</option>
                                    <option value="1FEM">1º Física e Matemática</option>
                                    <option value="2FEM">2º Física e Matemática</option>
                                    <option value="3FEM">3º Física e Matemática</option>
                                    <option value="1HUM">1º Humanas</option>
                                    <option value="2HUM">2º Humanas</option>
                                    <option value="3HUM">3º Humanas</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="subject">Matéria:</label>
                                <input value={subject} type="text" id="subject" onChange={(e) => setSubject(e.target.value)}/>
                            </div>
                            <div className="input-group">
                                <div className="char-counter-div">
                                    <label htmlFor="text">Conteúdo:</label>
                                    <span>{content.length}/15000</span>
                                </div>
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