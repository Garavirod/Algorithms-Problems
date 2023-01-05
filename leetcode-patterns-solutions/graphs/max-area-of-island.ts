/* 695. Max Area of Island */
function maxAreaOfIsland(grid: number[][]): number {
    // Empty grid
    if (grid.length === 0 && grid[0].length === 0) return 0;

    const m = grid.length, n = grid[0].length;
    let maxArea = 0;
    let islandCounter = 0;

    const dfs = (m: number, n: number, i: number, j: number) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != 1) return;
        grid[i][j] = -1; // Marked as visited
        islandCounter++;
        dfs(m, n, i + 1, j);
        dfs(m, n, i - 1, j);
        dfs(m, n, i, j + 1);
        dfs(m, n, i, j - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                islandCounter = 0;
                dfs(m, n, i, j);
                maxArea = Math.max(islandCounter,maxArea);
            }
        }
    }

    return maxArea;
};