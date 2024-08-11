// let x =5(operators)

// //x=x+2
// x /= 5
// console.log(x)

// let number1 = 5;
// let number2 = 6;
// console.log(number1 + number2); //(expression)
// console.log(number1-number2)
// console.log(number1*number2)
// //increment
// console.log(++number1);
// console.log(number1);
// console.log(number1++);
// console.log(number1);
// //decrement
// console.log(--number1)
// console.log(number1)
// console.log(number1--)
// console.log(number1)

// console.log(1>5)
// let x=5
//(relational operaters)
// console.log(x<5)
// console.log(x<=5)
// console.log(x>5)
// console.log(x>=5)

//(equality operater)
// console.log(x === 5)// 5 === 5
// console.log(x !== 5)// 5 !== 5

//(string comparison)
//console.log('aleien' < 'arun')// dictionary

//comparison between different types
// console.log('1'<5) //1<5
// console.log(true == 1) //boolen and int

//STRICT EQUALITY OPERATER
// console.log(1 === 1) //number === number
// console.log()

// let a = 'suresh'
// let b = ''
// for(let i=a.length-1; i>=0; i = i -2){
//         console.log(i)
//         b = b + a[i]
// }

// console.log(b)

//  Falsy (false)
//  undefined
//  null
//  0
//  false
//  '' -> ""
//  NaN

//Truthy
//Anything that is not falsy is -?> Truthy
// let userName = undefined;
// let defaultName = "janani";
// let currentName = userName || defaultName

// console.log("USER:"+ currentName)
// result willl be janani
// let hrs = new Date();
// let hour = hrs.getHours();

// if ((hour >= 0, hour <= 12)) {
//   console.log("Good Morning");
// } else if ((hour >= 12, hour <= 16)) {
//   console.log("Good Afternoon");
// } else if ((hour >= 16, hour <= 20)) {
//   console.log("Good Evening");
// } else {
//   console.log("Good Night");
// }

// let n = 5;

// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= n; j++) {
//     console.log(i);
//   }
// }

// STAR UPPER LEFT TRIANGLE
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let star = "*";
//   console.log(star.repeat(i));
// }
//
// UPPER RIGHT TRIANGLE
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let star = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + star.repeat(i));
// }
//
//LOWER RIGHT TRIANGLE
// let n = 5;

// for (let i = n; i >= 1; i--) {
//   let star = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + star.repeat(i));
// }
//
// LOWER LEFT STAR TRIANGLE
// let n = 5;

// for (let i = n; i >= 1; i--) {
//   let star = "*";
//   console.log(star.repeat(i));
// }
//
//NESTED FOR LOOP
//SQUARE STAR
// function printSquare(size) {
//   for (i = 1; i <= size; i++) {
//     let line = "";
//     for (j = 1; j <= size; j++) {
//       line += "*";
//     }
//     console.log(line);
//   }
// }
// let patternSize = 5;
// printSquare(patternSize);

//SAME USING FOR LOOP
// let line = "";

// function square(n) {
//   for (let i = 1; i <= n; i++) {
//     line += "*";
//   }
//   for (let j = 1; j <= n; j++) {
//     console.log(line);
//   }
// }
// let size = 6;
// square(size);

//
//DIAMOND STAR PATTERN
//SOLID DIAMOPND STAR PATTERN
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let star = "*";
//   let space = "";
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }
// for (let i = n; i >= 1; i--) {
//   let star = "*";
//   let space = "";
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }
// for (let i = n - 1; i >= 1; i--) {
//   let str = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }

//HOLLOW DIAMOND PYRAMID
// let n = 5;
// for(let i = 1; i<= n; i++){
//   let str = '';
//   for(let j = 1; j <= 2*n; j++){
//     if(i+j)
//   }
// }

// starpyramid
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }
// let n = 5;
// for (let i = n - 1; i >= 1; i--) {
//   let str = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let star = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }
// for (let i = n; i >= 1; i--) {
//   let star = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }
