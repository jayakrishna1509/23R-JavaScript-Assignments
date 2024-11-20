// functions in JavaScript
// 1.write a function to check whether input num is even or odd.
var num = 15; // 15 is odd
// var num = 24; // 24 is even
function checkEvenOdd(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
checkEvenOdd(num);

// 2.write a function to check whether input string is palindrome or not.
// var str = "mom"; //palindrome
var str = "hollywood"; // not a palindrome
function palindrome(str1) {
  var str2 = "";
  for (i = str1.length - 1; i >= 0; i--) {
    str2 += str1[i];
  }
  if (str2 == str1) {
    console.log("palindrome");
  } else {
    console.log("not a palindrome");
  }
}
palindrome(str);

// 3.write a function to check the largest number among three numbers.
var n1 = 6;
var n2 = 46;
var n3 = 138; // 138 is largest number than 6 and 46
function largestNumber(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(`${n1} is largest number than ${n2} and ${n3}`);
  } else if (n2 > n1 && n2 > n3) {
    console.log(`${n2} is largest number than ${n1} and ${n3}`);
  } else {
    console.log(`${n3} is largest number than ${n1} and ${n2}`);
  }
}
largestNumber(n1, n2, n3);
