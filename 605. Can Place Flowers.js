var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0) return true;
    const copy = flowerbed;
    let count = 0;

    for (let i = 0; i < copy.length; i++) {
        if (count === n) break;
        if (i === 0 && copy[i + 1] === 0 && copy[i] === 0) {
            copy[i] = 1;
            count++;
        } else if (i === copy.length - 1 && copy[i - 1] === 0 && copy[i] === 0) {
            copy[i] = 1;
            count++;
        } else if (copy[i] !== 1 && copy[i - 1] === 0 && copy[i + 1] === 0) {
            copy[i] = 1;
            count++;
        };
    };

    return count === n;
};

const flowerbed = [0,0,1,0,0];
const n = 1;

const result = canPlaceFlowers(flowerbed, n);

console.log(result);