// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
  let mil = 0;
  if (h >= 0 && h <= 23) {
    mil += (h * 3600000);
  }
  if (m >= 0 && m <= 59) {
    mil += (m * 60000);
  }
  if (s >= 0 && s <= 59) {
    mil += (s * 1000);
  }
  return mil;
}
