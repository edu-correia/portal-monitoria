import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import ClassItem from '../../components/ClassItem';

import './styles.css';

import filterIcon from '../../assets/icons/filter.svg';

function Clipboard(){
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        api.get('notify').then(res => {
            setData(res.data);
            setFilteredData(res.data);
        });
    }, []);

    useEffect(() => {
        let filteredDataArray;

        if(filter === '') {
            filteredDataArray = data;
        }else{
            filteredDataArray = data.filter(item => {
                if(item.subject === filter) return item;
            })
        }

        setFilteredData(filteredDataArray);
    }, [filter]);

    function handleResetFilter(){
        setFilter('');
        const inputs = document.querySelectorAll('input');

        inputs.forEach(input => {
            input.checked = false;
        })
    }

    return (
        <>
            <Header />
            <SideBar active="clipboard"/>
            <div className="classes">
                <div className="filter">
                    <h2>Filtros</h2>
                    <div className="options">
                        <div className="filter-group">
                            <span>Nome:</span>
                            <input type="text"/>
                        </div>
                        <div className="filter-group">
                            <span>Curso:</span>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">Enfermagem</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">Edificações</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">Geodésia</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">Informática</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">Mecânica</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">Qualidade</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">Física e Matemática</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">Humanas</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">Biologia e Química</label>
                            </div>
                        </div>
                        <div className="filter-group">
                            <span>Série:</span>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">1º ano</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">2º ano</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"/>
                                <label htmlFor="">3º ano</label>
                            </div>
                        </div>
                        <div className="filter-group">
                            <span>Presente:</span>
                            <div className="checkbox-group">
                                <input type="radio"/>
                                <label htmlFor="">Sim</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="radio"/>
                                <label htmlFor="">Não</label>
                            </div>
                        </div>
                    </div>
                    <div className="filter-btns">
                        <button>Reset</button>
                        <button>Filtrar</button>
                    </div>
                </div>
                <div className="results">
                    {filteredData.map(({topic, year, subject, ra, phone, name, email}, index) => (
                        <ClassItem 
                            key={index}
                            topic={topic}
                            year={year}
                            ra={ra}
                            subject={subject}
                            phone={phone}
                            name={name}
                            email={email}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Clipboard;