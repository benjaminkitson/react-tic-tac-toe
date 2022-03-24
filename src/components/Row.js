import React from 'react';
import Cell from './Cell';

function Row() {
  return (
    <div className="board__row">
      <Cell className="c1"/>
      <Cell className="c2"/>
      <Cell className="c3"/>
    </div>
  )
}

export default Row
