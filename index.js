const chalk = require("chalk");
const fs = require("fs");

console.log("Starting Script");

const args = process.argv.slice(2); // removes first 2 args (node path and file path)

args.forEach((day) => {
  console.log(`Running Day ${day} - part 1`);
  const path = `./day${(parseInt(day))}/part1.js`;
  if (!fs.existsSync(path)) {
    console.log(chalk.red(`day ${day} not found`));
  }
  const inputPath = `./inputs/day${(parseInt(day))}/input.txt`;
  if (!fs.existsSync(inputPath)) {
    console.log(chalk.red(`input for day ${day} not found`));
  } else {
    const part1 = require(path);
    part1(inputPath);
  }
});
