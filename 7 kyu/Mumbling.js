// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let arr = s.toLowerCase().split('').map((char, i) => char.repeat(i+1))
  let arr2 = arr.map(c => c[0].toUpperCase() + c.slice(1));
  return arr2.join('-');
}
