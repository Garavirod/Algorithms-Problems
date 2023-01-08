function createMatrix(m:number, n:number): number[][]{
    return Array.from({length:m}, ()=> Array.from({length:n}, () => 0));
}

function lcs(w1:string, w2:string):number{
    const m = w1.length + 1, n = w2.length + 1;
    let matrix = createMatrix(m, n);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if(w2[i-1] === w1[j-1]){
                matrix[i][j] = Math.max();
            }
        }
    }

    return matrix[m-1][n-1];

}