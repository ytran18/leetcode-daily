var checkPerfectNumber = function(num) {
    if (num % 2 !== 0) return false;

    let copy = num;

    const arr = [];
    let count = 2;
    let value = copy;
    while ( value >= 1 ) {
        value = copy / count;
        if (copy % count === 0) {
            arr.push(value);
        }
        count++;
    };

    if (arr.reduce((a,b) => a +b) === num) return true;
    return false;
};

const num = 28;

const result = checkPerfectNumber(num);

console.log(result);