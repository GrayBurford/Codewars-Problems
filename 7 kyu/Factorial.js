// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

function factorial(n) {
  if (n < 0 || n > 12) throw ValueError;
  const data = [
    1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600
  ]
  return data[n];
}

// OR

function factorial(n) {
  if (n < 0 || n > 12) {
    throw ValueError;
  }
  if (n === 0) return 1;
  
  let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  
  return total;
}
