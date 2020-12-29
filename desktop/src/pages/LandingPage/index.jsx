import React from 'react';

import './styles.css';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

function LandingPage(){
    return (
        <>
            <Header />
            <SideBar active="history"/>
        </>
    )
}

export default LandingPage;