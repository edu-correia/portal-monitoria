import React, {useState} from 'react';

import arrowDownIcon from '../../assets/icons/arrow-down.svg';
import arrowUpIcon from '../../assets/icons/arrow-up.svg';

import './styles.css';

function ClassItem({topic, year, ra, subject, phone, name, email}){
    const [toggle, setToggle] = useState(false);

    return (
        <div className={toggle === true ? "class-info open" : "class-info"}>
            <div className="item-title" onClick={()=>{setToggle(!toggle)}}>
                <h1>{topic} - {name}</h1>
                <img src={toggle ? arrowUpIcon : arrowDownIcon} alt="Abrir"/>
            </div>
            {toggle && (
                <div className="info-item">
                    <p>Matéria: {topic} - {subject} ({year})</p>
                    <p>Aluno: {name} - {ra}</p>
                    <p>Email: {email}</p>
                    <p>Celular: {phone}</p>
                </div>
            )}
        </div>
    )
}

export default ClassItem;