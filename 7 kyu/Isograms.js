An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

function isIsogram(str){
  let data = {};
  
  for (let letter of str.toLowerCase()) {
    if (data[letter]) {
      data[letter]++;
    } else {
      data[letter] = 1;
    }
  }
  
  return Object.values(data).every(n => n === 1)
}
// try using new Set (str.toLowerCase()).length etc
