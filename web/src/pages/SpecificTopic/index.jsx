import {useHistory} from 'react-router';

import './styles.css';

import ArrowLeft from "../../assets/icons/arrow-left.svg";

function SpecificTopic() {
    const history = useHistory();

    return (
        <>
            <header className="lg-header">
                <div className="topic-title">
                    <p>
                        Pilhas e Filas
                    </p>
                    <span>
                        Informática - 2º ano
                    </span>
                </div>
                <button onClick={() => history.goBack()} className="topic-return">
                    <img src={ArrowLeft} alt="Voltar"/>
                    <span>Voltar</span>
                </button>
            </header>

            <main className="topic-content">
                <h2>Título</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus rerum possimus? Minima, architecto! Officia praesentium molestiae rem quas quod provident odio minus, ex voluptate accusamus, nam eligendi, totam sed sunt doloremque maxime ut unde. Sapiente porro eum natus culpa. Eos totam aliquid omnis deserunt maiores dolores ipsum consectetur tempore laboriosam tenetur consequatur, officiis neque vel nesciunt ut ipsa aspernatur amet sapiente perferendis recusandae repellendus aperiam? Enim iure quaerat sit? Velit mollitia ut ad provident repudiandae in atque adipisci! Tenetur minus totam quas vitae, aliquam hic voluptatem? Natus, excepturi illum, magnam ipsam veniam nobis ducimus mollitia architecto itaque veritatis provident!<br /><br />

                <h2>Título</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus rerum possimus? Minima, architecto! Officia praesentium molestiae rem quas quod provident odio minus, ex voluptate accusamus, nam eligendi, totam sed sunt doloremque maxime ut unde. Sapiente porro eum natus culpa. Eos totam aliquid omnis deserunt maiores dolores ipsum consectetur tempore laboriosam tenetur consequatur, officiis neque vel nesciunt ut ipsa aspernatur amet sapiente perferendis recusandae repellendus aperiam? Enim iure quaerat sit? Velit mollitia ut ad provident repudiandae in atque adipisci! Tenetur minus totam quas vitae, aliquam hic voluptatem? Natus, excepturi illum, magnam ipsam veniam nobis ducimus mollitia architecto itaque veritatis provident!<br /><br />

                <h2>Título</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus rerum possimus? Minima, architecto! Officia praesentium molestiae rem quas quod provident odio minus, ex voluptate accusamus, nam eligendi, totam sed sunt doloremque maxime ut unde. Sapiente porro eum natus culpa. Eos totam aliquid omnis deserunt maiores dolores ipsum consectetur tempore laboriosam tenetur consequatur, officiis neque vel nesciunt ut ipsa aspernatur amet sapiente perferendis recusandae repellendus aperiam? Enim iure quaerat sit? Velit mollitia ut ad provident repudiandae in atque adipisci! Tenetur minus totam quas vitae, aliquam hic voluptatem? Natus, excepturi illum, magnam ipsam veniam nobis ducimus mollitia architecto itaque veritatis provident!<br /><br />

                <h2>Título</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus rerum possimus? Minima, architecto! Officia praesentium molestiae rem quas quod provident odio minus, ex voluptate accusamus, nam eligendi, totam sed sunt doloremque maxime ut unde. Sapiente porro eum natus culpa. Eos totam aliquid omnis deserunt maiores dolores ipsum consectetur tempore laboriosam tenetur consequatur, officiis neque vel nesciunt ut ipsa aspernatur amet sapiente perferendis recusandae repellendus aperiam? Enim iure quaerat sit? Velit mollitia ut ad provident repudiandae in atque adipisci! Tenetur minus totam quas vitae, aliquam hic voluptatem? Natus, excepturi illum, magnam ipsam veniam nobis ducimus mollitia architecto itaque veritatis provident!<br /><br />
            </main>
        </>
    );
}

export default SpecificTopic;