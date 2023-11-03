/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const length = digits.length;
    let count = 0;
    let endEven = [];
    let result = [];

    for (let i = 0; i < length; i ++) {
        if (digits[i] % 2 !== 0) count++;
        if (digits[i] % 2 === 0) {
            endEven.push({nums: digits[i], idx: i});
        }
    };
    
    if (count === length) return [];

    endEven.map((item, index) => {
        for (let i = 0; i < length - 1; i++) {
            if (i !== item.idx && digits[i] !== 0) {
                const nums = `${digits[i]}${digits[i+1]}${item.nums}`;
                console.log(nums);
                // result.push();
            };
        };
    });

    return endEven;
};

const data = [2,1,3,0];

findEvenNumbers(data);