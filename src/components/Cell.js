import React from 'react';

export default class Cell extends React.Component {

  markCell = () => {
    this.props.markCell()
  }

  render() {
    return (
      <div className="board__cell" onClick={this.markCell}></div>
    )
  }
}
