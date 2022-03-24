import React from 'react';
import Cell from './Cell';

function Row() {
  return (
    <div className="board__row">
      <Cell />
      <Cell />
      <Cell />
    </div>
  )
}

export default Row
