import React from 'react';
import Cell from './Cell';

function Row(props) {
  return (
    <div className="board__row" id={props.id}>
      {props.cells.map((cell, i) => (<Cell col={i.toString()} markCell={props.markCell} crossesTurn={props.crossesTurn} row={props.row}/>))}
    </div>
  );
};

export default Row
