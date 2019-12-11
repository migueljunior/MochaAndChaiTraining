/**
 * Returns 'Fizz' if the number is multiply of 3, returns 'Buzz' if the number is multiply of 5, returns 'FizzBuzz' if the number is multiply of 3 and 5, returns the same number if not multiply of 3 and 5
 * @example
 * fizzBuzz(3); // returns true
 * fizzBuzz(25); // return false
 * @param {number} number Number to verify
 * @returns {string} String
 */
function fizzBuzz(number) {
  if (multiplyOfThree(number) && multiplyOfFive(number)) {
    return 'FizzBuzz';
  } else if (multiplyOfThree(number)) {
    return 'Fizz';
  } else if (multiplyOfFive(number)) {
    return 'Buzz';
  } else {
    return number;
  }
};

/**
 * Returns true when the number is divisible by 3 or false when the number is not divisible by 3
 * @example
 * multiplyOfThree(3); // returns true
 * multiplyOfThree(25); // return false
 * @param {number} number Number to verify
 * @returns {boolean} Boolean
 */
function multiplyOfThree(number) {
  return number % 3 === 0;
};

/**
 * Returns true when the number is divisible by 5 or false when the number is not divisible by 5
 * @example
 * multiplyOfFive(25); // returns true
 * multiplyOfFive(2); // return false
 * @param {number} number Number to verify
 * @returns {boolean} Boolean
 */
function multiplyOfFive(number) {
  return number % 5 === 0;
};

exports.FizzBuzzMethod = fizzBuzz;
