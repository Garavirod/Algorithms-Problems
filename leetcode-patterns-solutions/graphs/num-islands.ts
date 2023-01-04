/* 200. Number of Islands */

function numIslands(grid: string[][]): number {
    if (grid.length === 0 && grid[0].length === 0) return 0;

    const m = grid.length, n = grid[0].length;
    let visited = new Set();
    let island = 0;

    const dfs = (m: number, n: number, i: number, j: number) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != '1') return;
        grid[i][j] = 'X'; // Marked as visited
        dfs(m, n, i + 1, j);
        dfs(m, n, i - 1, j);
        dfs(m, n, i, j + 1);
        dfs(m, n, i, j - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                island++;
                dfs(m, n, i, j);
            }
        }
    }

    return island;
};