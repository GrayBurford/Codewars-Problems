// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  let strReversed = [];
  for (let letter of str) {
    strReversed.unshift(letter)
  }
  return strReversed.join('');
}
