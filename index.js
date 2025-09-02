const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 



const fruits = ["apple", "banana", "cherry"];
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); 


const words = ["hello", "sunshine", "world", "javascript"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); 


const students = [
  { name: 'Amit', scores: [80, 75, 90] },
  { name: 'Sara', scores: [60, 70, 65] },
  { name: 'John', scores: [85, 90, 92] },
  { name: 'Jack', scores: [95, 99, 94] },
];


const averages = students.map(student => {
  const avg = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
  return { name: student.name, avg: avg };
});

console.log(averages);


const toppers = averages.filter(student => student.avg > 85);
console.log(toppers);

students
  .map(student => ({ name: student.name, avg: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length }))
  .filter(student => student.avg > 85)
  .forEach(student => console.log(`Topper: ${student.name} (avg: ${student.avg})`));