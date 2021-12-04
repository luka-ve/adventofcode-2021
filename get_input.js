const https = require("https");
const fs = require("fs");
const path = require("path");

const day = process.argv[2];

fs.mkdir(day, () => {
  const file = fs.createWriteStream(path.join(day, "input.txt"));
  const request = https.get(
    `https://adventofcode.com/2021/day/${day}/input`,
    (response) => response.pipe(file)
  );
});
