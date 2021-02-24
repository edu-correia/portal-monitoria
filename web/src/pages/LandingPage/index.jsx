import {Link} from 'react-router-dom'

import './styles.css';

import LandingPic from '../../assets/landing-pic.png';
import monitorIcon from '../../assets/icons/monitor.svg';
import studentIcon from '../../assets/icons/student.svg';

function LandingPage() {
    return (
        <>
            <div className="landing-page">
                <div className="content">
                    <div className="content-name">
                        <h1 className="portal">PORTAL</h1>
                        <h1 className="monitoria">MONITORIA</h1>
                    </div>

                    <img src={LandingPic} alt="LandingPicture" className="landing-mobile"/>

                    <div className="entry-types">
                        <Link to="/courses" className="student">
                            <img src={studentIcon} alt="Aluno"/>
                            Aluno
                        </Link>
                        <Link to="/login" className="monitor">
                            <img src={monitorIcon} alt="Monitor"/>
                            <span>Monitor</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;