import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import ClassItem from '../../components/ClassItem';

import idToFullName from '../../utils/idToFullName';

import './styles.css';

import filterIcon from '../../assets/icons/filter.svg';
import reloadIcon from '../../assets/icons/reload.svg';

function Clipboard(){
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [courseFilter, setCourseFilter] = useState([]);
    const [yearFilter, setYearFilter] = useState([]);
    const [presenceFilter, setPresenceFilter] = useState(undefined);

    useEffect(() => {
        api.get('notify').then(res => {
            setData(res.data);
            setFilteredData(res.data);
        });
    }, []);

    function handleFilter(){
        var filtered = data;

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
                var ok = false;
                courseFilter.forEach((filterItem, i) =>{
                    if(item.subject === filterItem){
                        ok = true;
                    }
                })
                
                if(ok) return item;
            });
        }
        
        // Year filter
        if(yearFilter.length !== 0){
            filtered = filtered.filter(item => {
                var ok = false;
                yearFilter.forEach((filterItem, i) =>{
                    if(item.year[0] === filterItem[i])
                        ok = true;
                });
                if(ok) return item;
            });
        }
                    
        // Presence filter
        if(presenceFilter !== undefined){
            filtered = filtered.filter(item => {
                if(item.showedUp === presenceFilter)
                    return item;
            });
        }
                            
                            
        setFilteredData(filtered);
    }

    function handleResetFilter(){
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            if(input.id){
                input.checked = false;
            }
        });

        setNameFilter("");
        setCourseFilter([]);
        setYearFilter([]);
        setPresenceFilter(undefined);

        setFilteredData(data);
    }

    function handleNameChange(e){
        setNameFilter(e.target.value);
    }

    function handleCourseChange(e){
        const course = idToFullName(e.target.id);
        if(e.target.checked){
            var newArr = [...courseFilter, course];
        }else{
            var newArr = courseFilter;
            const index = newArr.indexOf(course);
            if(index > -1) newArr.splice(index, 1);
        }

        setCourseFilter(newArr);
    }

    function handleYearChange(e){
        const year = e.target.id[4];
        if(e.target.checked){
            var newArr = [...yearFilter, year];
        }else{
            var newArr = yearFilter;
            const index = newArr.indexOf(year);
            if(index > -1) newArr.splice(index, 1);
        }

        setYearFilter(newArr);
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
                            <input 
                                value={nameFilter}
                                type="text" 
                                placeholder="Pesquise um nome aqui..."
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="filter-group">
                            <span>Curso:</span>
                            <div className="checkbox-group">
                                <input
                                    type="checkbox" 
                                    id="enf" 
                                    name="course"
                                    onChange={handleCourseChange}
                                />
                                <label htmlFor="enf">Enfermagem</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="edf" name="course" onChange={handleCourseChange}/>
                                <label htmlFor="edf">Edificações</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="geo" name="course" onChange={handleCourseChange}/>
                                <label htmlFor="geo">Geodésia</label>
                            </div>
                            <div className="checkbox-group"> 
                                <input type="checkbox" id="inf" name="course" onChange={handleCourseChange}/>
                                <label htmlFor="inf">Informática</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="mec" name="course" onChange={handleCourseChange}/>
                                <label htmlFor="mec">Mecânica</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="qld" name="course" onChange={handleCourseChange}/>
                                <label htmlFor="qld">Qualidade</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="fem" name="course" onChange={handleCourseChange}/>
                                <label htmlFor="fem">Física e Matemática</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="hum" name="course"onChange={handleCourseChange}/>
                                <label htmlFor="hum">Humanas</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="beq" name="course"onChange={handleCourseChange}/>
                                <label htmlFor="beq">Biologia e Química</label>
                            </div>
                        </div>
                        <div className="filter-group">
                            <span>Série:</span>
                            <div className="checkbox-group">
                                <input type="checkbox" id="year1" name="year" onChange={handleYearChange}/>
                                <label htmlFor="year1">1º ano</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"id="year2" name="year" onChange={handleYearChange}/>
                                <label htmlFor="year2">2º ano</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox"id="year3" name="year" onChange={handleYearChange}/>
                                <label htmlFor="year3">3º ano</label>
                            </div>
                        </div>
                        <div className="filter-group">
                            <span>Presente:</span>
                            <div className="checkbox-group">
                                <input type="radio" id="yes" name="presence" onChange={() => setPresenceFilter(true)}/>
                                <label htmlFor="yes">Sim</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="radio" id="no" name="presence" onChange={() => setPresenceFilter(false)}/>
                                <label htmlFor="no">Não</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="radio" id="pending" name="presence" onChange={() => setPresenceFilter(null)}/>
                                <label htmlFor="pending">Pendente</label>
                            </div>
                        </div>
                    </div>
                    <div className="filter-btns">
                        <button onClick={handleResetFilter}>
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
                    { (filteredData.length === 0) ? (
                        <h2 className="empty-result">Nenhum dado foi encontrado!</h2>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Clipboard;