import { useState } from "react";
import "../../App.css";
import { setInitialBoard, updateBoard } from "./helpers";
import { Column } from "./constants";

const normalBorder = "1px solid black";
const activeBorder = "1px solid red";

export default function Chess() {
  const [board, setBoard] = useState(setInitialBoard());
  const [border, setBorder] = useState(normalBorder);
  const [active, setActive] = useState<number>();
  const [click, setClick] = useState<number>(0);

  const onClick = (i: number, item: Column) => {
    const newClick = click === 2 ? 0 : click + 1;
    setClick(newClick);
    setActive(i);
    setBorder(activeBorder);
    if (click === 2) {
      const newBoard = updateBoard(board, item);
      setBoard(newBoard);
    }
  };

  const boardMap = board.map((item, i) => (
    <div
      key={i}
      style={{
        border: i === active ? border : normalBorder,
        width: "40px",
        height: "40px",
        background: item.c === 0 ? "white" : "black",
      }}
      onClick={() => onClick(i, item)}
    >
      {item.value}
    </div>
  ));

  return (
    <>
      <h2>Chess</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)" }}>
        {boardMap}
      </div>
    </>
  );
}
