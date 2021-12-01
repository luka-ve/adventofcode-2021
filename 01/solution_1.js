const data = require("./input").data;

let n_increases = 0;

for (let i = 1; i < data.length; i++) {
  n_increases += data[i] > data[i - 1];
}

console.log(n_increases);
