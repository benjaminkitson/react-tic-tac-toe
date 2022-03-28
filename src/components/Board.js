import React from 'react';
import Row from './Row';

function Board(props) {
  return (
    <div className="board">
      {props.board.map((row, i) => (
        <Row
          row={i.toString()}
          markSquare={props.markSquare}
          crossesTurn={props.crossesTurn}
          squares={row}
          gameOver={props.gameOver}
        />))}
    </div>
  );
};

export default Board
