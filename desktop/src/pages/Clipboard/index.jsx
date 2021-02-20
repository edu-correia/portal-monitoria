import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import ClassItem from '../../components/ClassItem';

import './styles.css';

import filterIcon from '../../assets/icons/filter.svg';
import reloadIcon from '../../assets/icons/reload.svg';

function Clipboard(){
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [courseFilter, setCourseFilter] = useState([]);
    const [yearFilter, setYearFilter] = useState([]);
    const [presenceFilter, setPresenceFilter] = useState(null);

    useEffect(() => {
        api.get('notify').then(res => {
            setData(res.data);
            setFilteredData(res.data);
        });
    }, []);

    function handleFilter(){
        const filtered = data;

        // Name filter
        if(nameFilter !== ""){
            filtered = filtered.filter(item => {
                if(item.name.includes(nameFilter))
                    return item;
            });
        }

        // Course filter
        if(courseFilter.length !== 0){
            filtered = filtered.filter(item => {
                courseFilter.forEach((filterItem, i) =>{
                    if(item.subject === filterItem[i])
                        return item;
                })
            });
        }

        // Year filter
        if(yearFilter.length !== 0){
            filtered = filtered.filter(item => {
                yearFilter.forEach((filterItem, i) =>{
                    if(item.year[0] === filterItem[i])
                        return item;
                });
            });
        }

        // Presence filter
        if(presenceFilter !== null){
            filtered = filtered.filter(item => {
                if(item.showedUp === presenceFilter)
                    return item;
            });
        }

        setFilteredData(filtered);
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
                            <input type="text" placeholder="Pesquise um nome aqui..."/>
                        </div>
                        <div className="filter-group">
                            <span>Curso:</span>
                            <div className="checkbox-group">
                                <input type="checkbox" id="enf" name="course"/>
                                <label htmlFor="enf">Enfermagem</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="edf" name="course"/>
                                <label htmlFor="edf">Edificações</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="geo" name="course"/>
                                <label htmlFor="geo">Geodésia</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="inf" name="course"/>
                                <label htmlFor="inf">Informática</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="mec" name="course"/>
                                <label htmlFor="mec">Mecânica</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="qld" name="course"/>
                                <label htmlFor="qld">Qualidade</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="fem" name="course"/>
                                <label htmlFor="fem">Física e Matemática</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="hum" name="course"/>
                                <label htmlFor="hum">Humanas</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="beq" name="course"/>
                                <label htmlFor="beq">Biologia e Química</label>
                            </div>
                        </div>
                        <div className="filter-group">
                            <span>Série:</span>
                            <div className="checkbox-group">
                                <input type="checkbox" id="year1" name="year"/>
                                <label htmlFor="year1">1º ano</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"id="year2" name="year"/>
                                <label htmlFor="year2">2º ano</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"id="year3" name="year"/>
                                <label htmlFor="year3">3º ano</label>
                            </div>
                        </div>
                        <div className="filter-group">
                            <span>Presente:</span>
                            <div className="checkbox-group">
                                <input type="radio" id="yes" name="presence"/>
                                <label htmlFor="yes">Sim</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="radio" id="no" name="presence"/>
                                <label htmlFor="no">Não</label>
                            </div>
                        </div>
                    </div>
                    <div className="filter-btns">
                        <button>
                            <img src={reloadIcon} alt="Resetar"/>
                            <span>Reset</span>
                        </button>
                        <button onClick={handleFilter}>
                            <img src={filterIcon} alt="Filter"/>
                            <span>Filter</span>
                        </button>
                    </div>
                </div>
                <div className="results">
                    {data.map(({topic, year, subject, ra, phone, name, email}, index) => (
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