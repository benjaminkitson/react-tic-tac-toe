import React from 'react';
import Cell from './Cell';

function Row(props) {
  return (
    <div className="board__row">
      <Cell className="c1" markCell={props.markCell}/>
      <Cell className="c2" markCell={props.markCell}/>
      <Cell className="c3" markCell={props.markCell}/>
    </div>
  )
}

export default Row
