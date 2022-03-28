import React from 'react';

export default class Square extends React.Component {

  markSquare = () => {
    if (!this.props.gameOver) {
      const row = this.props.row;
      const col = this.props.col;
      this.props.markSquare(row, col);
    }
  };

  render() {
    return (
      <div
        className={`board__square ${this.props.gameOver ? '' : 'board__square--in-progress'} square`}
        onClick={this.markSquare}
        gameOver={this.props.gameOver}
      >{this.props.content}</div>
    );
  };
};
