import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';

import NavBar from '../../components/NavBar';

import {ReactComponent as SendIcon} from '../../assets/icons/send.svg';
import botImg from '../../assets/bot-img.png';
import clientImg from '../../assets/client-img.png';

import './styles.css';

function ChatBot() {
    const initialChat = [
        {
            from: 'bot',
            msg: 'Olá, eu sou Cynhtia, sua ajudante virtual!'
        },
        {
            from: 'bot',
            msg: 'Digite o número correspondente a matéria que você deseja agendar a monitoria:'
        },
        {
            from: 'bot',
            msg: '<b>1</b> - Enfermagem<br/><b>2</b> - Informática<br/><b>3</b> - Mecânica<br/><b>4</b> - Geodésia<br/><b>5</b> - Qualidade<br/><b>6</b> - Edificações<br/><b>7</b> - Humanas<br/><b>8</b> - Física e Matemática<br/><b>9</b> - Biologia e Química'
        }
    ]

    const [messages, setMessages] = useState(initialChat);
    const [inputMsg, setInputMsg] = useState("");
    const [step, setStep] = useState(1);
    const [data, setData] = useState({});
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [resultTitle, setResultTitle] = useState('');
    const [resultMessage, setResultMessage] = useState('');
    const [resultStatus, setResultStatus] = useState('');

    useEffect(() => {
        const objDiv = document.getElementById('abc');
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [messages])

    function addNewMsg(msg){
        setMessages([...messages, {from: 'client', msg: inputMsg}, {from: 'bot', msg}]);
    }

    async function sendData(){
        api.post('notify', data).then(response => {
            if(response.status === 201) {
                setIsPopupOpen(true);
                setResultTitle('Sucesso');
                setResultMessage('Seus dados foram enviados aos monitores, muito obrigado!');
                setResultStatus('success');
            }
        }).catch(err => {
            setIsPopupOpen(true);
            setResultTitle('Erro');
            setResultMessage('Ocorreu um erro, tente novamente! Se acreditar que isso é um erro, por favor reporte o erro clicado no botão abaixo.');
            setResultStatus('error');
        })
    }

    async function handleMessage(){ 
        document.getElementById('text').focus();
        
        if(step === 1){
            let subject;
            switch(inputMsg){
                case '1': 
                    subject = "Enfermagem";
                    break;
                case '2': 
                    subject = "Informática";
                    break;
                case '3': 
                    subject = "Mecânica";
                    break;
                case '4': 
                    subject = "Geodésia";
                    break;
                case '5': 
                    subject = "Qualidade";
                    break;
                case '6': 
                    subject = "Edificações";
                    break;
                case '7': 
                    subject = "Humanas";
                    break;
                case '8': 
                    subject = "Física e Matemática";
                    break;
                case '9': 
                    subject = "Biologia e Química";
                    break;
                default:
                    addNewMsg('Resposta inválida!<br/>Tente novamente!');
                    setInputMsg('');
                    return;
            }

            setData({...data, subject});
            addNewMsg('Agora digite o número correspondente ao ano em que você está?<br/><b>1</b> - 1º ano<br/><b>2</b> - 2º ano<br/><b>3</b> - 3º ou 4º ano');
            setStep(2);
            setInputMsg('');
            return;
        }

        if(step === 2){
            let year;
            switch(inputMsg){
                case '1': 
                    year = "1º ano";
                    break;
                case '2': 
                    year = "2º ano";
                    break;
                case '3': 
                    year = "3º ou 4º ano";
                    break;
                default:
                    addNewMsg('Resposta inválida!<br/>Tente novamente!');
                    setInputMsg('');
                    return;
            }

            setData({...data, year});
            addNewMsg('Qual o tópico que deseja abordar na monitoria?<br/><small>Ex: Equações do segundo grau</small>');
            setStep(3);
            setInputMsg('');
        }

        if(step === 3){
            let topic = inputMsg;

            setData({...data, topic});
            addNewMsg('Qual o seu nome?');
            setStep(4);
            setInputMsg('');
        }

        if(step === 4){
            let name = inputMsg;

            setData({...data, name});
            addNewMsg('Qual é o número do celular?<br/><small>Número pra entrar em contato por whatsapp</small>');
            setStep(5);
            setInputMsg('');
        }

        if(step === 5){
            let phone = inputMsg;

            setData({...data, phone});
            addNewMsg('Qual o seu email?<br/><small>Escolha um email que o monitor possa entrar em contato com você.</small>');
            setStep(6);
            setInputMsg('');
        }

        if(step === 6){
            let email = inputMsg;

            setData({...data, email});
            addNewMsg(`${data.name}, confira se seus dados estão corretos:<br/><b>Nome:</b> ${data.name}<br/><b>Email:</b> ${email}<br/><b>Telefone:</b> ${data.phone}<br/><b>Matéria:</b> ${data.subject}<br/><b>Ano:</b> ${data.year}<br/><b>Tópico:</b> ${data.topic}<br/>Digite <b>1</b> para "Sim, meus dados estão corretos!"<br/>Digite <b>2</b> para "Não, meus dados não estão corretos!"`);
            setStep(7);
            setInputMsg('');
        }

        if(step === 7){
            switch (inputMsg) {
                case '1':
                    await sendData();
                    addNewMsg('Processando dados...');
                    break;
                case '2':
                    addNewMsg('Problema!!!');
                    break;
                default:
                    addNewMsg('Resposta inválida!<br/>Tente novamente!');
                    return;
            }
            setStep(8);
            setInputMsg('');
        }
    }

    return (
        <>
            <NavBar />
            <h1 className="cb-title">Agendamento</h1>
            <div className="chatbot-div">
                <div className="cb-messages" id="abc">
                    {messages.map((message, index) => {
                            return(
                                <div key={index} className={`msg ${message.from}`}>
                                    <div className="profile-img">
                                        <img src={message.from === 'bot' ? botImg : clientImg} alt={message.from}/>
                                    </div>
                                    <span dangerouslySetInnerHTML={{__html: message.msg}}></span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cb-send">
                    <input type="text" value={inputMsg} onChange={e => setInputMsg(e.target.value)} onKeyPress={(e) => {if(e.key === 'Enter') handleMessage()}} id="text"/>
                    <button onClick={handleMessage}>
                        <SendIcon className="send-icon"/>
                    </button>
                </div>
            </div>

            {isPopupOpen && (
                <div className="result">
                    <dix className={`result-box ${resultStatus}`}>
                        <h1>{resultTitle}!</h1>
                        <p>{resultMessage}</p>
                        <Link as="a" to={resultStatus === 'success' ? `/` : `/chatbot`} className={`result-btn ${resultStatus}`} ></Link>
                        <button className="close-result" onClick={() => setIsPopupOpen(false)}>&times;</button>
                    </dix>
                </div>
            )}
        </>
    )
}

export default ChatBot;