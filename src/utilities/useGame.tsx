// TODO: All of this stuff can be bundled into custom hooks etc
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { BoardType, GameMode, Player } from "../components/Content";
import { SquareContent } from "../components/Content";
import mrRobot from "./robot";
import endConditions from "./endconditions";

export const useAppContext = () => {
  const [gameMode, setGameMode] = useState<GameMode | undefined>(undefined);

  const [board, setBoard] = useState<BoardType>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);

  const [crossesTurn, setCrossesTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<Player | undefined>(undefined);

  useEffect(() => {
    if (!board.flat().every((square: SquareContent) => !square)) {
      isGameEnd();
      setCrossesTurn(!crossesTurn);
    }
  }, [board]);

  useEffect(() => {
    if (!board.flat().every((square: SquareContent) => !square)) {
      const shouldRobot =
        !crossesTurn &&
        !board.flat().every((square: SquareContent) => square) &&
        gameMode === "SINGLE_PLAYER" &&
        !gameOver;
      if (shouldRobot) markSquare();
    }
  }, [crossesTurn]);

  const markSquare = (row?: number, col?: number) => {
    if (gameMode === "SINGLE_PLAYER" && !crossesTurn) {
      mrRobot(board, setBoard);
    } else {
      // TODO: row and col shouldn't need to be "asserted" here, fix
      if (row && col && !board[row][col]) {
        const newBoard: BoardType = [...board];
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
    const isTie = board.flat().every((square: SquareContent) => square);
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
      return crossesTurn ? "Current Turn: X" : "Current Turn: O";
    }
  };

  const data = {
    gameMode,
    board,
    crossesTurn,
    gameOver,
    resetGame,
    statusText,
    markSquare,
    setGameMode,
  };

  type ContextData = typeof data;

  const AppContext = React.createContext<ContextData | undefined>(undefined);

  const AppData: typeof data = useAppContext();

  type AppContextProviderProps = {
    children: React.ReactNode;
  };

  const AppContextProvider = ({ children }: AppContextProviderProps) => (
    <AppContext.Provider value={data}>{children}</AppContext.Provider>
  );

  return { AppContextProvider, ...AppData };
};
