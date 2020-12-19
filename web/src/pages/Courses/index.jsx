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
                    course_id="1EDF"
                    monitors={['Luiza Camargo', 'Vitória Dias', 'Victória Rosa']}
                />

                <CourseDiv 
                    display_title="Edificações"
                    course_id="2EDF"
                    monitors={['Luiza Camargo', 'Vitória Dias', 'Victória Rosa']}
                />

                <CourseDiv 
                    display_title="Edificações"
                    course_id="3EDF"
                    monitors={['Luiza Camargo', 'Vitória Dias', 'Victória Rosa']}
                />

                {/* Enfermagem */}

                <CourseDiv 
                    display_title="Enfermagem"
                    course_id="1ENF"
                    monitors={['Letícia Trindade', 'Ana Silva', 'Nathália Cunha', 'Marina Fonseca']}
                />

                <CourseDiv 
                    display_title="Enfermagem"
                    course_id="2ENF"
                    monitors={['Letícia Trindade', 'Ana Silva', 'Nathália Cunha', 'Marina Fonseca']}
                /> 

                <CourseDiv 
                    display_title="Enfermagem"
                    course_id="3ENF"
                    monitors={['Letícia Trindade', 'Ana Silva', 'Nathália Cunha', 'Marina Fonseca']}
                />   

                {/* Geodésia */}

                <CourseDiv 
                    display_title="Geodésia"
                    course_id="1GEO"
                    monitors={['Nicolas Chiarotti', 'Camilly Leite', 'Isabella Pinto']}
                />

                <CourseDiv 
                    display_title="Geodésia"
                    course_id="2GEO"
                    monitors={['Nicolas Chiarotti', 'Camilly Leite', 'Isabella Pinto']}
                />

                <CourseDiv 
                    display_title="Geodésia"
                    course_id="3GEO"
                    monitors={['Nicolas Chiarotti', 'Camilly Leite', 'Isabella Pinto']}
                />

                {/* Informática */}

                <CourseDiv 
                    display_title="Informática"
                    course_id="1INF"
                    monitors={['Bruno Corrêa', 'Eduardo Correia']}
                />

                <CourseDiv
                    display_title="Informática"
                    course_id="2INF"
                    monitors={['Bruno Corrêa', 'Eduardo Correia']}
                />

                <CourseDiv
                    display_title="Informática"
                    course_id="3INF"
                    monitors={['Bruno Corrêa', 'Eduardo Correia']}
                />

                {/* Mecânica */}

                <CourseDiv
                    display_title="Mecânica"
                    course_id="1MEC"
                    monitors={['Felipi Santos', 'Guilherme Rodrigues', 'Lorena Milani', 'Vinícius Silva']}
                />

                <CourseDiv
                    display_title="Mecânica"
                    course_id="2MEC"
                    monitors={['Felipi Santos', 'Guilherme Rodrigues', 'Lorena Milani', 'Vinícius Silva']}
                />

                <CourseDiv
                    display_title="Mecânica"
                    course_id="3MEC"
                    monitors={['Felipi Santos', 'Guilherme Rodrigues', 'Lorena Milani', 'Vinícius Silva']}
                />

                {/* Qualidade */}

                <CourseDiv
                    display_title="Qualidade"
                    course_id="1QLD"
                    monitors={['Giovanna Jürgensen', 'Mayara Fonseca']}
                />

                <CourseDiv
                    display_title="Qualidade"
                    course_id="2QLD"
                    monitors={['Giovanna Jürgensen', 'Mayara Fonseca']}
                />

                <CourseDiv
                    display_title="Qualidade"
                    course_id="3QLD"
                    monitors={['Giovanna Jürgensen', 'Mayara Fonseca']}
                />

                {/*Biologia e Química*/}

                <CourseDiv
                    display_title="Biologia e Química"
                    course_id="1BEQ"
                    monitors={['Gabriella Rezende', 'Rebecca Almeida', 'Wendy Anjos']}
                />

                <CourseDiv
                    display_title="Biologia e Química"
                    course_id="2BEQ"
                    monitors={['Gabriella Rezende', 'Rebecca Almeida', 'Wendy Anjos']}
                />

                <CourseDiv
                    display_title="Biologia e Química"
                    course_id="3BEQ"
                    monitors={['Gabriella Rezende', 'Rebecca Almeida', 'Wendy Anjos']}
                />

                {/*Física e Matemática*/}

                <CourseDiv
                    display_title="Física e Matemática"
                    course_id="1FEM"
                    monitors={['Vitória Nicoleti', 'Raphael Penachioni', 'Gustavo Granjeia', 'Ana Santos', 'Marília Jampani', 'Iuri Barbosa']}
                />

                <CourseDiv
                    display_title="Física e Matemática"
                    course_id="2FEM"
                    monitors={['Vitória Nicoleti', 'Raphael Penachioni', 'Gustavo Granjeia', 'Ana Santos', 'Marília Jampani', 'Iuri Barbosa']}
                />

                <CourseDiv
                    display_title="Física e Matemática"
                    course_id="3FEM"
                    monitors={['Vitória Nicoleti', 'Raphael Penachioni', 'Gustavo Granjeia', 'Ana Santos', 'Marília Jampani', 'Iuri Barbosa']}
                />

                {/*Humanas*/}

                 <CourseDiv
                    display_title="Humanas"
                    course_id="1HUM"
                    monitors={['Brenda Silveira', 'Mirella Vieira', 'Maria Melo', 'Yan Oliveira']}
                />

                <CourseDiv
                    display_title="Humanas"
                    course_id="2HUM"
                    monitors={['Brenda Silveira', 'Mirella Vieira', 'Maria Melo', 'Yan Oliveira']}
                />

                <CourseDiv
                    display_title="Humanas"
                    course_id="3HUM"
                    monitors={['Brenda Silveira', 'Mirella Vieira', 'Maria Melo', 'Yan Oliveira']}
                />
            </div>
        </>
    );
}

export default Courses;