import { useState } from "react";
import "../../App.css";
import Col from "./Col";
import { calculateWinner } from "./helpers";

export default function TicTacToe() {
  const [isX, setIsX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);

  const callBack = (id: number) => {
    if (squares[id] || calculateWinner(squares)) {
      return;
    }

    const newSquares = [...squares];
    const value = isX ? "X" : "0";
    newSquares[id] = value;

    setSquares(newSquares);
    setIsX(!isX);
  };

  const squaresMap = squares.map((_col, i) => (
    <Col key={i} text={squares[i]} callBack={() => callBack(i)} />
  ));

  const title = winner ? "Winner: " + winner : "";

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {squaresMap}
      </div>
      <span>{title}</span>
    </>
  );
}
