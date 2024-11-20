// Data Types in JavaScript
// 1.what will be the output?
let x = 5;
let y = x;
x = 10;
console.log(x); // What is the value of x?
console.log(y); // What is the value of y and why?
// Output: - 10,5

// 2.what will be the output?
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj1.name = "Bob";
console.log(obj1.name); // What is the output?
console.log(obj2.name); // What is the output and why?
// Output: - Bob Bob

// 3. let a = "hello";
let b = 42;
let c = true;
let d = { key: "value" };
let e = null;
let f = undefined;

console.log(typeof a); // What will this output?
console.log(typeof b); // What will this output?
console.log(typeof c); // What will this output?
console.log(typeof d); // What will this output?
console.log(typeof e); // What will this output and why?
console.log(typeof f); // What will this output and why?
// Output: -
// string
// number
// boolean
// object
// object
// undefined

// 4. let numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]); // What will this output?
console.log(numbers[0]); // What will this output?
console.log(numbers[numbers.length - 1]); // What will this output and why?
// Output: - 30,10,50

// 5. let fruits = ["apple", "banana", "mango"];
fruits[1] = "orange";
console.log(fruits); // What will this output?
// Output: - [“apple”, “orange”, “mango”].

// 6. let matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];
console.log(matrix[1][2]); // What will this output?
console.log(matrix[2][0]); // What will this output and why?
// Output: - 6,7

// 7. let person = {
// name: "John",
// age: 25,
// city: "New York"
// };
console.log(person.name); // What will this output?
console.log(person.age); // What will this output?
// Output: - John,25

// 8. let car = {
// make: "Toyota",

// model: "Corolla",
// year: 2021
// };
console.log(car["make"]); // What will this output?
console.log(car["model"]); // What will this output?
// Output: - Toyota, Corolla

// 9. let book = {
// title: "The Great Gatsby",
// author: "F. Scott Fitzgerald"
// };
book.author = "Anonymous";
console.log(book.author); // What will this output and why?
// Output: - Anonymous

// 10. let student = {
// name: "Alice",
// grade: "A"
// };
student.age = 20;
console.log(student); // What will this output?
// Output: - {name: 'Alice', grade: 'A', age: 20}
