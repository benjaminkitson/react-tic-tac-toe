import React from 'react';
import Square from './Square';

function Row(props) {
  return (
    <div className="board__row" id={props.id}>
      {props.squares.map((square, i) => (
        <Square
          col={i.toString()}
          content={square}
          markSquare={props.markSquare}
          crossesTurn={props.crossesTurn}
          row={props.row}
          gameOver={props.gameOver}
        />))}
    </div>
  );
};

export default Row
