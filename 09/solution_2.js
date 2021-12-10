const path = require("path");
const data = require(path.join(__dirname, "input.js")).data;

const empty = 0;
const wall = 1;
const visited = 2;

/*
let poolEdges = [
  new Array(data[0].length + 2).fill(wall),
  [wall]
    .concat(
      data.map((line) => line.map((digit) => (digit === 9 ? wall : empty)))
    )
    .concat([wall]),
  new Array(data[0].length + 2).fill(wall),
];
*/

let poolEdges = data.map((line) =>
  line.map((digit) => (digit === 9 ? wall : empty))
);

function floodFill(map, y, x, newValue) {
  const current = map[y][x];

  if (current === newValue) return map;

  fill(map, y, x, newValue, current);

  return map;
}

function fill(map, y, x, newValue, current) {
  if (y < 0) return;

  if (x < 0) return;

  if (y > map.length - 1) return;

  if (x > map[0].length - 1) return;

  if (map[y][x] !== empty) return;

  map[y][x] = newValue;

  fill(map, y - 1, x, newValue, current);
  fill(map, y + 1, x, newValue, current);
  fill(map, y, x - 1, newValue, current);
  fill(map, y, x + 1, newValue, current);
}

let counter = 2;

for (let y = 0; y < poolEdges.length; y++) {
  for (let x = 0; x < poolEdges[0].length; x++) {
    if (poolEdges[y][x] === empty) {
      poolEdges = floodFill(poolEdges, y, x, counter);
      counter++;
    }
  }
}

const roomSizes = poolEdges.flat(2).reduce((obj, item) => {
  obj[item] ? obj[item]++ : (obj[item] = 1);
  return obj;
}, {});

console.log(counter);
console.table(poolEdges);
console.log(Object.values(roomSizes));

console.log(
  Object.values(roomSizes)
    .sort((a, b) => (a < b ? 1 : -1))
    .slice(1, 4)
    .reduce((a, b) => a * b)
);
