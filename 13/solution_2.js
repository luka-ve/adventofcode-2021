const path = require("path");
const positions = require(path.join(__dirname, "input.js")).positions;
const folds = require(path.join(__dirname, "input.js")).folds;

let paper = [];

// Initialize
positions.forEach(([x, y]) => {
  if (!paper[y]) {
    paper[y] = [];
  }

  paper[y][x] = true;
});

let dotSums = [];

for (let i = 0; i < folds.length; i++) {
  const axis = folds[i].axis;
  const position = folds[i].position;

  if (axis === "y") {
    for (let j = position + 1; j < paper.length; j++) {
      if (!paper[j]) continue;

      for (let k = 0; k < paper[j].length; k++) {
        if (!paper[j][k]) continue;

        const relativeXPosition = j - position;

        if (!paper[position - relativeXPosition])
          paper[position - relativeXPosition] = [];

        paper[position - relativeXPosition][k] = true;
      }
    }

    paper = paper.slice(0, position + 1);
  } else if (axis === "x") {
    for (let column = 0; column < paper.length; column++) {
      if (!paper[column]) continue;

      for (let row = position + 1; row < paper[column].length; row++) {
        if (!paper[column][row]) continue;

        const relativeYPosition = row - position;

        paper[column][position - relativeYPosition] = true;
      }

      paper[column] = paper[column].slice(0, position + 1);
    }
  }

  // Calculate current dot sum
  let sum = paper.flat(2).length;
  dotSums.push(sum);
}

console.table(paper);
