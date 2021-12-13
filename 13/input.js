const fs = require("fs");
const path = require("path");

const rawInput = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
  .toString()
  .trim()
  .split("\n\n");

const positions = rawInput[0]
  .split("\n")
  .map((line) => line.split(",").map((x) => +x));

const folds = Array.from(rawInput[1].matchAll(/([xy])=(\d+)/gm), (match) => {
  return { axis: match[1], position: +match[2] };
});

module.exports = {
  positions,
  folds,
};
