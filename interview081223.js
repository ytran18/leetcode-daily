var twoSum = function(nums, target) {
    const indices = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                indices.push(i);
                indices.push(j);
                break;
            }
        }
    };

    return indices;
};

const nums = [0,4,3,0];
const target = 0;

const result = twoSum(nums, target);

console.log(result);