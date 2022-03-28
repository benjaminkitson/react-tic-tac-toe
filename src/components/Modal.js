import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
      <div className={`modal ${this.props.gameOver ? '' : 'modal--hidden'}`}>
        <div className="modal__content">
          <h1>{`${!this.props.crossesTurn ? "X" : "O"}`} Wins!</h1>
        </div>
      </div>
    );
  }
};
