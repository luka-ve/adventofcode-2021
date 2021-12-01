const data = require("./input").data;

const window_size = 3;
const arr_length = data.length - Math.ceil(window_size / 2);

let sum_array = Array.apply(null, Array(arr_length)).map(() => {});
let n_increases = 0;

for (let i = 0; i < arr_length; i++) {
  const current_sum = data.slice(i, i + 3).reduce((a, b) => a + b, 0);
  sum_array[i] = current_sum;

  i > 0 && sum_array[i] > sum_array[i - 1] ? n_increases++ : {};
}

console.log(n_increases);
