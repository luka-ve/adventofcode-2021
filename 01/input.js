const fs = require("fs");
const internal = require("stream");

const data = fs
  .readFileSync("./input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((a) => +a);

module.exports = {
  data,
};
