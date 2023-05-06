import React, { useContext } from "react";
import Row from "./Row";
import { AppContext } from "../utilities/useGame";

function Board() {
  const { board, resetGame } = useContext(AppContext);

  return (
    <>
      <div className="w-auto grid grid-rows-3 gap-4">
        {board.map((row, i) => (
          <Row row={i} squares={row} />
        ))}
      </div>
      <button
        className="reset mt-10 w-36 h-16 bg-blue-500 rounded-xl text-3xl"
        onClick={() => resetGame()}
      >
        Reset
      </button>
    </>
  );
}

export default Board;
