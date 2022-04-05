import React from 'react';

function Square(props) {

  const markSquare = () => {
    if (!props.gameOver) {
      const row = props.row;
      const col = props.col;
      props.markSquare(row, col);
    }
  };

  return (
    <div
      className={`board__square ${props.gameOver ? '' : 'board__square--in-progress'} square`}
      onClick={markSquare}
      gameOver={props.gameOver}
    >{props.content}</div>
  );
};

export default Square;
