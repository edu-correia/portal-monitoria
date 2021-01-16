import NavBar from '../../components/NavBar';

import {ReactComponent as SendIcon} from '../../assets/icons/send.svg';
import botImg from '../../assets/bot-img.png';

import './styles.css';

function ChatBot() {
    return (
        <>
            <NavBar />
            <h1 className="cb-title">Agendamento</h1>
            <div className="chatbot-div">
                <div className="cb-messages">
                    <div className="msg bot">
                        <div className="profile-img">
                            <img src={botImg} alt="Cynthia"/>
                        </div>
                        <span>Olá, eu sou Cynhtia, sua ajudante virtual!</span>
                    </div>
                    <div className="msg client">
                        <div className="profile-img">
                            <img src={botImg} alt="Cynthia"/>
                        </div>
                        <span>1</span>
                    </div>
                    <div className="msg bot">
                        <div className="profile-img">
                            <img src={botImg} alt="Cynthia"/>
                        </div>
                        <span>Olá, eu sou Cynhtia, sua ajudante virtual!</span>
                    </div>
                    <div className="msg client">
                        <div className="profile-img">
                            <img src={botImg} alt="Cynthia"/>
                        </div>
                        <span>Olá, eu sou Cynhtia, sua ajudante virtual!</span>
                    </div>
                </div>
                <div className="cb-send">
                    <input type="text"/>
                    <button>
                        <SendIcon className="send-icon"/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ChatBot;