// String, Numbers, Boolean, null, undefined
/* 
const firstName = "John"; //changed name to firstName to avoid error
const years = 30; // changed age to years to avoid error
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

// String, Numbers, Boolean, null, undefined

const name = "John";
const age = 30;

// Concatenation
console.log("my name is " + name + " and I am " + age); // shows "my name is John and I am 30" when i open inspect and check console
// template string
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;

console.log(hello); */

//const s = "Hello World"; //adding ! to Hello World changes console.log from 11 to 12

//console.log(s.length);  // change s.length to s.toUpperCase()); changes Hello World! to HELLO WORLD!
// console.log(s.substring(0, 5)); console logs Hello

//console.log(s.split("")); //empty qoutes makes an array

/*  const s = "technology, computers, it, code";
console.log(s.split(", ")); */

//Arrays - variables that hold multiple values

/*const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);*/

//const fruits = ["apples", "oranges", "pears"];
//fruits[3] = "grapes";
//console.log(fruits[1]); //[1] singles out 'oranges' because apples is zero 0
//console.log(fruits); //adds grapes to the array in the console log
//fruits.push("mangos"); .push adds to end of array
//fruits.unshift("strawberries");  .unshift adds to beginning of array
//console.log(fruits);   .pop takes off last item of array and console.log(Array.isArray(fruits)); checks to see if its an array (true or false result) (fruits.indexof('oranges')); will console log 2 (the oranges value)

// Object Literals

/*const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);*/

/*const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meet with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
]; */

//console.log(todos[1].text);  Prints out 'Meet with boss'
/*const todoJSON = JSON.stringify(todos);
console.log(todoJSON); 
*/

// For

/*for (let i = 0; i <= 10; i++) {
  console.log("For Loop Number: ${i}");
}
//While Loop
let i = 0;
while (i < 10) {
  console.log("While Loop Number:");
  i++;
}*/

//for (let todo of todos) {
//console.log(todo.text);
//}

// forEach, map, filter

/*const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted); */

/*const x = 20;

if (x === 10) {
  console.log("x is 10");
} else {
  console.log("x is NOT 10");
} */

/*const x = 21;

const color = x > 10 ? "red" : "blue";

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is NOT red or blue");
    break;
} */

/*const addNums = (num1 = 1, num2 = 1) => {
  console.log(num1 + num2);
};

addNums(5, 5);  */

// contstructor function
function Person(firstName, lastName, dob) {
  this.firstname = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

this.getFullName = function () {
  return `${this.firstName} $(this.lastName}`;
};

// Instantiate object
const person1 = new Person("John", "Smith", "4-11-1977");
const person2 = new Person("Mary", "Smith", "3-6-1970");
console.log(person1.dob.getFullYear());
