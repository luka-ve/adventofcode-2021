const path = require("path");
const data = require(path.join(__dirname, "input.js")).data;

const nRows = data.length;
const nColumns = data[0].length;
const halfRows = nRows / 2;

let oxygenGeneratorRating = 0;
let co2ScrubberRating = 0;

let subset = data;

for (let i = 0; i < nColumns; i++) {
  let columnsSum = 0;

  let bitIndices = {
    0: [],
    1: [],
  };

  for (let j = 0; j < subset.length; j++) {
    const val = +subset[j][i];
    columnsSum += val;

    bitIndices[val].push(subset[j]);
  }

  // Determine most common bit by checking if summing the bits of a column is >= half the number of rows
  const mostCommonBit = columnsSum >= subset.length / 2 ? 1 : 0;

  subset = bitIndices[mostCommonBit];

  if (subset.length == 1) {
    console.log(i);
    oxygenGeneratorRating = subset[0];
    break;
  }
}

subset = data;

for (let i = 0; i < nColumns; i++) {
  let columnsSum = 0;

  let bitIndices = {
    0: [],
    1: [],
  };

  for (let j = 0; j < subset.length; j++) {
    const val = +subset[j][i];
    columnsSum += val;

    bitIndices[val].push(subset[j]);
  }

  // Determine most common bit by checking if summing the bits of a column is >= half the number of rows
  const leastCommonBit = columnsSum >= subset.length / 2 ? 0 : 1;
  //console.log(mostCommonBit);

  subset = bitIndices[leastCommonBit];

  if (subset.length == 1) {
    console.log(i);
    co2ScrubberRating = subset[0];
    break;
  }
}

console.log(oxygenGeneratorRating);
console.log(co2ScrubberRating);

const lifeSupportRating =
  parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);

console.log(lifeSupportRating);
