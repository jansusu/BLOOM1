// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let star = "*";
//   console.log(star.repeat(i));
// }
// for (let i = 1; i <= n; i++) {
//   let star = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }
// for (let i = n; i >= 0; i--) {
//   let star = "*";
//   console.log(star.repeat(i));
// }
// for (let i = n-1; i >= 1; i--) {
//   let star = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }
// for (let i = 1; i <= n; i++) {
//   let star = "";
//   for (let j = 1; j <= 2 * n; ++j) {
//     if (i + j == n + 1 || i == j - n + 1) {
//       star += "*";
//     } else star += " ";
//   }
//   console.log(star);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let star = "";
//   for (let j = 1; j <= 2 * n; ++j) {
//     if (i + j == n + 1 || i == j - n + 1) {
//       star += "*";
//     } else star += " ";
//   }
//   console.log(star);
// }
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";

//   for (let j = 1; j <= 2 * n; ++j) {
//     if (i + j == n + 1 || i == j - n + 1) {
//       str += "*";
//     } else str += " ";
//   }

//   console.log(str);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= 2 * n; ++j) {
//     if (i + j == n + 1 || i == j - n + 1) str += "*";
//     else str += " ";
//   }

//   console.log(str);
// }
// let i = 6;
// console.log(++i);

// let map1 = new Map1([(10, 1), (20, 2), (30, 3), (40, 4)]);
// console.log("Map1");
// console.log(map1);
// let a = [1, 5, 6, 3, 4, 0, 4, 9];
// let fullLength = a.length;
// let aLength = a.length / 2;

// for (let i = 0; i < aLength; i++) {
//   [a[i], a[fullLength - i - 1]] = [a[fullLength - i - 1], a[i]];

// }
// console.log(a);
// function countOfnum(arr, target) {
//   let count = 0;
//   for (let value of arr) {
//     if (value === target) {
//       count++;
//     }
//   }
//   return count;
// }
// let countOfFour = countOfnum(a, 4);
// console.log(countOfFour);
// let a = "suresh";
// let b = "janani";

// function countWord(arr, target) {
//   let count = 0;
//   for (let value of arr) {
//     if (value === target) {
//       count++;
//     }
//   }
//   return count;
// }
// let countWordS = countWord(b, "j");
// console.log(countWordS);
// let a = [23, 4565, 6832676, 65, 738];
// let b = Math.max(...a);
// a.sort(function (a, b) {
//   return a - b;
// });
// console.log(a[a.length - 1]);
// let b = [56, 872, 738, 8, 2, 899];
// b.sort(function (x, y) {
//   return y - x;
// });
// console.log(b[0]);
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n; j++) {
//     if (i === 5 || j === 1) {
//       str += "*";
//     } else {
//       str += "";
//     }
//     console.log(str);
//   }
// }

// let marks = 25;

// if (marks >= 35) {
//   console.log("You had passed this  paper");
// }
// if (marks <= 35) {
//   console.log("Better luck next work hard");
// }

// let budget = 10000;
// if (budget <= 15000) {
//   console.log("you can go for Android mobile");
// } else {
//   console.log("you would think about iPhone");
// }

// let targetMileage = 34;
// if (targetMileage <= 15) {
//   console.log("You can buy a TVS 50");
// } else if (targetMileage <= 35) {
//   console.log("Scooter could be the best coice ");
// } else if (targetMileage >= 40) {
//   console.log("Bike is the best option to attain your target mileage");
// } else {
//   console.log("Then you may choose eco-friendly mode of transport");
// }
// let fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("This is an apple.");
//     break;
//   case "banana":
//     console.log("This is a banana.");
//     break;
//   default:
//     console.log("This is some other fruit.");
// }
// let score = 85;
// let grade;

// switch(true) {
//   case (score >= 90):
//     grade = "A";
//     break;
//   case (score >= 80):
//     grade = "B";
//     break;
//   case (score >= 70):
//     grade = "C";
//     break;
//   case (score >= 60):
//     grade = "D";
//     break;
//   default:
//     grade = "F";
// }

// console.log("The grade is " + grade);
// let n = 4;
// let result = n % 2 === 0 ? "Given n is an even num" : "Given n is an odd num";
// console.log(result);
// for (let i = 0; i < 3; i++) {
//   console.log("LEARNING JS");
// }
// let x = 10;

// for (x = 1; x <= 10; x++) {
//   console.log("Value of x :" + x);
// }
// let num = 9;

// while (num > 1) {
//   console.log(num);
//   num -= 1;
// }
// let count = 10;

// do {
//   console.log(count);
//   count++;
// } while (count <= 16);

let person = { name: "Janani", age: 25, email: "abc@gmail" };
for (let key in person) {
  console.log(key, person[key]);
}
