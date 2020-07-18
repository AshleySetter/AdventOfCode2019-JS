module.exports = (function() {
  const fs = require("fs");

  function part1(inputPath) {
    const input = fs.readFileSync(inputPath).toString();
    console.log("input: ", input);
  }

  return part1;
}());
