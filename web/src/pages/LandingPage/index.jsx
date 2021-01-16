import {Link} from 'react-router-dom'

import './styles.css';

import LandingPic from '../../assets/landing-pic.png';
import clockIcon from '../../assets/icons/clock.svg';

function LandingPage() {
    return (
        <>
            <div className="landing-page">
                <div className="content">
                    <div>
                        <h1 className="portal">PORTAL</h1>
                        <h1 className="monitoria">MONITORIA</h1>
                    </div>

                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed eveniet aut enim ea facere alias labore voluptatum quia dignissimos!</p>

                    <img src={LandingPic} alt="LandingPicture" className="landing-mobile"/>

                    <div>
                        <Link to="/courses" className="enter">
                            Acessar aulas
                        </Link>
                        <Link to="/chatbot" className="time">
                            <img src={clockIcon} alt="Agendar monitoria"/>
                            <span>Agendar monitoria</span>
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <img src={LandingPic} alt="LandingPicture" className="pic"/>
                </div>
            </div>
        </>
    );
};

export default LandingPage;