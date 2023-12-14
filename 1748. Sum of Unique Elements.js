var sumOfUnique = function(nums) {
    const length = nums.length;
    const obj = {};
    let sum = 0

    for (let i = 0; i < length; i++) {
        const num = nums[i];
        obj[num] = (obj[num] || 0) + 1;
    };

    Object.keys(obj).map((item) => {
        if (obj[item] === 1) {
            sum += Number(item);
        }
    })

    return sum;
};

const nums = [1,2,3,2];

const result = sumOfUnique(nums);

console.log(result);