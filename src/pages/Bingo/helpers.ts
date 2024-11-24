export function generateBingoBoard() {
  const numbersSet: Set<number> = new Set();
  let flag = true;

  while (flag) {
    const j = Math.floor(Math.random() * 26);
    if (j !== 0 && !numbersSet.has(j)) {
      numbersSet.add(j);
    }
    if (numbersSet.size === 25) {
      flag = false;
    }
  }
  const numbers = Array.from(numbersSet);

  return numbers;
}

export function calculateWinner(selected: number[]) {
  const winningLines = [
    // Horizontal lines
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    // Vertical lines
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    // Diagonals
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  return winningLines.some((line) =>
    line.every((index) => selected.includes(index))
  );
}
