const data = require("./input.js").data;

let horizontal = 0;
let aim = 0;
let depth = 0;

const commandMap = {
  forward: (x) => {
    horizontal += x;
    depth += aim * x;
  },
  down: (x) => (aim += x),
  up: (x) => (aim -= x),
};

data.forEach(([command, value]) => commandMap[command](value));

console.log(horizontal * depth);
