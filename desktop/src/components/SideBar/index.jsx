import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import historyIcon from '../../assets/icons/history.svg';
import clipboardIcon from '../../assets/icons/clipboard.svg';

function SideBar({active}){
    return (
        <div className="sidebar">
            <Link to="/" className={active === 'history' ? "active icon" : "icon"}>
                <img src={historyIcon} alt="Matérias" />
            </Link>
            <Link to="/clipboard" className={active === 'clipboard' ? "active icon" : "icon"}>
                <img src={clipboardIcon} alt="Matérias" />
            </Link>
        </div>
    )
}

export default SideBar;