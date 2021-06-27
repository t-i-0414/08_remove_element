import removeElement from ".";
const chalk = require('chalk')

console.log('Case: Input: nums = [3,2,2,3], val = 3')
if (removeElement([3, 2, 2, 3], 3) === 2) {
  console.log(chalk.green('Test passed!'))
} else {
  console.log(chalk.red('Test failed!'))
}

console.log('Case: Input: nums = [0,1,2,2,3,0,4,2], val = 2')
if (removeElement([0,1,2,2,3,0,4,2], 2) === 5) {
  console.log(chalk.green('Test passed!'))
} else {
  console.log(chalk.red('Test failed!'))
}
