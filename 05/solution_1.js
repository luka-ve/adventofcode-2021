const path = require("path");

const data = require(path.join(__dirname, "input.js")).data;

let ventMap = [];

data.forEach((el) => applyVents(el.x1, el.y1, el.x2, el.y2));

console.log(ventMap.flat(2).filter((x) => x > 1).length);

function applyVents(x1, y1, x2, y2) {
  // Ignore non-horizontal and non-vertical lines
  const isStraight = x1 == x2 || y1 == y2;

  if (!isStraight) {
    return;
  }

  const xStart = Math.min(x1, x2);
  const xEnd = Math.max(x1, x2);
  const yStart = Math.min(y1, y2);
  const yEnd = Math.max(y1, y2);

  for (let x = xStart; x <= xEnd; x++) {
    for (let y = yStart; y <= yEnd; y++) {
      if (!ventMap[x]) {
        ventMap[x] = [];
      }

      !ventMap[x][y] ? (ventMap[x][y] = 1) : ventMap[x][y]++;
    }
  }
}
