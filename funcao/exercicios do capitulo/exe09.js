const gradeCheck = (grade) => {

    if (grade < 0) {
        
        return 'A nota não pode ser menor que 0'

    } else if (grade > 100) {

        return 'A nota não pode ser maior que 100'

    }
    
    let roundedGrade = roundGrade(grade);

    if (roundedGrade > 40) {
        
        return `O aluno foi aprovado ${roundedGrade}`;

    } else {

        return `O aluno foi reprovado ${roundedGrade}`;

    }

}

const roundGrade = (grade) => {

    if (grade % 5 > 2) {

        return grade + (5 - (grade % 5));

    } else {

        return grade;

    } 
}


console.log(gradeCheck(88));