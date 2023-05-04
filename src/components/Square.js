import React, { useContext } from "react";
import AppContext from "../utilities/appcontext";
import { RxCross1, RxCircle } from "react-icons/rx";

function Square({ content, row, col }) {
  const { gameOver, players, crossesTurn, markSquare } = useContext(AppContext);

  const defineSquare = () => {
    if (!gameOver && !(players === "1" && !crossesTurn)) {
      markSquare(row, col);
    }
  };

  return (
    <div
      className={`flex justify-center items-center text-9xl ${
        gameOver ? "" : "hover:bg-blue-300 hover:cursor-pointer"
      } square w-48 h-48 bg-blue-100 border border-gray-600 rounded-xl transition-colors duration-300`}
      onClick={defineSquare}
      gameOver={gameOver}
    >
      {
        // TODO: This is dumb and needs to change
      }
      {content === "X" ? <RxCross1 /> : content === "O" ? <RxCircle /> : null}
    </div>
  );
}

export default Square;
