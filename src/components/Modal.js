import React from 'react';

export default class Modal extends React.Component {

  resetGame = () => {
    this.props.resetGame()
  }

  render() {
    return (
      <div className={`modal ${this.props.gameOver ? '' : 'modal--hidden'}`}>
        <div className="modal__content">
          <h1>{`${!this.props.crossesTurn ? "X" : "O"}`} Wins!</h1>
          <button className="modal__button" onClick={ this.resetGame }>Play again</button>
        </div>
      </div>
    );
  }
};
