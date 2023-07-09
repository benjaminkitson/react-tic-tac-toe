import React, { useContext } from "react";
import { RxCross1, RxCircle } from "react-icons/rx";

import { AppContext } from "../AppContext";
import { BoardType, SquareContent } from "../Content";

type SquareProps = {
  content: SquareContent;
  row: number;
  col: number
};

function Square({ content, row, col }: SquareProps) {
  const { gameOver, crossesTurn, setBoard, board } = useContext(AppContext);

  const markSquare = (row?: number, col?: number) => {
    // TODO: row and col shouldn't need to be "asserted" here, fix
    if (
      !gameOver &&
      row !== undefined &&
      col !== undefined &&
      !board[row][col]
    ) {
      const newBoard: BoardType = [...board];
      newBoard[row][col] = crossesTurn ? "X" : "O";
      setBoard(newBoard);
    } else {
      console.log("invalid");
    }
  };

  return (
    <div
      className={`flex justify-center items-center text-9xl ${
        gameOver || content ? "" : "hover:bg-blue-300 hover:cursor-pointer"
      } square w-48 h-48 border border-gray-400 rounded-xl bg-blue-100`}
      onClick={() => markSquare(row, col)}
      data-testid={`${row}-${col}`}
      // gameOver={gameOver}
    >
      {
        // TODO: This is dumb and needs to change
      }
      {content === "X" ? <RxCross1 /> : content === "O" ? <RxCircle /> : null}
    </div>
  );
}

export default Square;
