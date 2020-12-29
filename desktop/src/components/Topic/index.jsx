import React, {useState, useEffect} from 'react';

import fullCourse from '../../utils/fullCourse';

import './styles.css';

function Topic({title, subject, course, author}){
    const [courseName, setCourseName] = useState('');
    useEffect(() => {
        setCourseName(fullCourse(course));
    }, [])

    return (
        <div className="topic">
            <span>{title} - {subject}</span>
            <span>({courseName})</span>
            <span>Feito por: {author}</span>
        </div>
    )
}

export default Topic;