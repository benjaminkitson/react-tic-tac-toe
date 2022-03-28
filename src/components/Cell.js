import React from 'react';

export default class Cell extends React.Component {

  markCell = () => {
    if (!this.props.gameOver) {
      const row = this.props.row;
      const col = this.props.col;
      this.props.markCell(row, col);
    }
  };

  render() {
    return (
      <div
        className={`board__cell`}
        onClick={this.markCell}
        gameOver={this.props.gameOver}
      >{this.props.content}</div>
    );
  };
};
