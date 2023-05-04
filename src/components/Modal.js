import React, { useContext } from "react";
import AppContext from "../utilities/appcontext";

function Modal() {
  const { setPlayers, players } = useContext(AppContext);

  const SelectPlayersButton = ({ playerCount }) => {
    const text = playerCount === "1" ? "1 player" : "2 players";

    return (
      <button
        onClick={() => setPlayers(playerCount)}
        className="h-20 w-28 bg-gray-200 rounded-lg"
      >
        {text}
      </button>
    );
  };

  // return null;
  return (
    <div
      className={`${
        players ? "hidden" : "flex"
      } justify-center items-center absolute top-0 left-0 z-50 h-screen w-screen bg-white`}
    >
      <div className="h-96 w-96 bg-blue-500 flex flex-col justify-center items-center rounded-xl">
        <h1 className="text-3xl">Select number of players:</h1>
        <div className="h-1/2 w-2/3 flex justify-between items-center">
          <SelectPlayersButton playerCount={"1"} />
          <SelectPlayersButton playerCount={"2"} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
