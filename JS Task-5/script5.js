// for-in, for-of, arrays, strings and objects in JavaScript
// 1. Solve using for in loop.
// i/p: var car=
// {
// brand:'Toyota',
// model:'Corolla',
// year:2020
// };
// o/p:
// brand: TOYOTA
// model: COROLLA
// year:2020
// A) var car = {
// brand: 'Toyota',
// model: 'Corolla',
// year: 2020
// }
// for (i in car) {
// // console.log(`${i}: ${car[i]}`);
// console.log(`${i}: ${car[i].toUpperCase()}`);
// }

// 2. Solve using for in loop.
// i/p: var numbers = [1,2,3,4,5];
// o/p:
// 1-HI
// 2-HI
// 3-HI
// 4-HI
// 5-HI
// A) var numbers = [1, 2, 3, 4, 5];
// for (i in numbers) {
// console.log (` ${numbers[i]} - ${"HI"} `);
// }

// 3. Solve using for in loop.
// i/p: var fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// o/p:
// 0-APPLE
// 1-BANANA
// 2-CHERRY
// 3-DATE
// A) var fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// for (i in fruits) {
// console.log (` ${i}-${fruits[i].toUpperCase()} `);
// }

// 4. Update the city property here
// i/p:var obj={
// name: ’John’,
// age:30,
// address: {
// city: ’Los Angeles’,
// state: ’CA’
// }
// }
// o/p: {name: 'John’, age: 30, address: {city: ‘San Francisco', state: 'CA’}}
// A) var obj= {
// name: ’John’,
// age:30,
// address: {
// city: ’Los Angeles’,
// state: ’CA’
// }
// }
// obj.address.city='San Francisco';
// console.log(obj);

// 5. Update the model and year here.
// i/p: var car = {
// brand:' Toyota',
// model: 'Camry',
// year:2020
// };
// o/p: {brand: 'Toyota', model: 'Corolla', year: 2022}
// A) var car = {
// brand: 'Toyota',
// model: 'Camry',
// year:2020
// };
// car.model = 'Corolla';
// car.year = 2022;
// console.log(car);

// 6. Add an ingredient here.
// i/p: var recipe = {
// name: ‘Pasta’,
// servings:2,
// ingredians: [‘noodles’, ‘sauce’]
// };
// o/p: {name: 'Pasta', servings: 2, ingredients: [ 'noodles', 'sauce', 'cheese']}
// A) var recipe = {
// name:'Pasta',
// servings:2,
// ingredients: ['noodles', 'sauce']
// };
// recipe.ingredients.push('cheese');
// console.log(recipe);
