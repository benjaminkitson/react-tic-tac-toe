import React from 'react';
import Row from './Row';

function Board() {
  return (
    <div className="board">
      <Row id="R1"/>
      <Row id="R2"/>
      <Row id="R3"/>
    </div>
  )
}

export default Board
