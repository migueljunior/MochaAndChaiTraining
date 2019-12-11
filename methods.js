/**
 * Returns 'Fizz' if the number is multiply of 3, returns 'Buzz' if the number is multiply of 5,
 * returns 'FizzBuzz' if the number is multiply of 3 and 5,
 * returns the same number if not multiply of 3 and 5
 * @author Junior Rodriguez
 * @example
 * fizzBuzz(3); // returns Fizz
 * fizzBuzz(25); // return Buzz
 * fizBUzz(2); // return 2
 * @param {number} number Number to verify
 * @returns {(string\|number)}
 */
function fizzBuzz(number) {
  if (isNumber(number)) {
    if (multiplyOfThree(number) && multiplyOfFive(number)) {
      return 'FizzBuzz';
    } else if (multiplyOfThree(number)) {
      return 'Fizz';
    } else if (multiplyOfFive(number)) {
      return 'Buzz';
    } else {
      return number;
    }
  } else {
    return 'Only enter a Numbers';
  }
};

/**
 * Returns true when the number is divisible by 3 or false when the number is not divisible by 3
 * @author Junior Rodriguez
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
 * @author Junior Rodriguez
 * @example
 * multiplyOfFive(25); // returns true
 * multiplyOfFive(2); // return false
 * @param {number} number Number to verify
 * @returns {boolean} Boolean
 */
function multiplyOfFive(number) {
  return number % 5 === 0;
};

/**
 * Returns true when the value is a number
 * @author Junior Rodriguez
 * @example
 * isNumber(0); // returns true
 * isNumber(A); // return false
 * isNumber(f); // return false
 * @param {number} number Number to verify
 * @returns {boolean} Boolean
 */
function isNumber(number) {
  return typeof (number) === 'number';
};

/**
 * Returns a string with the list starting with a minimun number and maximun number,
 * returns 'Fizz' if the number is multiply of 3, returns 'Buzz' if the number is multiply of 5,
 * returns 'FizzBuzz' if the number is multiply of 3 and 5,
 * returns the same number if not multiply of 3 and 5
 * @author Junior Rodriguez
 * @example
 * fizzBuzzMinMax(2,3); // returns 2,Fizz
 * fizzBuzzMinMax(1,5); // return 1,2,Fizz,4,Buzz
 * fizzBuzzMinMax(2,3); // return 2,Fizz
 * @param {number|number} number Number to verify
 * @returns {string} String
 */
function fizzBuzzMinMax(min, max) {
  let result = '';
  for (var i = min; i <= max; i++) {
    result += fizzBuzz(i);
    if (i != max) {
      result += ',';
    }
  }

  return result;
};

exports.FizzBuzzMethod = fizzBuzz;
exports.FizzBuzzString = fizzBuzzMinMax;
