import React from 'react';
import Cell from './Cell';

function Row(props) {
  return (
    <div className="board__row" id={props.id}>
      <Cell className="C1" markCell={props.markCell}/>
      <Cell className="C2" markCell={props.markCell}/>
      <Cell className="C3" markCell={props.markCell}/>
    </div>
  )
}

export default Row
