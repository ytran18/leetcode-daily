/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.trim().split(' ');

    return arr[arr.length - 1].length;
};

const s = "   fly me   to   the moon  ";

const result = lengthOfLastWord(s);

console.log(result);