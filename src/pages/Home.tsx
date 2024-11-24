import { Link } from "react-router";

import Bingo from "./Bingo";
import TicTacToe from "./TicTacToe";
import Chess from "./Chess";
import Сheckers from "./Сheckers";

export const menu = [
  { id: 0, title: "TicTacToe", path: "/tictactoe", component: <TicTacToe /> },
  { id: 1, title: "Bingo", path: "/bingo", component: <Bingo /> },
  { id: 2, title: "Сheckers", path: "/checkers", component: <Сheckers /> },
  { id: 3, title: "Chess", path: "/chess", component: <Chess /> },
];

export default function Home() {
  const menuMap = menu.map((item) => (
    <li key={item.id}>
      <Link to={item.path}>{item.title}</Link>
    </li>
  ));
  return <ul>{menuMap}</ul>;
}
