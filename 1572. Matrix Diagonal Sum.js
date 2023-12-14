var diagonalSum = function(mat) {
    const row = mat.length;
    let sum = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row; j++) {
            if (i === j) {
                sum += mat[i][j];
            }
            if (i + j === row - 1) {
                if (i === j) {
                    if (row % 2 === 0) sum += mat[i][j];
                } else {
                    sum += mat[i][j];
                }
            }
        }
    };

    return sum;
};

const mat = [[1,2,3],[4,5,6],[7,8,9]];

const result = diagonalSum(mat);

console.log(result);