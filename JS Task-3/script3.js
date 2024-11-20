// Arrays and objects accessing few array methods in JavaScript
// 1.Write a JavaScript code to add an element to the end of an array using the push method.
// Example: [1, 2, 3] → [1, 2, 3, 4]
var arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// Output: [1, 2, 3, 4]

// 2.Write a JavaScript code to remove the last element from an array using the pop method.
// Example: [1, 2, 3, 4] → [1, 2, 3]
var arr = [1, 2, 3, 4];
arr.pop();
console.log(arr);
// Output: [1, 2, 3]

// 3.Write a JavaScript code to add an element to the beginning of an array using the unshift method.
// Example: [2, 3, 4] → [1, 2, 3, 4]
var arr = [2, 3, 4];
arr.unshift(1);
console.log(arr);
// Output: [1, 2, 3, 4]

// 4.Write a JavaScript code to remove the first element from an array using the shift method.
// Example: [1, 2, 3, 4] → [2, 3, 4]
var arr = [1, 2, 3, 4];
arr.shift();
console.log(arr);
// Output: [2, 3, 4]

// 5.Write a JavaScript code to convert an array into a string using the join method.
// Example: [1, 2, 3] → "123"
var arr = [1, 2, 3];
// let x=arr.join(“”);
console.log(x);
// Output: “123”

// Choose the Correct Answer: -
// 1.What will be the output of [1, 2, 3, 4].pop()?
// A)   [1, 2, 3, 4]
// B) [1, 2, 3]
// C) [2, 3, 4]
// D) Error
// Output: B) [1, 2, 3]
var arr1 = [1, 2, 3, 4]; //Here we are declaring the variable with an array
arr1.pop(); //Here we are using pop method to remove the last element in the array
console.log(arr1); // Output: - [ 1, 2, 3 ]  -> after pop method called array we log the variable to get output

// 2.What will be the output of [1, 2, 3].push(4)?
// A) [1, 2, 3]
// B) [1, 2, 3, 4]
// C) [4, 1, 2, 3]
// D) Error
// Output: B) [1, 2, 3, 4]
var arr2 = [1, 2, 3]; //Here we are declaring the variable with an array
arr2.push(4); //Here we are using push method to add the last element in the array
console.log(arr2); // Output: - [1, 2, 3, 4 ]  -> after push method called array we log the variable to get output

// 3.What will be the output of [1, 2, 3, 4].shift()?
// A) [1, 2, 3, 4]
// B) [2, 3, 4]
// C) [1, 2, 3]
// D) Error
// Output: B) [2, 3, 4]
var arr3 = [1, 2, 3, 4]; //Here we are declaring the variable with an array
arr3.shift(); //Here we are using shift method to remove the first element in the array
console.log(arr3); // Output: - [ 2, 3, 4 ] -> after shift method called array we log the variable to get output

// 4.What will be the output of [2, 3, 4].unshift(1)?
// A) [2, 3, 4]
// B) [1, 2, 3, 4]
// C) [1, 3, 4]
// D) Error
// Output: B) [1, 2, 3, 4]
var arr4 = [2, 3, 4]; //Here we are declaring the variable with an array
arr4.unshift(1); //Here we are using unshift method to add the element in first  in the array
console.log(arr4); // Output: - [1, 2, 3, 4 ]

// 5.What will be the output of [1, 2, 3].join("")?
// A) 123
// B) [1, 2, 3]
// C) 1 2 3
// D) Error
// Output: A) 123
var arr5 = [1, 2, 3]; // Here we have declared the array
var x1 = arr5.join(""); // we are calling array by the join method. The Join method concatenates all elements of the array into a single string.
//By passing an empty string "" as the argument to join, it indicates that there should be no characters placed between the elements when they are combined.
console.log(x1); // Output: - "123"  when we log x1 variable it gives concated elements of array inform of single string.
