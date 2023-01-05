/* 417. Pacific Atlantic Water Flow */

function pacificAtlantic(heights: number[][]): number[][] {
    const ROW = heights.length, COL = heights[0].length;

    let pacific: boolean[][] = Array.from({ length: heights.length }, () => Array.from({length:heights[0].length}, () => false));
    let atlantic: boolean[][] = Array.from({ length: heights.length }, () => Array.from({length:heights[0].length}, () => false));
    let pq: number[][] = [];
    let aq: number[][] = [];
    let res: number[][] = [];

    for (let i = 0; i < ROW; i++) {
        pacific[i][0] = true;
        atlantic[COL - 1][i] = true;
        aq.push([COL - 1, i]);
        pq.push([i, 0]);
    }

    for (let j = 0; j < COL; j++) {
        pacific[0][j] = true;
        atlantic[ROW - 1][j] = true;
        aq.push([ROW - 1, j]);
        pq.push([0, j]);
    }

    const bfs = (matrix: number[][], queue: number[][], visited: boolean[][]) => {
        let n = matrix.length, m = matrix[0].length;
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        while (queue.length > 0) {
            const u = queue.shift()!;
            for (let dir of directions) {
                const x = u[0] + dir[0], y = u[1] + dir[1];
                if (x < 0 ||
                    y < 0 ||
                    x >= n ||
                    y >= m ||
                    visited[x][y] ||
                    matrix[x][y] < matrix[u[0]][u[1]]
                ) continue;

                visited[x][y] = true;
                queue.push([x, y]);
            }
        }
    }

    // BFS
    bfs(heights, pq, pacific);
    bfs(heights, aq, atlantic);

    // Verify intersections
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (pacific[i][j] === atlantic[i][j]) res.push([i, j]);
        }
    }

    return res;
};

const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(heights))