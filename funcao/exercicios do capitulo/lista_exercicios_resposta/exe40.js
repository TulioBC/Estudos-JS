function conceptualizeGrades(grades) {
    let concepts = [];
    for (let index = 0; index < grades.length; index++) {
        if (grades[index] >= 0 && grades[index] <= 4.9) {
            concepts.push('D');
        } else if (grades[index] >= 5 && grades[index] <= 6.9) {
            concepts.push('C');
        } else if (grades[index] >= 7 && grades[index] <= 8.9) {
            concepts.push('B');
        } else if (grades[index] >= 9 && grades[index] <= 10) {
            concepts.push('A');
        } else {
            concepts.push('Invalid grade');
        }
    }
    return concepts;
}

let grades = [8, 3, 2.5, 10, 14, 100, 5.7, 8.9];
let finalArray = conceptualizeGrades(grades);

console.log(finalArray);
