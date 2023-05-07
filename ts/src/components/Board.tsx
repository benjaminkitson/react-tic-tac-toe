import React, { useContext } from "react";
import Row from "./Row";
import { AppContext } from "../utilities/useGame";
import { Button } from "./Button";

function Board() {
  const { board, resetGame } = useContext(AppContext);

  return (
    <>
      <div className="w-auto grid grid-rows-3 gap-4">
        {board.map((row, i) => (
          <Row row={i} squares={row} />
        ))}
      </div>
      <Button buttonColor="blue" buttonSize="lg" onClick={() => resetGame()}>
        Reset
      </Button>
    </>
  );
}

export default Board;
