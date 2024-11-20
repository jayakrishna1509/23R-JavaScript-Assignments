// var aos = ["mom", "js", "malayalam", "html", "css", "dad"];

// op=["mom","dad","malayalam"]

// using for/while and do-while loop

// var x=["mom","js","malayalam","html","css","dad"];
// var y=[]
// for(i=0;i<x.length;i++){
//    new_arr=x[i]
//     m=new_arr.length-1;
//       k=""
//     for(j in new_arr){
//         k=k+new_arr[m]
//         m--
//     }
//     if(k==new_arr){
//         y.push(x[i])
//     }
// }
// console.log(y)
// ['mom','malayalam','dad']

// for loop
var aos = ["mom", "js", "malayalam", "html", "css", "dad"];
var op = [];
var j = 0;
var words = ["mom", "dad", "malayalam"]; //order
for (var i = 0; i < words.length; i++) {
  for (var k = 0; k < aos.length; k++) {
    if (aos[k] === words[i]) {
      op[j] = aos[k];
      j++;
      break;
    }
  }
}
console.log(op);

// while loop
var aos = ["mom", "js", "malayalam", "html", "css", "dad"];
var op = [];
var i = 0;
var j = 0;
var words = ["mom", "dad", "malayalam"]; //order
while (i < words.length) {
  for (var k = 0; k < aos.length; k++) {
    if (aos[k] === words[i]) {
      op[j] = aos[k];
      j++;
      break;
    }
  }
  i++;
}
console.log(op);

// do-while loop
var aos = ["mom", "js", "malayalam", "html", "css", "dad"];
var op = [];
var i = 0;
var j = 0;
var words = ["mom", "dad", "malayalam"]; //order
do {
  for (var k = 0; k < aos.length; k++) {
    if (aos[k] === words[i]) {
      op[j] = aos[k];
      j++;
      break;
    }
  }
  i++;
} while (i < words.length);
console.log(op);
