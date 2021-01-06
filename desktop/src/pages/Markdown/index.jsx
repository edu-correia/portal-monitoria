import React from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

function Markdown(){
    return (
        <>
            <Header />
            <SideBar active="question"/>
            <h1>MARKDOWN</h1>
        </>
    );
}

export default Markdown;