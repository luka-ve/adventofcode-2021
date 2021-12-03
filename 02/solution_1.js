const data = require("./input").data;

let horizontal = 0;
let depth = 0;

const commandMap = {
  forward: (x) => (horizontal += x),
  down: (x) => (depth += x),
  up: (x) => (depth -= x),
};

data.forEach(([command, value]) => commandMap[command](value));

console.log(horizontal * depth);
