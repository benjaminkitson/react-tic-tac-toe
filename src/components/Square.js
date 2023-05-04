import React, { useContext } from "react";
import AppContext from "../utilities/appcontext";

function Square(props) {
  const { gameOver, players, crossesTurn, markSquare } = useContext(AppContext);

  const defineSquare = () => {
    if (!gameOver && !(players === "1" && !crossesTurn)) {
      const row = props.row;
      const col = props.col;
      markSquare(row, col);
    }
  };

  return (
    <div
      className={`board__square ${
        gameOver ? "" : "board__square--in-progress"
      } square w-48 h-48 bg-blue-100 border border-gray-600 rounded-xl`}
      onClick={defineSquare}
      gameOver={gameOver}
    >
      {props.content}
    </div>
  );
}

export default Square;
