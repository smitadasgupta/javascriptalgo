// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let str1 = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    let str2 = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

    if (str1 === str2) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = anagrams;
