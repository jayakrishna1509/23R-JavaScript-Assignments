// Operators in JavaScript Revision
// 1.var arr= [3,5,10,15,23,22,25,35,56]
// o/p: [ 5, 10, 15, 25, 35]
var arr = [3, 5, 10, 15, 23, 22, 25, 35, 56];
var num2 = [];
for (i in arr) {
  if (arr[i] % 5 == 0) {
    num2.push(arr[i]);
  }
}
console.log(num2);
// Output: - [ 5, 10, 15, 25, 35]

// 2.var arr=["htmL","csS","javaScrIPT","react","angulaR","nodE","EXPREss"];
//o/p: ["htmL", "csS", "javaScrIPT", "react", "angulaR", "nadE", "EXPREss"]
var arr = ["htmL", "csS", "javaScrIPT", "react", "angulaR", "nodE", "EXPREss"];
var arr2 = [];
for (var i in arr) {
  if (arr[i] !== arr[i].toLowerCase()) {
    arr2.push(arr[i]);
  }
}
arr2.pop();
console.log(arr2);
// Output: - [ 'htmL', 'csS', 'javaScrIPT', 'angulaR', 'nodE']

// 3.var arr= ["html", "css","js","react","angular"]
// o/p: [ 'HTML', 'JS', 'ANGULAR']
var arr = ["html", "css", "js", "react", "angular"];
var arr1 = [];
for (i in arr) {
  if (i % 2 == 0) {
    arr1.push(arr[i].toUpperCase());
  }
}
console.log(arr1);
// Output: - [ 'HTML', 'JS', 'ANGULAR']
