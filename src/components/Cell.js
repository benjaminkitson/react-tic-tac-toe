import React from 'react';

export default class Cell extends React.Component {

  markCell = (e) => {
    const row = this.props.row;
    const col = this.props.col;
    this.props.markCell()
  }

  render() {
    return (
      <div className={`board__cell ${this.props.className}`} onClick={this.markCell}></div>
    );
  };
};
