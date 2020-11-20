for (let i = 0; i < 5; i++) {
  // console.log(i); // 0 1 2 3 4
}

//console.log(i); // ReferenceError: i is not defined
//as a developer expecting error for let got 5.

//never take duplicate variables
// var data = 100;

// var data = 200;

// console.log(data); // 200

// let data = 100;

// let data = 200;

//console.log(data); // Error

//in HTML block of code { }

// let data1 = 100;
// //console.log(data1); //100
// {
//   var data1 = 200;
//   //console.log(data1); //200
// }

// console.log(data1); // 200

// let data2 = 100;
// {
//   let data2 = 200;
// }

// console.log(data2); //100

// console.log(i); //undefined
// var i = 100;

//getting undefined instead of error called variable hoisting.

// console.log(i); // Error
// let i = 100;

// const data3 = 100;
// data3 = 200;

// console.log(data3); //TypeError: Assignment to constant variable.

const arr = ["Angular", "ReactJS", "NodeJS"];

//arr = []; //TypeError: Assignment to constant variable.

arr[0] = "Angular11";

// console.log(arr); // [ 'Angular11', 'ReactJS', 'NodeJS' ]

arr.push("VueJS");

//console.log(arr); //[ 'Angular11', 'ReactJS', 'NodeJS', 'VueJS' ]

// arr = ["Angular12", "Deno", "ReacrJS"];

// console.log(arr); // TypeError: Assignment to constant variable.

const obj = {
  wish: "welcome",
};

// obj = {}; // TypeError: Assignment to constant variable.

// obj = { wish: "welcome to const variables" }; // reinitialisation not possible

obj.wish = "hello";

console.log(obj); //{ wish: 'hello' }

// modification is possible but reinitialisation not possible.
