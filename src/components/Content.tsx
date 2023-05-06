import React, { useState, useEffect } from "react";
import Board from "./Board";
import Modal from "./Modal";
import Header from "./Header";
import { useAppContext } from "../utilities/useGame";

export type GameMode = "SINGLE_PLAYER" | "LOCAL_MULTI_PLAYER";

export type SquareContent = "X" | "O" | undefined;

// This should be related to player 1, player 2, cpu etc
export type Player = "X" | "O";

export type RowType = [SquareContent, SquareContent, SquareContent];

export type BoardType = [RowType, RowType, RowType];

export const Content = () => {
  const { AppContextProvider, resetGame } = useAppContext();

  return (
    <AppContextProvider>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <Header />
        <div className="w-full grow flex flex-col justify-start items-center">
          <Board />
          <button
            className="reset mt-10 w-36 h-16 bg-blue-500 rounded-xl text-3xl"
            onClick={resetGame}
          >
            Reset
          </button>
          <Modal />
        </div>
      </div>
    </AppContextProvider>
  );
};
