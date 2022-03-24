import React from 'react';
import Row from './Row';

function Board(props) {
  return (
    <div className="board">
      <Row row="0" markCell={props.markCell} crossesTurn={props.crossesTurn}/>
      <Row row="1" markCell={props.markCell} crossesTurn={props.crossesTurn}/>
      <Row row="2" markCell={props.markCell} crossesTurn={props.crossesTurn}/>
    </div>
  );
};

export default Board
