// 1.Write a function squareNumbers(arr) that returns a new array where each number in the original array is squared using map method.
let arr = [1, 2, 3, 4, 5, 6];
let square = arr.map(function (a) {
  let square = a ** 2;
  return square;
});
console.log(square);
// o/p: [ 1, 4, 9, 16, 25, 36 ]

// using arrow function
// let arr = [1, 2, 3, 4, 5, 6];
// let square = arr.map((a) => a * a);
// console.log(square);

// 2.Write a function toUppercase(arr) that returns a new array where each string in the original array is converted to uppercase using map method.
let arr1 = ["vizag", "guntur", "tirupati", "amaravati"];
let x2 = arr1.map((a) => a.toUpperCase());
// using arrow function
console.log(x2);
// o/p: [ 'VIZAG', 'GUNTUR', 'TIRUPATI', 'AMARAVATI' ]
