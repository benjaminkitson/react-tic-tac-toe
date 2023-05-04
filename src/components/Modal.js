import React, { useContext } from "react";
import AppContext from "../utilities/appcontext";

function Modal() {
  const { setPlayers, players } = useContext(AppContext);

  return null;
  return (
    <div
      className={`${
        players ? "hidden" : "flex"
      } justify-center items-center absolute top-0 left-0 z-50 h-screen w-screen bg-white`}
    >
      <div className="h-72 w-72 bg-blue-500 flex flex-col justify-center items-center">
        <h1>Select number of players:</h1>
        <div className="h-1/2 w-full flex">
          <button onClick={() => setPlayers("1")} className="h-20 w-48">
            1 player
          </button>
          <button onClick={() => setPlayers("2")} className="h-20 w-48">
            2 players
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
