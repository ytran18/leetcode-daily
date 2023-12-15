/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const length = paths.length;
    const leftObj = {};
    const obj = {};

    for (let i = 0; i < length; i++) {
        leftObj[paths[i][0]] = (leftObj[paths[i][0]] || 0) + 1;
        obj[paths[i][1]] = (obj[paths[i][1]] || 0) + 1;

        if (Object.keys(leftObj).includes(paths[i][1])) {
            delete obj[paths[i][1]];
        };

        if (Object.keys(leftObj).includes(paths[i][0])) {
            delete obj[paths[i][0]];
        };
        
    };

    return Object.keys(obj)[0];
};

const paths = [["B","C"],["D","B"],["C","A"]];

const result = destCity(paths);

console.log(result);