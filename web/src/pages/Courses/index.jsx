import NavBar from '../../components/NavBar';
import CourseDiv from '../../components/CourseDiv';

import './styles.css';

function Courses() {
    return (
        <>
            <NavBar />
            <div className="courses-container">

                {/* Edificações */}
                <CourseDiv 
                    display_title="Edificações"
                    course_id="EDF"
                    monitors={['Luiza Camargo', 'Vitória Dias', 'Victória Rosa']}
                />

                {/* Enfermagem */}

                <CourseDiv 
                    display_title="Enfermagem"
                    course_id="ENF"
                    monitors={['Letícia Trindade', 'Ana Silva', 'Nathália Cunha', 'Marina Fonseca']}
                />

                {/* Geodésia */}

                <CourseDiv 
                    display_title="Geodésia"
                    course_id="GEO"
                    monitors={['Nicolas Chiarotti', 'Camilly Leite', 'Isabella Pinto']}
                />

                {/* Informática */}

                <CourseDiv 
                    display_title="Informática"
                    course_id="INF"
                    monitors={['Bruno Corrêa', 'Eduardo Correia']}
                />

                {/* Mecânica */}

                <CourseDiv
                    display_title="Mecânica"
                    course_id="MEC"
                    monitors={['Felipi Santos', 'Guilherme Rodrigues', 'Lorena Milani', 'Vinícius Silva']}
                />

                {/* Qualidade */}

                <CourseDiv
                    display_title="Qualidade"
                    course_id="QLD"
                    monitors={['Giovanna Jürgensen', 'Mayara Fonseca']}
                />

                {/*Biologia e Química*/}

                <CourseDiv
                    display_title="Biologia e Química"
                    course_id="BEQ"
                    monitors={['Gabriella Rezende', 'Rebecca Almeida', 'Wendy Anjos']}
                />

                {/*Física e Matemática*/}

                <CourseDiv
                    display_title="Física e Matemática"
                    course_id="FEM"
                    monitors={['Vitória Nicoleti', 'Raphael Penachioni', 'Gustavo Granjeia', 'Ana Santos', 'Marília Jampani', 'Iuri Barbosa']}
                />

                {/*Humanas*/}

                 <CourseDiv
                    display_title="Humanas"
                    course_id="HUM"
                    monitors={['Brenda Silveira', 'Mirella Vieira', 'Maria Melo', 'Yan Oliveira']}
                />
            </div>
        </>
    );
}

export default Courses;