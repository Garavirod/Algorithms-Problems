function createMatrix(m:number, n:number): number[][]{
    return Array.from({length:m}, ()=> Array.from({length:n}, () => 0));
}

function longestCommonSubsequence(text1: string, text2: string):number{
    const m = text1.length + 1, n = text2.length + 1;
    let matrix = createMatrix(m, n);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if(text1[i-1] === text2[j-1]){
                matrix[i][j] = 1 + matrix[i-1][j-1];
            }else{
                const topCell = matrix[i-1][j], rigghtCell = matrix[i][j-1];
                matrix[i][j] = Math.max(topCell,rigghtCell);
            }
        }
    }
    return matrix[m-1][n-1];
}