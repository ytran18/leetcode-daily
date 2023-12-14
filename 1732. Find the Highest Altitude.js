var largestAltitude = function(gain) {
    const arr = [0];
    let max = 0;

    for (let i = 0; i < gain.length; i++) {
        const value = arr[i] + gain[i];
        max = Math.max(value, max);
        arr.push(value);
    };

    return max;
};

const gain = [-5,1,5,0,-7];

const result = largestAltitude(gain);

console.log(result);