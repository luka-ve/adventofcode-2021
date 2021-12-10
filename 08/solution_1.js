const path = require("path");
const data = require(path.join(__dirname, "input.js")).data;

const uniqueLengths = [2, 3, 4, 7];

let result = 0;

data.forEach((line) =>
  line[1].forEach((x) => (result += uniqueLengths.includes(x.length)))
);

console.log(result);
