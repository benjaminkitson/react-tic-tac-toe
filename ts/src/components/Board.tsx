import React, { useContext } from "react";
import Row from "./Row";
import { useAppContext } from "../utilities/useGame";

function Board() {
  const { board } = useAppContext();

  return (
    <div className="w-auto grid grid-rows-3 gap-4">
      {board.map((row, i) => (
        <Row row={i} squares={row} />
      ))}
    </div>
  );
}

export default Board;
