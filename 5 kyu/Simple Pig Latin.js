// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let suffix;
  
  const arr = str.split(" ").map(function (word) {
    if (abc.includes(word[0].toUpperCase())) {
        suffix = `${word.charAt(0)}ay`;
    } else {
        suffix = `${word.charAt(0)}`;
    }
    
    return word.slice(1) + suffix;
  });
  
  return arr.join(' ');
}
