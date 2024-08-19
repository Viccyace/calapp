function clickMe() {
  let firstValue = document.getElementById("first-value").value;
  let secondValue = document.getElementById("second-value").value;

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  firstValue = parseInt(firstValue);
  secondValue = parseInt(secondValue);

  if (!isNaN(firstValue) && !isNaN(secondValue) && firstValue <= secondValue) {
    for (let i = firstValue; i <= secondValue; i++) {
      for (let j = 1; j <= 12; j++) {
        resultDiv.innerHTML += `${i} * ${j} = ${i * j} <br />`;
      }
    }
  } else {
    resultDiv.innerHTML = "Please enter valid numbers.";
  }
}

// let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// ages = ages.sort();
// console.log(ages);

// let maxValue = Math.max(ages);
// console.log(maxValue);

// let minValue = Math.min(sort);

// agesRange = Number(maxValue) - Number(minValue);

// console.log(agesRange);

// for (let index = 0; index <= 12; index++) {
//   console.log(`${20} * ${index} = ${20 * index}`);
// }

// const countries = [
//   "finland",
//   "sweden",
//   "denmark",
//   "norway",
//   "iceland",
//   "greenland",
// ];

// const newArr = [];
// for (let i = countries.length - 1; i >= 0; i--) {
//   newArr.push(countries[i].toUpperCase());
// }

// console.log(newArr);
