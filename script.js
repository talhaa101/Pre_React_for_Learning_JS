// js scoping example

// var lang = "JavaScript";
// var lang = "Java";

// function learn(topic) {
//   var lang = topic;
//   console.log(`I am learning ${lang}`);
// }

// learn("JavaScript");

// console.log(`Current language is ${lang}`);

// let var and const scoping example
// var lang = "Java";

// function learn(topic) {
//   var lang = topic;

//   if (true) {
//     const s = 10;
//     // let a = 5;
//     // console.log(a);
//     console.log(s);

//     const a = {
//       b: 10,
//     };
//     a.b = 20;
//     console.log(a);
//   }

//   console.log(`I am learning ${topic}`);
// }

// learn("JavaScript");

// console.log(`Current language is ${lang}`);

// ==============================================

// regular function

// function hello() {
//   console.log("Hello World");
// }

// hello();

// function expression

// const hello = function() {
//     console.log("Hello World");
// };

// named function expression

// const hello = function hello() {
//   console.log("Hello World");
// };

// // arrow function
// const hello = () => {
//   console.log("Hello World");
// };

// const add = (a, b) => a + b; // single line implicit return

// // i want to retuern object from arrow function
// const obj = (a, b) => ({
//   a: 5,
//   b: 10,
// });
// console.log(obj());

// // another way to return object
// const obj2 = (a, b) => {
//   return {
//     a: 5,
//     b: 10,
//   };
// };
// console.log(obj2());

// // anonymous function
// function hi() {
//     return function ()  { // this is anonymous
//         console.log("hi");
//     };
// }

// anonymous arrow function another example
// function hi() {
//   return () => {
//     console.log("hi");
//   };
// }

// ================================================
// event handling example

// selecting button
// const button = document.getElementById("button");

// button.addEventListener("click", talha);

// //js is a event driven language
// function talha() {
//   console.log("Button clicked by talha");
// }

// ==============================================
// premivitive and refereence data types example

// string, number , bollean --> premitive data types
// object, array, function --> reference data types

// let x = 5;
// let y = 6;
// x = y; // copying value of y to x
// y = 10;

// console.log(x); // 6
// console.log(y); // 10

// let a = ["JS", "Python"]; // reference data type
// let b = ["Html", "CSS"]; // reference data type
// b = a;

// console.log(a); // ["JS", "Python"]
// console.log(b); // ["Html", "CSS"]

// a.push("GO");
// console.log(a); // ["JS", "Python", "GO"]
// console.log(b); // ["JS", "Python", "GO"]

// ======================================================

// JS Array Methods Examples

// find method example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.find((f) => f === "Orange" || f === "Apple");
// console.log(result);

// findIndex method example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.findIndex((f) => f === "Orange" || f === "Apple");
// console.log(result);

// filter method example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.filter((f) => f === "Orange" || f === "Mango");
// console.log(result);
// console.log(fruits);

// slice method example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.slice(1, 3); // end index is not included
// console.log(result);
// console.log(fruits);

// splice method example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// const result1 = fruits.splice(2, 1); // removes 1 item at index 2
// console.log(result1);
// console.log(fruits); // modified original array
// const result = fruits.splice(1, 2, "Kiwi", "Pineapple"); // modifies original array
// console.log(result); // removed items
// console.log(fruits); // modified original array

// main difference between slice and splice is that slice does not modify original array whereas splice modifies original array

// concat method example
// const fruits1 = ["Banana", "Orange"];
// const fruits2 = ["Apple", "Mango"];
// const result = fruits1.concat(fruits2);
// console.log(result);
// console.log(fruits1);
// console.log(fruits2);
// concat does not modify original arrays

// push method example
// const fruits = ["Banana", "Orange"];
// const newLength = fruits.push("Apple", "Mango"); // modifies original array
// console.log(newLength); // new length of array
// console.log(fruits); // modified original array

// map method example
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((n) => n * 2); // does not modify original array
// console.log(result);
// console.log(numbers);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Mango"];
// const ans = fruits.map((f) => {
//   if (f === "Mango") {
//     return "Mango (Delicious)";
//   } else {
//     return "N/A";
//   }
// });
// console.log(ans);

// reducing an array example
// const vals = [1, 2, 3, 4, 5];
// const sum = vals.reduce((total, currentValue) => total + currentValue, 0);
// console.log(sum);

// // foreach method example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach((f, index) => {
//   console.log(`${index}: ${f}`);
// });

// // for...of loop example
// for (const f of fruits) {
//   console.log(f);
// }

// for...of loop example
// const num = [10, 20, 30, 40, 50];
// for (value of num) {
//   console.log(value);
// }

// for...in loop example

const languages = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
};
for (key in languages) {
  console.log(`${key}: ${languages[key]}`);
}
