
let students = [
    {name: "Alice", grade: 90},
    {name: "Bob", grade: 75},
    {name: "Charlie", grade: 88},
    {name: "Diana", grade: 92},
    {name: "Eve", grade: 78},

];

console.log("All Students");

function printAllStudents() {

    for (let i in students) {
    console.log('Name: ',students[i].name, '', 'Grade: ', students[i].grade);
}
}
printAllStudents()

console.log("Average Grade");

function calculateAverage() {

    let sum = 0; // Holds the running total using the sum variable
    for(let i = 0; i < students.length; i++) {  
    (sum += students[i].grade); // Equals sum plus the numbers
}
console.log(sum / students.length);
}
calculateAverage()

// Add a new student here (just add to the array directly)

console.log("Add Student");

function add(){

    students.push({name: "Frank", grade: 95});
    for (let i in students) {
    console.log('Name: ',students[i].name, '', 'Grade: ', students[i].grade);}
}
add()

// Change the second student's grade to 85

console.log("Change Second Students Grade");

function changeGrade(){

    for (let i = 0; i < students.length; i++) {
    if (students[i].grade === 75) {
        students[i].grade = 85; 
    }
}

    for (let i in students) {
    console.log('Name: ',students[i].name, '', 'Grade: ', students[i].grade);}
}

changeGrade()

console.log("Calculate New Average Grade");

function calculatenewAverage() {
    let sum = 0; // Holds the running total using the sum variable
    for(let i = 0; i < students.length; i++) {  
    (sum += students[i].grade); // Equals sum plus the numbers
}
console.log(sum / students.length);
}
calculatenewAverage()