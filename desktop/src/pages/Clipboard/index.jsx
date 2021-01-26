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
                <div className="classes-filter">
                    <div className="filter-title">
                        <img src={filterIcon} alt="Filtro"/>
                        <h1>Filtrar</h1>
                    </div>
                    <div className="options-filter">
                        <div>
                            <input type="radio" name="course" id="EDF" onClick={() => setFilter('Edificações')}/>
                            <label htmlFor="EDF">Edificações</label>
                        </div>
                        <div>
                            <input type="radio" name="course" id="ENF" onClick={() => setFilter('Enfermagem')}/>
                            <label htmlFor="ENF">Enfermagem</label>
                        </div>
                        <div>
                            <input type="radio" name="course" id="GEO" onClick={() => setFilter('Geodésia')}/>
                            <label htmlFor="GEO">Geodésia</label>
                        </div>
                        <div>
                            <input type="radio" name="course" id="INF" onClick={() => setFilter('Informática')}/>
                            <label htmlFor="INF">Informática</label>
                        </div>
                        <div>
                            <input type="radio" name="course" id="MEC" onClick={() => setFilter('Mecânica')}/>
                            <label htmlFor="MEC">Mecânica</label>
                        </div>
                        <div>
                            <input type="radio" name="course" id="QLD" onClick={() => setFilter('Qualidade')}/>
                            <label htmlFor="QLD">Qualidade</label>
                        </div>
                        <div>
                            <input type="radio" name="course" id="BEQ" onClick={() => setFilter('Biologia e Química')}/>
                            <label htmlFor="BEQ">Biologia e Química</label>
                        </div>
                        <div>
                            <input type="radio" name="course" id="FEM" onClick={() => setFilter('Física e Matemática')}/>
                            <label htmlFor="FEM">Física e Matemática</label>
                        </div>
                        <div>
                            <input type="radio" name="course" id="HUM" onClick={() => setFilter('Humanas')}/>
                            <label htmlFor="HUM">Humanas</label>
                        </div>
                    </div>
                    <button className="reset-filter" onClick={handleResetFilter}>Reiniciar filtro</button>
                </div>
                <div className="class-item">
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