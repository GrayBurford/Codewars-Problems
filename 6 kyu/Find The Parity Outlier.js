// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers){
  let evens = 0;
  let odds = 0;
  
  // Take sample of input (min len 3) to determine if array is all but 1 odd or all but 1 even
  for (let i = 0; i < 3; i++) {
    integers[i] % 2 === 0 ? evens++ : odds++;
  }
  
  return evens > odds
    ? integers.filter(num => num % 2 !== 0)[0]
    : integers.filter(num => num % 2 === 0)[0];
}
