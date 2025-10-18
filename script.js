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

// const languages = {
//   js: "JavaScript",
//   py: "Python",
//   rb: "Ruby",
// };
// for (key in languages) {
//   console.log(`${key}: ${languages[key]}`);
// }

// object methods example
// const language = {
//   name: "JavaScript",
//   type: "Programming Language",
//   year: 1995,
// };

// // console.log(Object.keys(language)); // returns array of keys
// // console.log(Object.values(language)); // returns array of values
// // console.log(Object.entries(language)); // returns array of [key, value] pairs

// language.version = "ES6"; // adding new key-value pair
// console.log(language); // modified object

// delete language.year; // deleting key-value pair
// console.log(language); // modified object

// language["type"] = "Scripting Language"; // modifying value of existing key
// console.log(language); // modified object

// ==================================
// spread operator example
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2]; // combining two arrays
// console.log(combined); // [1, 2, 3, 4, 5, 6]

// // spread operator with objects example
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combinedObj = { ...obj1, ...obj2 }; // combining two objects
// console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

// // rest operator example
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 10)); // 15

// function sumAll(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sumAll(1, 2, 3, 4, 5)); // 15
// console.log(sumAll(10, 20, 30)); // 60

// function sum(text, ...rest) {
//   const restSum = rest.reduce((total, num) => total + num, 0);
//   return `${text} ${restSum}`;
// }

// console.log(sum("The sum is:", 1, 2, 3, 4, 5)); // The sum is: 15
// console.log(sum("Total:", 10, 20, 30)); // Total: 60

// Truthy/ Falsy values in JavaScript
// Falsy values: false, 0, "", null, undefined, NaN

// const values = [false, 0, "", null, undefined, NaN, "Hello", 42, [], {}];

// const result = "";

// if (!result) {
//   console.log("Falsy value");
// } else {
//   console.log("Truthy value");
// }

// turnary operator example
// const age = 20;
// const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
// console.log(canVote);

//destructuring example
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   education: {
//     // degree: "Bachelor's",
//     major: "Computer Science",
//   },
// };
// const { name, age, city } = person; // object destructuring
// console.log(name); // John
// console.log(age); // 30
// console.log(city); // New York
// const { education: { degree, major } = {} } = person; // nested object destructuring
// console.log(degree);

// ===============================
// optional chaining example
// const person = {
//   name: "John",
//     age: 30,
//     city: "New York",
//     education: {
//       // degree: "Bachelor's",
//       major: "Computer Science",
//     },
// };
// console.log(person.education?.degree); // undefined

// nullish coalescing operator example
// nullish = null or undefined
// const username = null;
// const displayName = username ?? "Guest User";
// console.log(displayName); // Guest User

//fetch API example
function fetchData() {
  const result = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  async function fetchDataAsync() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
