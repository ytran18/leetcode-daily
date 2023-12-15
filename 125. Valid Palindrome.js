/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const oldStr = s.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
    const newStr = s.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase().split('').reverse().join('');

    return newStr === oldStr;
};

const s = "0P";

const result = isPalindrome(s);

console.log(result);