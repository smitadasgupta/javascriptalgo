// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let subarr = [];
    let mainarr = [];
    for (let i = 0; i < array.length; i++) {
        subarr.push(array[i]);
        if (subarr.length === size) {
            mainarr.push(subarr);
            subarr = [];
        }
        else if ((subarr.length < size) && (subarr[subarr.length - 1] == array[array.length - 1])) {

            mainarr.push(subarr)
        }
    }
    return mainarr;
}


module.exports = chunk;
