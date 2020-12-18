import {Link} from 'react-router-dom'

import './styles.css';

import LandingPic from '../../assets/landing-pic.png';
import heartIcon from '../../assets/icons/heart.svg';

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

                    <div>
                        <Link to="/courses" className="enter">
                            Acessar aulas
                        </Link>
                        <Link to="/" className="help">
                            <img src={heartIcon} alt="Apoiar"/>
                            <span>Apoiar</span>
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