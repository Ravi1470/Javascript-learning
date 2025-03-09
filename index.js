// console.log("hello world");

// var a = 10;
// var b = 20;
// var result = a + b;

// console.log("total sum :", result);

// // Primitive Typ
// var num1 = 10;
// var num2 = num1;
// // re assign
// num1 = 20;
// console.log("num1 :", num1);
// console.log("num2 :", num2);

// //Reference Type
// var renum1 = [10];
// var renum2 = renum1;
// renum1[0] = 20;
// console.log("renum1 :", renum1);
// console.log("renum2 :", renum2);

// var age = 17;

// if (age > 17) {
//   console.log("adult");
// } else {
//   console.log("child");
// }

// //elseif
// var color = "green";
// if (color == "red") {
//   console.log("stop");
// } else if (color == "yellow") {
//   console.log("ready");
// } else if (color == "green") {
//   console.log("Go");
// } else {
//   console.log("not working");
// }

// // nested if
// let age1 = 20;
// let hasID = true;

// if (age1 >= 18) {
//   console.log("You are an adult.");

//   if (hasID) {
//     console.log("You have an ID. You can enter.");
//   } else {
//     console.log("You need an ID to enter.");
//   }
// } else {
//   console.log("You are not an adult.");
// }

// // array

// var list = [10, 7, 4, 6, 85, 4];
// console.log("array value :", list);
// console.log("array 0 index value :", list);

// // object

// var obj = {
//   name: "pranava",
//   age: 23,
//   role: "MERN Stack developer",
// };

// console.log("object value :", obj);
// console.log("object role value :", obj.role);

// // json

// var studata = [
//   {
//     name: "hari",
//     age: 18,
//     rol_num: 2010,
//   },
//   {
//     name: "giri",
//     age: 18,
//     rol_num: 2020,
//   },
//   {
//     name: "raja",
//     age: 18,
//     rol_num: 2030,
//   },
// ];

// console.log("Data :", studata);

// // increment

// for (var i = 0; i < 10; i++) {
//   console.log("Increment :", i);
// }

// // Decrement

// for (var i = 10; i > 0; i--) {
//   console.log("Decrement :", i);
// }

// var students = [
//   {
//     name: "hari",
//     age: 18,
//     rol_num: 2010,
//   },
//   {
//     name: "giri",
//     age: 18,
//     rol_num: 2020,
//   },
//   {
//     name: "raja",
//     age: 18,
//     rol_num: 2030,
//   },
// ];

// for (item in students) {
//   console.log("for in value :", students[item]);
// }

// // array

// var list = [1, 2, 3, 4, 5];

// for (value of list) {
//   console.log("for of :", list[value]);
// }

// // for each

// var datavalue1 = [10, 4, 65, 1, 2, 3, 4, 5, 6, 6];

// datavalue1.forEach((ele) => console.log("Foreach Data :", ele));

// // API

// let data = fetch("https://api.disneyapi.dev/character");
// data
//   .then((e) => e.json())
//   .then((res) => {
//     console.log(res);
//     for (let key of res.data) {
//       console.log("API VALUE :", key);
//     }
//   });

// class Rectangle {
//   constructor(width, height) {
//     this._width = width;
//     this._height = height;
//   }

//   get width() {
//     return this._width;
//   }

//   get height() {
//     return this._height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) this._width = newWidth;
//     else {
//       console.error("enter valid input for width");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) this._height = newHeight;
//     else {
//       console.error("enter valid input for height");
//     }
//   }
// }

// const rectangle = new Rectangle(2, 4);

// // Now, the getter methods will be called to retrieve width and height
// console.log(rectangle.height); // Output: 4
// console.log(rectangle.width);  // Output: 2
// new
// // currying
// / // // function sum(tax) {
//   return function (amount) {
//     return tax * amount;
//   }
// }
// const tax = 0.5;
// const gst = sum(tax);


// console.log(gst(100));
