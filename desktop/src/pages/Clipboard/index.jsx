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
                
            </div>
        </>
    )
}

export default Clipboard;