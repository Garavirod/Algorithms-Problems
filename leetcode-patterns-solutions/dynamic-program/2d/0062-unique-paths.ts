const createMatrix = (m: number, n: number): number[][] =>
    Array.from({ length: m }, () => Array.from({ length: n }, () => 0));


function uniquePaths(m: number, n: number): number {
    const matrix = createMatrix(m, n);
    // set as 1 row's edges
    for (let i = 0; i < m; i++) { matrix[i][n - 1] = 1; }
    // set as 1 col's edges
    for (let j = 0; j < n; j++) { matrix[m - 1][j] = 1; }

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            matrix[i][j] = matrix[i + 1][j] + matrix[i][j + 1];
        }
    }

    console.log(matrix);
    return matrix[0][0];
};