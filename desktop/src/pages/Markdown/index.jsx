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
    const [tab, setTab] = useState(5);

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
                                <h1>Formatação de texto:</h1>
                                <div className="code">
                                    <p>
                                        É bem fácil fazer algumas palavras ficarem em **negrito** e outras em *itálico*. Caso queira, você pode deixar uma palavra `grifada` e até adicionar uma citação!
                                    </p><br/>

                                    Einstein uma vez disse:<br/>
                                    {'>'} Me chamo Albert!

                                    <br/><br/># Você também <br/>
                                    ## pode colocar <br/>
                                    ### títulos e <br/>
                                    #### sub-títulos de <br/>
                                    ##### diversos tamanhos! <br/>
                                    ###### Fácil né?

                                    <br/><br/>
                                    Com o {'<br/>'} você pode quebrar linhas!
                                </div>
                                <div className="demo">
                                    É bem fácil fazer algumas palavras ficarem em <b>negrito</b> e outras em <i>itálico</i>. Caso queira, você pode deixar uma palavra <mark>grifada</mark> e até adicionar uma citação!

                                    <br/><br/>Einstein uma vez disse:<br/>
                                    <blockquote>Me chamo Albert!</blockquote>
                                    <br/><br/>
                                    <h1>Você também</h1>
                                    <h2>pode colocar</h2>
                                    <h3>títulos e</h3>
                                    <h4>sub-títulos de</h4>
                                    <h5>diversos tamanhos!</h5>
                                    <h6>Fácil né?</h6>
                                    <br/>
                                    Com o <br/> você pode quebrar linhas!
                                </div>
                            </div>
                        )
                    }
                    {
                        tab === 2 && (
                            <div className="tab-content">
                                <h1>Adicionar uma imagem:</h1>
                                <div className="code">
                                    Você pode adicionar uma imagem assim:

                                    <br/><br/>

                                    ![Nome alternativo da imagem](https://precoltec.com.br/wp-content/uploads/2018/06/cotil_site.png)
                                </div>
                                <div className="demo">
                                    Você pode adicionar uma imagem assim:<br/>
                                    <img src="https://precoltec.com.br/wp-content/uploads/2018/06/cotil_site.png" alt="Nome alternativo a imagem"/>
                                </div><br/><br/>
                                <p>Vídeo mostrando como subir sua imagem no Imgur e colocar no seu resumo:</p>

                            </div>
                        )
                    }
                    {
                        tab === 3 && (
                            <div className="tab-content">
                                <h1>Como adicionar listas:</h1>
                                <div className="code">
                                    Em alguns momentos, você vai querer uma lista de caixas de seleção:
                                    <br/><br/>
                                    - [x] Completo<br/>
                                    - [ ] Incompleto<br/>

                                    <br/><br/>

                                    Em outros momentos, você vai querer uma lista de bolinhas:
                                    <br/><br/>
                                    * Comece a linha com um asterisco<br/>
                                    * Sucesso!

                                    <br/><br/>

                                    Do mesmo modo,<br/>

                                    - traços também funcionam também<br/>
                                    - E se você tiver sub-tópicos, coloque 2 espaços antes do traço ou do asterisco:<br/>
                                    <p className="tabSpace">- Assim</p>
                                    <p className="tabSpace">- e assim!</p>
                                </div>

                                <div className="demo">
                                    Em alguns momentos, você vai querer listas numeradas:
                                    <br/><br/>
                                    <ul>
                                        <li><input disabled checked type="checkbox"/> Completo</li>
                                        <li><input disabled type="checkbox"/> Incompleto</li>
                                    </ul>
                                    <br/><br/>
                                    Em outros momentos, você vai querer uma lista de bolinhas:
                                    <br/><br/>
                                    <li>Comece a linha com um asterisco</li>
                                    <li>Sucesso!</li>
                                    <br/>

                                    Do mesmo modo,<br/>

                                    <ul>
                                        <li>traços também funcionam!</li>
                                        <li>E se você tiver sub-tópicos, coloque 2 espaços antes do traço ou do asterisco:</li>
                                        <ul>
                                            <li className="bigTabSpace">Assim</li>
                                            <li className="bigTabSpace">e assim!</li>
                                        </ul>
                                    </ul>
                                    
                                </div>
                            </div>
                        )
                    }
                    {
                        tab === 4 && (
                            <div className="tab-content">
                                <h1>Como adicionar links:</h1>
                                <div className="code">
                                    Para adicionar links é bem fácil, é só fazer assim:<br/>

                                    [Clique aqui](https://google.com) para ser redirecionado para o Google!
                                </div>
                                <div className="demo">
                                    Para adicionar links é bem fácil, é só fazer assim:<br/>

                                    <a href="https://google.com">Clique aqui</a> para ser redirecionado para o Google!
                                </div>
                            </div>
                        )
                    }
                    {
                        tab === 5 && (
                            <div className="tab-content">
                                <h1>Como adicionar tabelas:</h1>
                                <div className="code">
                                    Para adicionar uma tabela, você só precisa dividir as células com o símbolo "|"(Barra Vertical), assim:<br/><br/>

                                    título 1 |título 2<br/>
                                    ---------|---------<br/>
                                    conteúdo1|conteúdo2<br/>
                                    conteúdo3|conteúdo4<br/>
                                </div>
                                <div className="demo">
                                    Para adicionar uma tabela, você só precisa dividir as células com o símbolo "|" (Barra Vertical), assim:<br/><br/>

                                    <table>
                                        <tr>
                                            <th>título 1</th>
                                            <th>título 2</th>
                                        </tr>
                                        <tr>
                                            <td>conteúdo1</td>
                                            <td>conteúdo2</td>
                                        </tr>
                                        <tr>
                                            <td>conteúdo3</td>
                                            <td>conteúdo4</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                    {
                        tab === 6 && (
                            <div className="tab-content">
                                <h1>Como anexar código:</h1>
                            </div>
                        )
                    }
                    {
                        tab === 7 && (
                            <div className="tab-content">
                                <h1>Como anexar vídeos:</h1>
                            </div>
                        )
                    }
                    {
                        tab === 8 && (
                            <div className="tab-content">
                                <h1>Como anexar mapas mentais:</h1>
                            </div>
                        )
                    }
                    {
                        tab === 9 && (
                            <div className="tab-content">
                                <h1>Como anexar formulários:</h1>
                            </div>
                        )
                    }
                </main>
            </div>
            
        </>
    );
}

export default Markdown;