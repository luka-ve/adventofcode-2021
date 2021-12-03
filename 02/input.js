const fs = require("fs");

const data = fs
  .readFileSync("./input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "))
  .map((s) => [s[0], +s[1]]);

module.exports = {
  data,
};
