import NavBar from '../../components/NavBar';
import CourseDiv from '../../components/CourseDiv';

import './styles.css';

function Courses() {
    return (
        <>
            <NavBar />
            <div className="courses-container">
                <CourseDiv 
                    course_id="Informática-2INF"
                    monitors={['Eduardo Correia', 'Bruno Corrêa', 'Bruno Corrêa', 'Bruno Corrêa']}
                />
                <CourseDiv 
                    course_id="Informática-2INF"
                    monitors={['Eduardo Correia', 'Bruno Corrêa']}
                />
                <CourseDiv 
                    course_id="Informática-2INF"
                    monitors={['Eduardo Correia', 'Bruno Corrêa']}
                />
                <CourseDiv 
                    course_id="Informática-2INF"
                    monitors={['Eduardo Correia', 'Bruno Corrêa']}
                />
            </div>
        </>
    );
}

export default Courses;