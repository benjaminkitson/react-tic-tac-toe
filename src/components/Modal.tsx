import React, { ReactNode } from "react";
import { useAppContext } from "../utilities/useGame";
import { GameMode } from "./Content";

const SelectPlayersButton = ({ gameMode }: { gameMode: GameMode }) => {
  const { setGameMode } = useAppContext();
  // TODO: won't work for online multiplayer
  const text =
    gameMode === "SINGLE_PLAYER" ? "Single Player" : "Local Multi Player";

  return (
    <button
      onClick={() => setGameMode(gameMode)}
      className="h-20 w-28 bg-gray-200 rounded-lg"
    >
      {text}
    </button>
  );
};

function Modal() {
  const { gameMode } = useAppContext();
  // return null;
  return (
    <div
      className={`${
        gameMode ? "hidden" : "flex"
      } justify-center items-center absolute top-0 left-0 z-50 h-screen w-screen bg-white`}
    >
      <div className="h-96 w-96 bg-blue-500 flex flex-col justify-center items-center rounded-xl">
        <h1 className="text-3xl">Select number of players:</h1>
        <div className="h-1/2 w-2/3 flex justify-between items-center">
          <SelectPlayersButton gameMode={"SINGLE_PLAYER"} />
          <SelectPlayersButton gameMode={"LOCAL_MULTI_PLAYER"} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
