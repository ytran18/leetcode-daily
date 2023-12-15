/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const str = x.toString().split('').reverse().join('');
    const result = x < 0 ? -parseInt(str) : parseInt(str);
    
    if (result > Math.pow(2,31) || result < -Math.pow(2,31) - 1) return 0;
    return result;
};

const x = 1534236469;

const result = reverse(x);

console.log(result);