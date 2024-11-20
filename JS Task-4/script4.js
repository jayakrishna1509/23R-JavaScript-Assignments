// Methods in Strings
// write a code to get like below using
// join method:
// 1.var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.join(", ")); // Apple, Banana, Orange
// Output: - "Apple, Banana, Orange";

// 2.var numbers = [1, 2, 3, 4, 5];
console.log(numbers.join("-")); // "1-2-3-4-5"
// Output: - "1-2-3-4-5";

// 3.var chars = ["H", "e", "l", "l", "o"];
console.log(chars.join("")); // Hello
// Output: - "Hello";

// slice method:
// 4.var text = "JavaScript is awesome";
console.log(text.slice(0, 10)); //JavaScript
// Output: - "JavaScript";

// 5.var sentence = "I love learning JavaScript!";
console.log(sentence.slice(7, 15)); //learning
// Output: - "learning";

// 6.var text = "Frontend Development"; //(using negative indices)
console.log(text.slice(-11)); //Development
// Output: - "Development";

// split method:
// 7.var date = "2024-10-21";
console.log(date.split("-")); //[ '2024', '10', '21' ]
// Output: - ["2024", "10", "21"];

// 8.var text = "I love JavaScript programming";
console.log(text.split(" ").slice(0, 2)); //[ 'I', 'love' ]
// Output: - ["I", "love"];

// 9.let url = "https//www.example.com/path/page.html";
console.log(url.split("/")); //[ 'https', '', 'www.example.com', 'path', 'page.html' ]
// Output: - ["https", "", "www.example.com", "path", "page.html"];
