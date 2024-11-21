import { useState } from "react";
import "./App.css";
import Col from "./Col";

function App() {
  const [isX, setIsX] = useState(true);

  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);

  const callBack = (id: number) => {
    if (squares[id] || calculateWinner(squares)) {
      return;
    }

    const _squares = [...squares];
    const value = isX ? "X" : "0";
    _squares[id] = value;

    setSquares(_squares);
    setIsX(!isX);
  };

  const netMap = squares.map((_col, i) => (
    <Col key={i} text={squares[i]} callBack={() => callBack(i)} />
  ));

  const title = winner ? "Winner: " + winner : "";

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {netMap}
      </div>
      <span>{title}</span>
    </>
  );
}

export default App;
