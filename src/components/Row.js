import React from 'react';
import Cell from './Cell';

function Row(props) {
  return (
    <div className="board__row" id={props.id}>
      <Cell row={props.row} col="0" markCell={props.markCell} crossesTurn={props.crossesTurn}/>
      <Cell row={props.row} col="1" markCell={props.markCell} crossesTurn={props.crossesTurn}/>
      <Cell row={props.row} col="2" markCell={props.markCell} crossesTurn={props.crossesTurn}/>
    </div>
  );
};

export default Row
