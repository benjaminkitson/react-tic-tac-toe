// TODO: All of this stuff can be bundled into custom hooks etc
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { BoardType, GameMode, Player } from "../components/Content";
import { SquareContent } from "../components/Content";
import mrRobot from "./robot";
import endConditions from "./endconditions";

type ContextData = {
  gameMode: GameMode | undefined;
  board: BoardType;
  crossesTurn: boolean;
  gameOver: boolean;
  setBoard: React.Dispatch<React.SetStateAction<BoardType>>;
  resetGame: () => void;
  statusText: () =>
    | "Tie!"
    | "Current Turn: O"
    | "Winner: O"
    | "Winner: X"
    | "Current Turn: X";
  setGameMode: React.Dispatch<React.SetStateAction<GameMode | undefined>>;
};

export const AppContext = React.createContext<ContextData>({} as ContextData);

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
      if (shouldRobot) mrRobot(board, setBoard);
    }
  }, [crossesTurn]);

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
    console.log("hello");
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
    setBoard,
    resetGame,
    statusText,
    setGameMode,
  };

  type AppContextProviderProps = {
    children: React.ReactNode;
  };

  const AppContextProvider = ({ children }: AppContextProviderProps) => (
    <AppContext.Provider value={data}>{children}</AppContext.Provider>
  );

  return { AppContextProvider };
};
