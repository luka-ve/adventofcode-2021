const path = require("path");
const crabPositions = require(path.join(__dirname, "input.js")).data;

// Calculate median
crabPositions.sort((a, b) => (a < b ? -1 : 1));

const median = (arr) =>
  arr.length % 2 === 0
    ? (arr[arr.length / 2 - 1] + arr[arr.length / 2 - 2]) / 2
    : arr[Math.floor(arr.length / 2)];

const distances = (arr, value) => arr.map((arr) => Math.abs(arr - value));

const med = Math.round(median(crabPositions));
const result = distances(crabPositions, med).reduce((a, b) => a + b);

console.log(
  `The crabs converge at position ${med} and in sum use ${result} fuel.`
);
