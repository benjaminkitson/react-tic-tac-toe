import React, { useContext } from 'react';
import AppContext from '../utilities/appcontext';
import Row from './Row';

function Board() {

  const { board } = useContext(AppContext);

  return (
    <div className="board">
      {board.map((row, i) => (
        <Row
          row={i.toString()}
          squares={row}
        />))}
    </div>
  );
};

export default Board
