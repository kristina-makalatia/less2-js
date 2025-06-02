//
"use strict";

//array
let userNames = ["anna", "lasha", "nini", ["nika", "levani"], "luka", "beka"];
//                  0       1     2                3                 4      5

console.log(userNames[1]);
console.log(userNames.length);
console.log(userNames[userNames.length - 2]);
console.log(userNames[3].length);
console.log(userNames[3][0]);

//
// let nameUser = 'mariami';
// console.log(nameUser.length);

// object
let userInfo = {
  userName: "anna",
  userAge: 25,
  userStatus: "active",
  userPhone: {
    code: 593,
    tel: 554454,
  },
  userHobbies: ["dance", "music"],
  userComments: [
    {
      id: 1,
      text: "Hello 1",
    },
    {
      id: 2,
      text: "Hello 2",
    },
  ],
};

console.log(userInfo.length); //undefined

// 1. dot notation
console.log(userInfo.userComments[0].text);

// 2.bracket notation
console.log(userInfo["userComments"][0]["text"]);

//
let userNew = {
  fname: "nini",
  age: 18,
};

userNew.age = 19;
userNew.gender = "female";
delete userNew.fname;
console.log(userNew);

// loop - array
let arrayNew = ["banana", "orange", "mango", "avocado"];

//for loop
for (let item = 1; item <= 2; item++) {
  console.log(arrayNew[item]);
}

// item++ =>  item = item + 1

//while loop
let index = 0;
while (index < arrayNew.length) {
  console.log(arrayNew[index]);
  index++;
}

//for of
let namesNewArray = ["html", "css", "javascript"];

for (let item of namesNewArray) {
  console.log(item);
}

//for in
for (let key in namesNewArray) {
  console.log(key);
}

//
let numbersArray = [25, 18, 36, 19, 7];

for (let item of numbersArray) {
  if (item === 36) {
    continue;
  }
  console.log(item);
}

//
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i); //0 1 2 4 5
}

//
let numbers = [14, 36, 28, 17, 39];

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if (element > 30){
//         console.log(element);

//     }

// }

for (let item of numbers) {
  if (item % 2 === 1) {
    console.log(item);
  }
}

//
let array = ["hello", 25, "morning", 36];

for (let item of array) {
  if (typeof item === "string") {
    console.log(item);
  }
}

//
let nestedArray = [
  [25, 14, -25],
  [-7, 6],
  [-12, -14],
  [-52, 36],
];

// for (let index = 0; index < nestedArray.length; index++) {
//   const element = nestedArray[index];
//   // console.log(element); // [25, 14, 25]  [-7, 6] ....
//   for (let item = 0; item < element.length; item++) {
//     const nestedElement = element[item];
//     // console.log(nestedElement);
//     if (nestedElement > 0) {
//       console.log(nestedElement);
//     }
//   }
// }

for (let item of nestedArray) {
  for (let el of item) {
    if (el > 0) {
      console.log(el);
    }
  }
}
