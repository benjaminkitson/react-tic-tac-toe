import React, { useState, useEffect } from "react";
import Board from "./Board";
import Modal from "./Modal";
import Header from "./Header";
import AppContext from "../utilities/appcontext";
import mrRobot from "../utilities/robot";
import endConditions from "../utilities/endconditions";

function Content() {
  const [players, setPlayers] = useState(undefined);
  const [board, setBoard] = useState([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);
  const [crossesTurn, setCrossesTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(undefined);

  useEffect(() => {
    if (!board.flat().every((square) => !square)) {
      isGameEnd();
      setCrossesTurn(!crossesTurn);
    }
  }, [board]);

  useEffect(() => {
    if (!board.flat().every((square) => !square)) {
      const shouldRobot =
        !crossesTurn &&
        !board.flat().every((square) => square) &&
        players === "1" &&
        !gameOver;
      if (shouldRobot) markSquare();
    }
  }, [crossesTurn]);

  const markSquare = (row = undefined, col = undefined) => {
    if (players === "1" && !crossesTurn) {
      mrRobot(board, setBoard);
    } else {
      if (!board[row][col]) {
        const newBoard = [...board];
        newBoard[row][col] = crossesTurn ? "X" : "O";
        setBoard(newBoard);
      } else {
        console.log("invalid");
      }
    }
  };

  const isGameEnd = () => {
    const didWin = endConditions(board).some((condition) => {
      return condition;
    });
    const isTie = board.flat().every((square) => square);
    if (didWin) {
      setGameOver(true);
      setWinner(crossesTurn ? "X" : "O");
    } else if (isTie) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setBoard([
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ]);
    setCrossesTurn(true);
    setWinner(undefined);
  };

  const statusText = () => {
    if (gameOver) {
      if (!winner) {
        return "Tie!";
      } else {
        return crossesTurn ? "Winner: O" : "Winner: X";
      }
    } else {
      return crossesTurn ? "Next Player: X" : "Next Player: O";
    }
  };

  const data = {
    players,
    board,
    crossesTurn,
    gameOver,
    statusText,
    resetGame,
    markSquare,
    setPlayers,
  };

  return (
    <AppContext.Provider value={data}>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <Header />
        <div className="w-full grow flex flex-col justify-start items-center">
          <Board />
          <Modal />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default Content;
