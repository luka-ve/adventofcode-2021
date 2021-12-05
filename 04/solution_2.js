const path = require("path");
const data = require(path.join(__dirname, "input.js"));

const numberSequence = data.numberSequence;

const boardFactory = (numbers) => {
  const _numbers = numbers;
  const size = _numbers[0].length;
  let pickedElements = Array(size)
    .fill(false)
    .map(() => Array(size).fill(false));

  const pickNumber = (number) => {
    let done = false;

    for (let i = 0; i < _numbers.length; i++) {
      for (let j = 0; j < _numbers[0].length; j++) {
        const currentNumber = _numbers[i][j];

        if (currentNumber == number) {
          pickedElements[i][j] = true;
          done = true;
          break;
        }
      }

      if (done) {
        break;
      }
    }
  };

  const isWinner = () => {
    let winner = false;
    let diagSum = 0;

    for (let i = 0; i < pickedElements.length; i++) {
      // Check rows
      if (pickedElements[i].every((x) => x == true)) {
        winner = true;
      }

      let columnSum = 0;
      // check columns
      for (let j = 0; j < pickedElements[0].length; j++) {
        columnSum += +pickedElements[j][i];

        if (i == j && pickedElements[i][j]) {
          diagSum++;
        }
      }

      if (
        columnSum == pickedElements[0].length ||
        diagSum == pickedElements[0].length
      ) {
        winner = true;
      }
    }

    return winner;
  };
  const getSumUnmarkedNumbers = () => {
    const peFlat = pickedElements.flat();
    const numsFlat = _numbers.flat();

    let sum = 0;

    for (let i = 0; i < pickedElements.length; i++) {
      for (let j = 0; j < pickedElements[i].length; j++) {
        if (!pickedElements[i][j]) {
          sum += _numbers[i][j];
        }
      }
    }
    /*
    const sum = numsFlat.reduce((a, b, i) => {
      a += b * peFlat[i];
    }, 0);*/

    return sum;
  };

  return {
    _numbers,
    pickedElements,
    pickNumber,
    isWinner,
    getSumUnmarkedNumbers,
  };
};

// boards is an array of objects with each object containing an array to hold the board values and an array to hold which indices have been picked so far
const boards = data.boards.map((x) => boardFactory(x));
let result = 0;
let winners = [];

for (let i = 0; i < numberSequence.length; i++) {
  const number = numberSequence[i];

  for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
    boards[boardIndex].pickNumber(number);

    if (boards[boardIndex].isWinner() && !winners.includes(boardIndex)) {
      winners.push(boardIndex);

      if (winners.length == boards.length) {
        const sumUnmarkedNumbers = boards[boardIndex].getSumUnmarkedNumbers();
        result = sumUnmarkedNumbers * number;
        console.log(result);
        return;
      }
    }
  }
}
