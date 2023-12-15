/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = nums.indexOf(target);

    if (result !== -1) return result;

    if (result === -1) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > target) {
                result = i;
                break;
            }
        };
    };

    return result === -1 ? nums.length :  result;
};

const nums = [1,3,5,6];
const target = 7;

const result = searchInsert(nums,target);

console.log(result);