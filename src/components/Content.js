import React, { useState } from 'react';
import Board from './Board';
import Status from './Status';
import Modal from './Modal';


function Content() {

    // const [players, setPlayers] = useState(undefined);
    const [board, setBoard] = useState([
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined]
    ],)

    const [crossesTurn, setCrossesTurn] = useState(true);
    const [gameOver, setGameOver] = useState(false);

  const markSquare = (row, col) => {
    if (board[row][col] === undefined) {
      const newBoard = board;
      newBoard[row][col] = crossesTurn ? "X" : "O";
      setCrossesTurn(!crossesTurn);
      setBoard(newBoard);
    } else {
      console.log("invalid")
    }

    const endConditions = [
        // Rows equal
      board[0][0] && board[0][0] === board[0][1] && board[0][0] === board[0][2],
      board[1][0] && board[1][0] === board[1][1] && board[1][0] === board[1][2],
      board[2][0] && board[2][0] === board[2][1] && board[2][0] === board[2][2],
      // Columns equal
      board[0][0] && board[0][0] === board[1][0] && board[0][0] === board[2][0],
      board[0][1] && board[0][1] === board[1][1] && board[0][1] === board[2][1],
      board[0][2] && board[0][2] === board[1][2] && board[0][2] === board[2][2],
      // Diagonals
      board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2],
      board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]
      ]
    endConditions.every((condition) => {
      if (condition) {
        setGameOver(true);
      }
      return !condition
    });
  };

  const resetGame = () => {
      setGameOver(false);
      setBoard(
        [
          [undefined, undefined, undefined],
          [undefined, undefined, undefined],
          [undefined, undefined, undefined]
        ]
      );
      setCrossesTurn(true);
  };

  const statusText = () => {
    if (gameOver) {
      if (board.flat().every((square) => square)) {
        return "Tie!"
      } else {
        return crossesTurn ? "Winner: O" : "Winner: X"
      }
    } else {
      return crossesTurn ? "Next Player: X" : "Next Player: O"
    }
  };

  return (
    <div className="content">
      <h1>Tic-Tac-Toe!</h1>
      <Status
        className="info"
        statusText={statusText}
        resetGame={resetGame}
      />
      <Board
        markSquare={markSquare}
        crossesTurn={crossesTurn}
        board={board}
        gameOver={gameOver}
      />
      <Modal />
    </div>
  );
};

export default Content;
