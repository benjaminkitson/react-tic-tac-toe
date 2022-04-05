import React, { useState, useEffect } from 'react';
import Board from './Board';
import Status from './Status';
import Modal from './Modal';


function Content() {

  const [players, setPlayers] = useState(undefined);
  const [board, setBoard] = useState([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ],)

  const [crossesTurn, setCrossesTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!crossesTurn && !gameOver && players === '1') markSquare();
  }, [crossesTurn])

  const markSquare = (row = undefined, col = undefined) => {
    if (players === '1' && !crossesTurn) {
      let cpuMarked = false
      while (cpuMarked === false) {
        const cpuCol = Math.floor(Math.random() * 3)
        const cpuRow = Math.floor(Math.random() * 3)
        if (board[cpuRow][cpuCol] === undefined) {
          const newBoard = board;
          cpuMarked = true;
          newBoard[cpuRow][cpuCol] = "O";
          setTimeout(() => {
            setCrossesTurn(!crossesTurn);
            setBoard(newBoard);
            isGameEnd()
          }, 500)
        }
      }
    } else {
      if (board[row][col] === undefined) {
        const newBoard = board;
        newBoard[row][col] = crossesTurn ? "X" : "O";
        setCrossesTurn(!crossesTurn);
        setBoard(newBoard);
        isGameEnd()
      } else {
        console.log("invalid")
      }
    }
  };

  const isGameEnd = () => {
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
      board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0],
      board.flat().every(square => square)
    ]
    endConditions.every((condition) => {
      if (condition) {
        setGameOver(true);
      }
      return !condition
    });
  }

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
        players={players}
      />
      <Modal
        setPlayers={setPlayers}
        players={players}
      />
    </div>
  );
};

export default Content;
