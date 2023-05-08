import React, { ReactNode, useContext } from "react";
import { AppContext } from "../AppContext";
import { GameMode } from "../Content";
import { Button } from "../Button";

const SelectPlayersButton = ({ gameMode }: { gameMode: GameMode }) => {
  const { setGameMode } = useContext(AppContext);
  // TODO: won't work for online multiplayer
  const text =
    gameMode === "SINGLE_PLAYER" ? "Single Player" : "Local Multi Player";

  return (
    <Button
      onClick={() => {
        setGameMode(gameMode);
      }}
      buttonColor="gray"
      buttonSize="md"
    >
      {text}
    </Button>
  );
};

function Modal() {
  const { gameMode } = useContext(AppContext);
  // return null;
  return (
    <div
      className={`${
        gameMode ? "hidden" : "flex"
      } justify-center items-center absolute top-0 left-0 z-50 h-screen w-screen bg-white`}
    >
      <div className="h-96 w-5/6 lg:w-1/3 md:w-1/2 bg-blue-500 flex flex-col justify-center items-center rounded-xl">
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
