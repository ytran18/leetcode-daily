/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    if (!sequence.includes(word)) return 0;
    let count = 1;
    let str = word;
    while (sequence.includes(str)) {
        str = str + word;
        if (sequence.includes(str)) {
            count++;
        };
    };
    return count;
};