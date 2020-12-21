import {useState} from 'react'
import {Link} from 'react-router-dom';

import './styles.css';

import flagPinkIcon from '../../assets/icons/flag-pink.svg';

function TopicDiv({id, title, subject, author, children}){
    return (
        <>
            <div className="topic-div">
                <p>{title} - {subject}</p>
                <span>Feito por {author}</span>
                <div className="btns">
                    {children}
                    <Link className="specific" to={`/specific-topic/${id}`}>Visualizar</Link>
                </div>
            </div>
        </>
    );
}

export default TopicDiv;