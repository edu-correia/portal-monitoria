import React, {useState} from 'react';

import {ReactComponent as TextIcon} from '../../assets/icons/text.svg';
import {ReactComponent as ImageIcon} from '../../assets/icons/image.svg';
import {ReactComponent as ListIcon} from '../../assets/icons/list.svg';
import {ReactComponent as LinkIcon} from '../../assets/icons/link.svg';
import {ReactComponent as TableIcon} from '../../assets/icons/table.svg';
import {ReactComponent as CodeIcon} from '../../assets/icons/code.svg';
import {ReactComponent as VideoIcon} from '../../assets/icons/video.svg';
import {ReactComponent as MindMapIcon} from '../../assets/icons/mindmap.svg';
import {ReactComponent as FormIcon} from '../../assets/icons/form.svg';

import {ReactComponent as ArrowLeftIcon} from '../../assets/icons/arrow-left.svg';
import {ReactComponent as ArrowRightIcon} from '../../assets/icons/arrow-right.svg';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import './styles.css';

function Markdown(){
    const [tab, setTab] = useState(1);

    function handleForwardMove(){
        if(tab === 9){
            setTab(1);
            return;
        }
        setTab(tab+1)
    }

    function handleBackwardMove(){
        if(tab === 1){
            setTab(9);
            return;
        }
        setTab(tab-1)
    }

    return (
        <>
            <Header />
            <SideBar active="question"/>
            <div className="main-content">
                <section className="options">
                    <div className="move">
                        <button onClick={handleBackwardMove}>
                            <ArrowLeftIcon className="md-icon"/>
                        </button>
                    </div>
                    <div className="tabs">
                        <button onClick={() => setTab(1)}>
                            <TextIcon className={tab === 1 ? 'md-icon selected' : 'md-icon'}/> 
                        </button>
                        <button onClick={() => setTab(2)}>
                            <ImageIcon className={tab === 2 ? 'md-icon selected' : 'md-icon'}/> 
                        </button>
                        <button onClick={() => setTab(3)}>
                            <ListIcon className={tab === 3 ? 'md-icon selected' : 'md-icon'}/> 
                        </button>
                        <button onClick={() => setTab(4)}>
                            <LinkIcon className={tab === 4 ? 'md-icon selected' : 'md-icon'}/> 
                        </button>
                        <button onClick={() => setTab(5)}>
                            <TableIcon className={tab === 5 ? 'md-icon selected' : 'md-icon'}/> 
                        </button>
                        <button onClick={() => setTab(6)}>
                            <CodeIcon className={tab === 6 ? 'md-icon selected' : 'md-icon'}/> 
                        </button>
                        <button onClick={() => setTab(7)}>
                            <VideoIcon className={tab === 7 ? 'md-icon selected' : 'md-icon'}/> 
                        </button>
                        <button onClick={() => setTab(8)}>
                            <MindMapIcon className={tab === 8 ? 'md-icon selected' : 'md-icon'}/> 
                        </button>
                        <button onClick={() => setTab(9)}>
                            <FormIcon className={tab === 9 ? 'md-icon selected' : 'md-icon'}/> 
                        </button>
                    </div>
                    <div className="move">
                        <button onClick={handleForwardMove}>
                            <ArrowRightIcon className="md-icon"/>
                        </button>
                    </div>
                </section>
                <main>
                    {
                        tab === 1 && (
                            <div className="tab-content">
                                Texto
                            </div>
                        )
                    }
                    {
                        tab === 2 && (
                            <div className="tab-content">
                                Imagem
                            </div>
                        )
                    }
                    {
                        tab === 3 && (
                            <div className="tab-content">
                                Listas
                            </div>
                        )
                    }
                    {
                        tab === 4 && (
                            <div className="tab-content">
                                Links
                            </div>
                        )
                    }
                    {
                        tab === 5 && (
                            <div className="tab-content">
                                Tabelas
                            </div>
                        )
                    }
                    {
                        tab === 6 && (
                            <div className="tab-content">
                                Código
                            </div>
                        )
                    }
                    {
                        tab === 7 && (
                            <div className="tab-content">
                                Vídeo
                            </div>
                        )
                    }
                    {
                        tab === 8 && (
                            <div className="tab-content">
                                Mapa mental
                            </div>
                        )
                    }
                    {
                        tab === 9 && (
                            <div className="tab-content">
                                Formulários
                            </div>
                        )
                    }
                </main>
            </div>
            
        </>
    );
}

export default Markdown;