const { Map, Seq } = require('immutable');

function printBestStudents(grades) {
  const filteredGrades = Seq(grades)
    .map(student => Map(student).update('firstName', name => name.charAt(0).toUpperCase() + name.slice(1)))
    .map(student => Map(student).update('lastName', name => name.charAt(0).toUpperCase() + name.slice(1)))
    .filter(student => student.get('score') >= 70)
    .toObject();

  console.log(filteredGrades);
}

// Example usage
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 65,
    firstName: 'john',
    lastName: 'doe',
  },
  // Add more students if needed
};

printBestStudents(grades);