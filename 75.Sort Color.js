var sortColors = function(nums) {
    if(nums.length < 2) return nums;

    const index = nums.length - 1;
    const pivot = nums[index];
    const left = [];
    const right = [];

    for (let i = 0; i < index; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return [...sortColors(left), pivot,...sortColors(right)];
};

const nums = [2,0,1];

const result = sortColors(nums);

console.log(result);