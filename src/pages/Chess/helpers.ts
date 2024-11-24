import { Board, Column, initialBoard, letters, pieceImages } from "./constants";

export const setInitialBoard = () => {
  let boardArray: Board = [];

  for (let i = 8; i > 0; i--) {
    const boardLine = new Array(8)
      .fill(null)
      .map((_b, j) =>
        (i + j) % 2 === 0
          ? ({ n: 8 - j, l: letters[8 - i], c: 0, value: "" } as Column)
          : ({ n: 8 - j, l: letters[8 - i], c: 1, value: "" } as Column)
      );

    boardArray = [...boardArray, ...boardLine];
  }

  addPieces(boardArray);

  return boardArray;
};

const addPieces = (board: Board) => {
  board.forEach((el, i) => {
    const pieceLetter: (typeof initialBoard)[number] = initialBoard[i];
    el.value = pieceImages[pieceLetter];
  });

  return board;
};

export const updateBoard = (board: Board, item: Column) => {
  return board;
};
