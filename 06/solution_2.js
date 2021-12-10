const path = require("path");
const data = require(path.join(__dirname, "input.js")).data;

const sum = (arr) => arr.reduce((a, b) => a + b);

const maxFishLife = 8;
const lifeCycleLength = 7;
const nDaysSimulation = 256;

let fishNumbers = data.reduce((arr, item) => {
  arr[item] ? arr[item]++ : (arr[item] = 1);

  return arr;
}, new Array(maxFishLife + 1).fill(0));

let numbersOverTime = new Array(nDaysSimulation + 1).fill([]);
numbersOverTime[0] = [...fishNumbers];
let sums = [sum(fishNumbers)];

for (let day = 0; day < nDaysSimulation; day++) {
  const _fishNumbersTmp = [...fishNumbers];

  for (let i = 0; i < fishNumbers.length - 1; i++) {
    fishNumbers[i] = _fishNumbersTmp[i + 1];
  }
  fishNumbers[maxFishLife] = _fishNumbersTmp[0];
  fishNumbers[lifeCycleLength - 1] += _fishNumbersTmp[0];

  sums.push(sum(fishNumbers));
  numbersOverTime[day + 1] = [...fishNumbers];
}

const result = fishNumbers.reduce((a, b) => a + b);

console.log(result);
