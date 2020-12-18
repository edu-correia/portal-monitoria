import {Link} from 'react-router-dom';

import './styles.css';

function CourseDiv({ course_id, monitors }){
    return (
        <Link to={`/topic/${course_id}`} className="course-div">
            <p className="course-title">{course_id.split('-')[0]}</p>
            <span className="course-year">{course_id.split('-')[1][0]}º ano</span>
            <div className="course-monitors">
                <span>Monitores:</span>
                <ul>
                    {monitors.map((monitor) => {
                        return (
                            <li>{monitor}</li>
                        )
                    })}
                </ul>
            </div>
        </Link>
    );
}

export default CourseDiv;