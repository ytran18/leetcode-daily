var maxAscendingSum = function(nums) {
    let maxSum = 0;
    let temp = 0;
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        if (nums[i] > (nums[i - 1] || 0 )) {
            temp += nums[i];
        } else {
            maxSum = Math.max(maxSum, temp);
            temp = nums[i];
        };
    };

    return Math.max(maxSum, temp);
};

const nums = [10,20,30,5,10,50];

const result = maxAscendingSum(nums);

console.log(result);