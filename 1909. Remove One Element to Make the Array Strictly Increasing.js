/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    const copy = nums.slice();
    let count = 0;

    if (copy.length === 2) return true;

    for (let i = 0; i < nums.length; i++) {
        if ((copy[i] < copy[i - 1])) {
            if (copy[i] > (copy[i - 2] || 0)) {
                copy.splice(i - 1, 1);
                break;
            } else {
                copy.splice(i, 1);
                break;
            }
        };
    };

    for (let i = 0; i < copy.length; i++) {
        if ((copy[i - 1] || 0) < copy[i]) count++;
    };

    return count === copy.length;
};

// const nums = [1,2,10,5,7];
const nums = [100,21,100];
// const nums = [105,924,32,968];

const result = canBeIncreasing(nums);

console.log(result);