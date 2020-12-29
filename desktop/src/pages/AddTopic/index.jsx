import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import './styles.css';

function AddTopic(){
    return (
        <>
            <Header />
            <SideBar active="plus"/>
            <div className="form">
                <div className="input-group">
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title"/>
                </div>
                <div className="input-group">
                    <label htmlFor="author">Autor:</label>
                    <input type="text" id="author"/>
                </div>
                <div className="input-group">
                    <label htmlFor="course">Curso:</label>
                    <input type="text" id="course"/>
                </div>
                <div className="input-group">
                    <label htmlFor="subject">Matéria:</label>
                    <input type="text" id="subject"/>
                </div>
                <div className="input-group">
                    <label htmlFor="text">Conteúdo:</label>
                    <textarea id="text"></textarea>
                </div>
            </div>
        </>
    )
}

export default AddTopic;