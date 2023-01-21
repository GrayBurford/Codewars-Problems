// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let result = '';
    for (char of s) {
        if (char !== "!") {
            result = result.concat(char);
        }
    }
  
    return result;
}

// function removeExclamationMarks(s) {
//     return s.split('!').join('');
// }
