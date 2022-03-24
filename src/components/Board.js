import React from 'react';
import Row from './Row';

function Board(props) {
  return (
    <div className="board">
      {props.board.map((row, i) => (<Row row={i.toString()} markCell={props.markCell} crossesTurn={props.crossesTurn} cells={row}/>))}
    </div>
  );
};

export default Board
