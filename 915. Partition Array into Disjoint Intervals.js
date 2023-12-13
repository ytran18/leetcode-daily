var partitionDisjoint = function(nums) {
    let curr = nums[0];
    let max = 0;
    let index = 0;

    for (let i = 1; i < nums.length; i++) {
        const number = nums[i];
        max = Math.max(number, max);
        if (curr <= number) continue;

        index = i;
        curr = Math.max(curr, max);
    };

    return index + 1;
};

const nums = [32,57,24,19,0,24,49,67,87,87];

const result = partitionDisjoint(nums);

console.log(result);