/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const result = x.toString().split('').reverse().join('');

    return x === parseInt(result);
};

const x = 10;

const result = isPalindrome(x);

console.log(result);