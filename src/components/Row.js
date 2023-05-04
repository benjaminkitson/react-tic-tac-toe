import React from "react";
import Square from "./Square";

function Row(props) {
  return (
    <div className="inline-grid grid-cols-3 gap-4 w-fit" id={props.id}>
      {props.squares.map((square, i) => (
        <Square
          col={i.toString()}
          content={square}
          markSquare={props.markSquare}
          crossesTurn={props.crossesTurn}
          row={props.row}
          gameOver={props.gameOver}
          players={props.players}
        />
      ))}
    </div>
  );
}

export default Row;
