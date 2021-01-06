import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import historyIcon from '../../assets/icons/history.svg';
import plusIcon from '../../assets/icons/plus.svg';
import questionIcon from '../../assets/icons/question.svg';

function SideBar({active}){
    return (
        <div className="sidebar">
            <Link to="/" className={active === 'history' ? "active icon" : "icon"}>
                <img src={historyIcon} alt="Matérias" />
            </Link>
            <Link to="/add-topic" className={active === 'plus' ? "active icon" : "icon"}>
                <img src={plusIcon} alt="Adicionar"/>
            </Link>
            <Link to="/markdown" className={active === 'question' ? "active icon" : "icon"}>
                <img src={questionIcon} alt="Dúvidas"/>
            </Link>
        </div>
    )
}

export default SideBar;