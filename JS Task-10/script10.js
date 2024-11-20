// Terinary operator for loop in JavaScript
// Problem 1
// Given a variable score, use a ternary operator to determine the performance level:
// •	"Excellent" if score is 90 or above,
// •	"Good" if score is between 60 and 89,
// •	"Needs Improvement" if score is below 60.
// Test Cases:
// 1.	Input: score = 95
// Expected Output: "Excellent"
// 2.	Input: score = 75
// Expected Output: "Good"
// 3.	Input: score = 50
// Expected Output: "Needs Improvement"

var score = 50; //Needs Improvement
// var score = 75; //Good
// var score = 95; //Excellent

score >= 90
  ? console.log("Excellent")
  : score >= 60 && score < 89
  ? console.log("Good")
  : console.log("Needs Improvement");

//   Problem 2
//   Given a variable day, use a ternary operator to check if it's a weekend:
//   •	"Weekend" if day is "Saturday" or "Sunday",
//   •	"Weekday" for any other day.
//   Test Cases:
//   1.	Input: day = "Saturday"
//   Expected Output: "Weekend"
//   2.	Input: day = "Monday"
//   Expected Output: "Weekday"
//   3.	Input: day = "Sunday"
//   Expected Output: "Weekend"
var day = "Monday"; //Weekday
day == "Saturday" || day == "Sunday"
  ? console.log("Weekend")
  : console.log("Weekday");

//   Problem 3
//   Given a string inputString, use the ternary operator to check if it is a palindrome. A string is considered a palindrome if it reads the same forwards and backwards.
//   •	Output: "Palindrome" if the string is a palindrome,
//   •	"Not a Palindrome" otherwise.
//   Test Cases:
//   1.	Input: inputString = "madam"
//   Expected Output: "Palindrome"
//   2.	Input: inputString = "hello"
//   Expected Output: "Not a Palindrome"
//   3.	Input: inputString = "racecar"
//   Expected Output: "Palindrome"
//   4.	Input: inputString = "world"
//   Expected Output: "Not a Palindrome"
var str = "madam"; //Palindrome
var isPalindrome =
  str === str.split("").reverse().join("") ? "Palindrome" : "Not a palindrome";
console.log(isPalindrome);

// Problem 4
// Input: HELLO
// Output:
// H
// HE
// HEL
// HELL
// HELLO
var str = "HELLO";
var output = "";
for (i = 0; i <= str.length - 1; i++) {
  output += str[i];
  console.log(output);
}
// H
// HE
// HEL
// HELL
// HELLO
