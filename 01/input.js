const fs = require("fs");
<<<<<<< HEAD
=======
const internal = require("stream");
>>>>>>> 2af0ff014bad5b523431bcba4aa40798ea0c918f

const data = fs
  .readFileSync("./input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((a) => +a);

module.exports = {
  data,
};
