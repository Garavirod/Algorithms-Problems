function isValidSudoku(board: string[][]): boolean {
  let rows = new Map<string, Set<string>>();
  let cols = new Map<string, Set<string>>();
  let squares = new Map<string, Set<string>>();

  for (let i = 0; i < 9; i++) {
    rows.set(i + "", new Set<string>());
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;

      const suquareKey = `${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
      if (!cols.has(j + "")) cols.set(j + "", new Set<string>());
      if (!squares.has(suquareKey))
        squares.set(suquareKey, new Set<string>());

      if (
        rows.get(`${i}`)!.has(board[i][j]) ||
        cols.get(`${j}`)!.has(board[i][j]) ||
        squares.get(suquareKey)!.has(board[i][j])
      )
        return false;

      rows.get(`${i}`)!.add(board[i][j]);
      cols.get(`${j}`)!.add(board[i][j]);
      squares.get(suquareKey)!.add(board[i][j]);
    }
  }

  return true;
}
