import React, { useState, useEffect } from 'react';
import Board from './Board';
import Status from './Status';
import Modal from './Modal';


function Content() {

  const [players, setPlayers] = useState('1');
  const [board, setBoard] = useState([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ],)

  const [crossesTurn, setCrossesTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(undefined);


  useEffect(() => {
    if (!board.flat().every(square => !square)) {
      isGameEnd()
      setCrossesTurn(!crossesTurn)
    }
  }, [board])

  useEffect(() => {
    if (!board.flat().every(square => !square)) {
      const shouldRobot = (!crossesTurn && !board.flat().every(square => square) && players === '1' && !gameOver);
      if (shouldRobot) markSquare();
    }
  }, [crossesTurn])

  const markSquare = (row = undefined, col = undefined) => {
    if (players === '1' && !crossesTurn) {
      mrRobot(board)
    } else {
      if (!board[row][col]) {
        const newBoard = [...board];
        newBoard[row][col] = crossesTurn ? "X" : "O";
        setBoard(newBoard);
      } else {
        console.log("invalid")
      }
    }
  };


  const mrRobot = (board) => {

    const newBoard = [...board]

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

    const finishHim = {}

    Object.keys(victoryAims).forEach((option) => {
      const twoOs = victoryAims[option].filter(square => newBoard[square[0]][square[1]] === 'O').length === 2;
      const freeSpace = victoryAims[option].some(square => newBoard[square[0]][square[1]] === undefined);
      if (twoOs && freeSpace) {
        finishHim[option] = victoryAims[option];
      }
    });

    const defenceMode = {}

    Object.keys(victoryAims).forEach((option) => {
      const twoXs = victoryAims[option].filter(square => newBoard[square[0]][square[1]] === 'X').length === 2;
      const freeSpace = victoryAims[option].some(square => newBoard[square[0]][square[1]] === undefined);
      if (twoXs && freeSpace) {
        defenceMode[option] = victoryAims[option];
      }
    });

    let options

    if (Object.keys(finishHim).length) {
      options = finishHim
    } else if (Object.keys(defenceMode).length) {
      options = defenceMode
    } else {
      options = {}
    }

    if (!Object.keys(options).length) {
      Object.keys(victoryAims).forEach((option) => {
        const oneO = victoryAims[option].some(square => newBoard[square[0]][square[1]] === 'O');
        const freeSpace = victoryAims[option].some(square => newBoard[square[0]][square[1]] === undefined);
        const noXs = victoryAims[option].every(square => newBoard[square[0]][square[1]] !== 'X');
        if (oneO && freeSpace && noXs) {
          options[option] = victoryAims[option];
        }
      });
    }

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
            setBoard(newBoard);
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
          const newBoard = [...board];
          newBoard[cpuRow][cpuCol] = "O";
          cpuMarked = true;
          setTimeout(() => {
            setBoard(newBoard);
          }, 500)
        }
      }
    }

    // le Robot

  }

  const isGameEnd = () => {
    const endConditions = [
      // Rows equal
      (board[0][0] !== undefined) && (board[0][0] === board[0][1]) && (board[0][0] === board[0][2]),
      (board[1][0] !== undefined) && (board[1][0] === board[1][1]) && (board[1][0] === board[1][2]),
      (board[2][0] !== undefined) && (board[2][0] === board[2][1]) && (board[2][0] === board[2][2]),
      // Columns equal
      (board[0][0] !== undefined) && (board[0][0] === board[1][0]) && (board[0][0] === board[2][0]),
      (board[0][1] !== undefined) && (board[0][1] === board[1][1]) && (board[0][1] === board[2][1]),
      (board[0][2] !== undefined) && (board[0][2] === board[1][2]) && (board[0][2] === board[2][2]),
      // Diagonals
      (board[0][0] !== undefined) && (board[0][0] === board[1][1]) && (board[0][0] === board[2][2]),
      (board[0][2] !== undefined) && (board[0][2] === board[1][1]) && (board[0][2] === board[2][0]),
    ]
    // const conditions = [];
    // endConditions.forEach(condition => {
    //   conditions.push(condition);
    //   console.log(conditions);
    // })
    const didWin = endConditions.some(condition => {
      return condition
    });
    console.log(didWin)
    const isTie = board.flat().every(square => square);
    if (didWin) {
      setGameOver(true);
      setWinner(crossesTurn ? 'X' : 'O')
    } else if (isTie) {
      setGameOver(true)
    }
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
      setWinner(undefined);
  };

  const statusText = () => {
    if (gameOver) {
      if (!winner) {
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
