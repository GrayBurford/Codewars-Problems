// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("


function duplicateEncode(word){
    let lowerWord = word.toLowerCase();
    let freqMap = new Map();
    let result = "";
  
    for (let char of lowerWord) {
      if (freqMap.has(char)) {
        freqMap.set(char, (freqMap.get(char) + 1) )
      } else {
        freqMap.set(char, 1);
      }
    }
  
  for (let char of lowerWord) {
    freqMap.get(char) > 1
      ? result = result + ")"
      : result = result + "("
  }
  
  return result;
}
// declare frequency map data structure
// declare new string variable
// loop over input string and record frequency of each char in freqmap
// loop over input string again, checking each char frequency against freqmap
// concat result string chars basedo on frequency
