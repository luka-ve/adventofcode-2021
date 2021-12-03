const path = require("path");
const data = require(path.join(__dirname, "input.js")).data;

const nRows = data.length;
const nColumns = data[0].length;
const halfRows = nRows / 2;

let gamma = "";
let epsilon = "";

for (let i = 0; i < nColumns; i++) {
  let columnsSum = 0;

  for (let j = 0; j < nRows; j++) {
    columnsSum += +data[j][i];
  }

  // Determine most common bit by checking if summing the bits of a column is >= half the number of rows
  const mostCommonBit = columnsSum >= halfRows ? 1 : 0;

  gamma += mostCommonBit;
  epsilon += 1 - mostCommonBit;
}

const base = 2;
const gammaDec = parseInt(gamma, base);
const epsilonDec = parseInt(epsilon, base);
const result = gammaDec * epsilonDec;

console.log(result);
