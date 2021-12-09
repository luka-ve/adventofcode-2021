const fs = require("fs");
const path = require("path");

const matches = fs
  .readFileSync(path.join(__dirname, "test_input.txt"), "utf-8")
  .toString()
  .trim()
  .matchAll(/(?<x1>\d+),(?<y1>\d+)( -> )(?<x2>\d+),(?<y2>\d+)/gm);

const data = Array.from(matches).map((match) => {
  return {
    x1: match.groups.x1,
    y1: match.groups.y1,
    x2: match.groups.x2,
    y2: match.groups.y2,
  };
});

module.exports = {
  data,
};
