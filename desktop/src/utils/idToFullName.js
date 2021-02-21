function idToFullName(course){
    let courseName = "";
    if(course === null) return courseName;

    switch(course){
        case 'edf':
            courseName = 'Edificações';
        break;
        case 'enf':
            courseName = 'Enfermagem';
        break;
        case 'geo':
            courseName = 'Geodésia';
        break;
        case 'inf':
            courseName = 'Informática';
        break;
        case 'mec':
            courseName = 'Mecânica';
        break;
        case 'qld':
            courseName = 'Qualidade';
        break;
        case 'beq':
            courseName = 'Biologia e Química';
        break;
        case 'fem':
            courseName = 'Física e Matemática';
        break;
        case 'hum':
            courseName = 'Humanas';
        break;
    }

    return `${courseName}`;
}

export default idToFullName;