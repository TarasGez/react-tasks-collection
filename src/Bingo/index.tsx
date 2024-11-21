import { useState } from "react";
import "./App.css";
import { calculateWinner, generateBingoBoard } from "./helpers";

const Bingo = () => {
  const [board, setBoard] = useState<number[]>(generateBingoBoard());
  const [selected, setSelected] = useState<number[]>([]);
  const [winner, setWinner] = useState(false);
  const [numbers, setNumbers] = useState<number[]>(generateBingoBoard());
  const [number, setNumber] = useState<number>();

  const handleCellClick = (index: number) => {
    if (selected.includes(index) || winner) return;

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (calculateWinner(newSelected)) {
      setWinner(true);
    }
  };

  const resetGame = () => {
    setBoard(generateBingoBoard());
    setSelected([]);
    setWinner(false);
  };

  const showNumber = () => {
    setNumber(numbers[0]);
    const newNumbers = [...numbers];
    newNumbers.shift();
    setNumbers(newNumbers);
  };

  const boardMap = board.map((num, i) => (
    <div
      key={i}
      onClick={() => handleCellClick(i)}
      style={{
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        backgroundColor: selected.includes(i) ? "lightgreen" : "white",
        cursor: winner ? "not-allowed" : "pointer",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {num}
    </div>
  ));

  return (
    <>
      <h1>Bingo Game: {number}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        {boardMap}
      </div>
      {winner && <h2 style={{ color: "green" }}>Bingo! You won!</h2>}
      <button
        onClick={resetGame}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Reset Game
      </button>
      <button
        onClick={showNumber}
        style={{
          backgroundColor: "green",
          color: "white",
          marginTop: "20px",
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Show number
      </button>
    </>
  );
};

export default Bingo;
