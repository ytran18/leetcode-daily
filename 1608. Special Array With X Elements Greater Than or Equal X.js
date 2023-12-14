/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    const copy = nums.slice();
    copy.sort(function(a,b){return a-b});
    const largestNumber = copy[copy.length - 1];
    let x = -1;

    for (let i = largestNumber; i >= 0; i--) {
        let number = i;
        let count = 0;

        for (let j = copy.length - 1; j >= 0; j--) {
            if (copy[j] >= number) {
                count++;
            }

        };

        if (count === number) {
            return count;
        }
    }

    return x;
};

const nums = [3,6,7,7,0];

const result = specialArray(nums);

console.log(result);