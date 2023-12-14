var check = function(nums) {
    const copy = nums.slice();
    const length = copy.length;
    let count = 0;
    let x;
    copy.sort(function(a, b){return a-b});

    for (let i = 0; i < length; i++) {
        const index = (0+i) % length;
        if (nums[index] === copy[0]) {
            let countIndex =0;
            for (let j = 0; j < length; j++) {
                const idx = (j + index) % length;
                if (nums[idx] === copy[j]) {
                    countIndex++;
                }
            };
            if (countIndex === length) {
                x = index;
                break;
            }
        };
    };

    for (let i = 0; i < length; i++) {
        const index = (i + x) % length;
        if (nums[index] === copy[i]) {
            count++;
        };
    };

    return count === length;
};

const nums = [9,10,1,2,3,3,4,4,7,8];

const result = check(nums);

console.log(result);