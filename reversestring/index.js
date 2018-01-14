// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* function reverse(str) {
    arr = str.split('');
    return arr.reverse().join('');
} */

/* function reverse(str) {
   let reversed = '';

   for(let char of str) {
       reversed = char + reversed;
   }

   return reversed;
}
 */

function reverse(str) {
    const arr = str.split('');
    let res = arr.reduce((res, arr) => arr + res);
    return res;
} 



module.exports = reverse;
