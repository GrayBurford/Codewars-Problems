// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  if (array.length == 0) {
    return 0;
  }
  let sum = 0;
  for (let val of array) {
    sum += val
  }
  return sum/array.length
}
