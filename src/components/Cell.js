import React from 'react';

export default class Cell extends React.Component {

  markCell = (e) => {
    console.log(e.target)
    this.props.markCell()
  }

  render() {
    return (
      <div className={`board__cell ${this.props.className}`} onClick={this.markCell}></div>
    )
  }
}
