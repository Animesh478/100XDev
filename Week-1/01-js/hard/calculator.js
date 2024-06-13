/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

const math = require("mathjs");

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(input) {
    this.result = this.result + input;
    return this;
  }
  subtract(input) {
    this.result = this.result - input;
    return this;
  }
  multiply(input) {
    this.result *= input;
    this.result.toFixed(2);
    return this;
  }
  divide(input) {
    if (input !== 0) {
      this.result /= input;
      this.result.toFixed(2);
      return this;
    } else {
      throw new Error("Not valid");
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(str) {
    const exp = str.replace(/\s/g, "");
    const regex = /[a-zA-Z]/;
    if (regex.test(exp)) {
      throw new Error("Invalid expression");
    } else if (exp.includes("/0")) {
      throw new Error("Cannot divide by 0");
    } else {
      return Number(math.evaluate(exp).toFixed(2));
    }
  }
}

const x = new Calculator();
console.log(x.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7"));
console.log(x.calculate("   (2.5 + 1.5) * 3 "));
console.log(x.calculate("   10/3"));
// console.log(x.calculate("   10/0"));
// console.log(x.divide(2));
// console.log(x.multiply(-2));
// console.log(x.add(-2));
x.subtract(5);
x.subtract(3);
console.log(x.getResult());
console.log(x.calculate("2 + 3 * 4"));
console.log("hi there");

module.exports = Calculator;
