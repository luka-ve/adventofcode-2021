const fs = require("fs");
const path = require("path");

const data = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
  .toString()
  .trim()
  .split("\n\n");

const numberSequence = data[0].split(",").map((number) => +number);
const boards = data.slice(1).map((board) =>
  board.split("\n").map((row) =>
    row
      .trim()
      .split(/\s+/)
      .map((number) => +number)
  )
);

module.exports = {
  numberSequence,
  boards,
};
