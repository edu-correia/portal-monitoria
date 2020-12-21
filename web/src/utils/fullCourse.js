function fullCourse(course){
    let courseName = "";
    if(course === null) return courseName;

    switch(course.substr(1)){
        case 'EDF':
            courseName = 'Edificações';
        break;
        case 'ENF':
            courseName = 'Enfermagem';
        break;
        case 'GEO':
            courseName = 'Geodésia';
        break;
        case 'INF':
            courseName = 'Informática';
        break;
        case 'MEC':
            courseName = 'Mecânica';
        break;
        case 'QLD':
            courseName = 'Qualidade';
        break;
        case 'BEQ':
            courseName = 'Biologia e Química';
        break;
        case 'FEM':
            courseName = 'Física e Matemática';
        break;
        case 'HUM':
            courseName = 'Humanas';
        break;
    }

    return `${courseName} - ${course[0]}º ano`;
}

export default fullCourse;