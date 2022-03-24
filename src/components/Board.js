import React from 'react';
import Row from './Row';

function Board(props) {
  return (
    <div className="board">
      <Row id="R1" markCell={props.markCell}/>
      <Row id="R2" markCell={props.markCell}/>
      <Row id="R3" markCell={props.markCell}/>
    </div>
  )
}

export default Board
