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
                    monitors={['Luiza Rafael', 'Vitória Dias', 'Victória Rosa']}
                />

                {/* Enfermagem */}

                <CourseDiv 
                    display_title="Enfermagem"
                    course_id="ENF"
                    monitors={['Leticia Maboni', 'Ana Laura Fabris', 'Nathália Rocha', 'Marina Lucon']}
                />

                {/* Geodésia */}

                <CourseDiv 
                    display_title="Geodésia"
                    course_id="GEO"
                    monitors={['Nicolas Chiarotti', 'Camilly Claudino Leite', 'Isabella de Matos']}
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
                    monitors={['Felipi Vieira', 'Guilherme Rocha', 'Lorena Milani', 'Vinícius Silva']}
                />

                {/* Qualidade */}

                <CourseDiv
                    display_title="Qualidade"
                    course_id="QLD"
                    monitors={['Giovanna Jürgensen', 'Mayara Ferraz']}
                />

                {/*Biologia e Química*/}

                <CourseDiv
                    display_title="Biologia e Química"
                    course_id="BEQ"
                    monitors={['Gabriella Rezende', 'Rebecca Vidigal', 'Wendy Anjos']}
                />

                {/*Física e Matemática*/}

                <CourseDiv
                    display_title="Física e Matemática"
                    course_id="FEM"
                    monitors={['Vitória Yumi', 'Raphael Penachioni', 'Gustavo Granjeia', 'Ana Caroline Martins', 'Marília Jampani', 'Iuri Barbosa']}
                />

                {/*Humanas*/}

                 <CourseDiv
                    display_title="Humanas"
                    course_id="HUM"
                    monitors={['Brenda Pretel', 'Mirella Furtado', 'Maria Clara Herreria', 'Yan Correia']}
                />
            </div>
        </>
    );
}

export default Courses;