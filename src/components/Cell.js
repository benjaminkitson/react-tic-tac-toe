import React from 'react';

export default class Cell extends React.Component {

  markCell = (e) => {
    const row = this.props.row;
    const col = this.props.col;
    this.props.markCell(row, col);
  }

  render() {

    return (
      <div className={`board__cell`} onClick={this.markCell}>{this.props.content}</div>
    );
  };
};
