import {Link} from 'react-router-dom';

import './styles.css';

function CourseDiv({ display_title, course_id, monitors }){
    return (
        <Link to={`/topic/${course_id}`} className="course-div">
            <p className="course-title">{display_title}</p>
            <span className="course-year">{course_id[0]}º ano</span>
            <div className="course-monitors">
                <span>Monitores:</span>
                <ul className="monitor-list">
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