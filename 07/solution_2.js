// Brute force solution
const path = require("path");
const crabPositions = require(path.join(__dirname, "input.js")).data;

// Bound the search space to between the smallest and largest crab positions.
const lowerBound = Math.min.apply(Math, crabPositions);
const upperBound = Math.max.apply(Math, crabPositions);

// Calculates the fuel expenditure of a crab submarine moving from a to b.
// It uses the formula for partial sums.
const getCrabFuelExpenditure = (a, b) => {
  const n = Math.abs(b - a);

  // N-th partial sum
  return (n * (n + 1)) / 2;
};

// Keep track of fuel expenditure for all valid
let totalFuelExpenditures = [];
for (let position = lowerBound; position <= upperBound; position++) {
  const totalFuelExpenditureToPosition = crabPositions
    .map((crab) => getCrabFuelExpenditure(crab, position))
    .reduce((a, b) => a + b);

  totalFuelExpenditures.push(totalFuelExpenditureToPosition);
}

const optimalFuelValue = Math.min.apply(Math, totalFuelExpenditures);
const optimalPosition = totalFuelExpenditures.findIndex(
  (x) => x === optimalFuelValue
);

console.log(
  `Crabs converge to position ${optimalPosition} and consume a total of ${optimalFuelValue} fuel.`
);
