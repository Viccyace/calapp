const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let pointsCounts = 0;
let loggedcounts = 0;

for (let key in users) {
  if (users[key].points === 50) {
    pointsCounts++;

    console.log(`${key} has ${users[key].points} points.`);
  }

  if (users[key].isLoggedIn === true) {
    loggedcounts++;
    console.log(`${key} is logged in`);
  }
}

console.log(`${pointsCounts} users have 50 points.`);
console.log(`${loggedcounts++} users are logged in.`);

// function clickMe() {
//   let firstValue = document.getElementById("first-value").value;
//   let secondValue = document.getElementById("second-value").value;

//   let resultDiv = document.getElementById("result");
//   resultDiv.innerHTML = "";

//   firstValue = parseInt(firstValue);
//   secondValue = parseInt(secondValue);

//   if (!isNaN(firstValue) && !isNaN(secondValue) && firstValue <= secondValue) {
//     for (let i = firstValue; i <= secondValue; i++) {
//       for (let j = 1; j <= 12; j++) {
//         // resultDiv.innerHTML = "";
//         resultDiv.innerHTML += `${i} * ${j} = ${i * j} <br />`;
//       }
//     }
//   } else {
//     resultDiv.innerHTML = "Please enter valid numbers.";
//   }
// }

// // let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// // ages = ages.sort();
// // console.log(ages);

// // let maxValue = Math.max(ages);
// // console.log(maxValue);

// // let minValue = Math.min(sort);

// // agesRange = Number(maxValue) - Number(minValue);

// // console.log(agesRange);

// // for (let index = 0; index <= 12; index++) {
// //   console.log(`${20} * ${index} = ${20 * index}`);
// // }

// // const countries = [
// //   "finland",
// //   "sweden",
// //   "denmark",
// //   "norway",
// //   "iceland",
// //   "greenland",
// // ];

// // const newArr = [];
// // for (let i = countries.length - 1; i >= 0; i--) {
// //   newArr.push(countries[i].toUpperCase());
// // }

// // console.log(newArr);

// function area() {

// }

// num of people that logged in
// and names of people that logged in

// create a carosel of colour
// clue
// use array of obj and conditionals
