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
      mrRobot(board)
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


  const mrRobot = (board) => {

    const newBoard = board

    const victoryAims = {
      firstRow: [[0, 0], [0, 1], [0, 2]],
      secondRow: [[1, 0], [1, 1], [1, 2]],
      thirdRow: [[2, 0], [2, 1], [2, 2]],
      firstCol: [[0, 0], [1, 0], [2, 0]],
      secondCol: [[0, 1], [1, 1], [2, 1]],
      thirdCol: [[0, 2], [1, 2], [2, 2]],
      firstDiag: [[0, 0], [1, 1], [2, 2]],
      secondDiag: [[0, 2], [1, 1], [2, 0]]
    };

    const options = {}

    Object.keys(victoryAims).forEach((option) => {
      if (victoryAims[option].some(square => newBoard[square[0]][square[1]] === 'O') &&
          victoryAims[option].some(square => newBoard[square[0]][square[1]] === undefined) &&
          victoryAims[option].every(square => newBoard[square[0]][square[1]] !== 'X')) {
        options[option] = victoryAims[option];
      }
    });

    if (Object.keys(options).length) {
      const optionsKeys = Object.keys(options);
      const choice = optionsKeys[Math.floor(Math.random()*optionsKeys.length)];
      let cpuMarked = false
      while (cpuMarked === false) {
        const squareChoice = options[choice][Math.floor(Math.random()*3)];
        if ((newBoard[squareChoice[0]][squareChoice[1]]) === undefined) {
          newBoard[squareChoice[0]][squareChoice[1]] = 'O'
          cpuMarked = true;
          setTimeout(() => {
            setCrossesTurn(!crossesTurn);
            setBoard(newBoard);
            isGameEnd()
          }, 500)
        }
      }
    } else {
      let cpuMarked = false
      while (cpuMarked === false) {
        let cpuRow;
        let cpuCol;
        if (!board[1][1]) {
          [cpuRow, cpuCol] = [1, 1];
        } else {
          cpuRow = Math.floor(Math.random() * 3);
          cpuCol = Math.floor(Math.random() * 3);
        }
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
    }

    // le Robot

  }

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
