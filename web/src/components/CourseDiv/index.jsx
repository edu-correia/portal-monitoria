import {Link} from 'react-router-dom';

import './styles.css';

function CourseDiv({ display_title, course_id, monitors }){
    return (
        <div className="course-div">
            <div className="course-info">
                <p className="course-title">{display_title}</p>
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
            </div>
            <div className="course-years">
                <Link to={`/topic/1${course_id}`} className="course-link">1º ano</Link>
                <Link to={`/topic/2${course_id}`} className="course-link">2º ano</Link>
                <Link to={`/topic/3${course_id}`} className="course-link">3º ano</Link>
            </div>
        </div>
    );
}

export default CourseDiv;