const path = require("path");
const data = require(path.join(__dirname, "input.js")).data;

let riskLevels = [];
let riskPositions = [];

for (let y = 0; y < data.length; y++) {
  for (let x = 0; x < data[0].length; x++) {
    const surroundingDigits = [
      y - 1 < 0 ? 9 : data[y - 1][x],
      y + 1 >= data.length ? 9 : data[y + 1][x],
      x - 1 < 0 ? 9 : data[y][x - 1],
      x + 1 >= data[0].length ? 9 : data[y][x + 1],
    ];

    if (surroundingDigits.every((element) => element > data[y][x])) {
      riskPositions.push([y, x]);
      riskLevels.push(1 + data[y][x]);
    }
  }
}

console.log(riskLevels.reduce((a, b) => a + b));
