import React from 'react';
import Board from './Board';
import Modal from './Modal';

export default class Content extends React.Component {

  state = {
    players: undefined,
    board:
      [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
      ],
    crossesTurn: true,
    gameOver: false
  };

  markCell = (row, col) => {
    if (this.state.board[row][col] === undefined) {
      const newBoard = this.state.board;
      newBoard[row][col] = this.state.crossesTurn ? "X" : "O";
      this.setState((prevState) => ({ crossesTurn: !prevState.crossesTurn, board: newBoard }));
    } else {
      console.log("invalid")
    }
    const board = this.state.board
    const endConditions = [
        // Rows equal
      board[0][0] && board[0][0] === board[0][1] && board[0][0] === board[0][2],
      board[1][0] && board[1][0] === board[1][1] && board[1][0] === board[1][2],
      board[2][0] && board[2][0] === board[2][1] && board[2][0] === board[2][2],
      // Columns equal
      board[0][0] && board[0][0] === board[1][0] && board[0][0] === board[2][0],
      board[0][1] && board[0][1] === board[1][1] && board[0][1] === board[2][1],
      board[0][2] && board[0][2] === board[1][2] && board[0][2] === board[2][2],
      // Diagonals
      board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2],
      board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]
      ]
    endConditions.every((condition) => {
      if (condition) {
        this.setState({ gameOver: true });
      }
      return !condition
    });
  };

  resetGame = () => {
    this.setState({
      gameOver: false,
      board:
        [
          [undefined, undefined, undefined],
          [undefined, undefined, undefined],
          [undefined, undefined, undefined]
        ],
      crossesTurn: true,
    })
  }

  statusText = () => {

  }

  componentDidMount() {
    // To complete later (localStorage etc)
  };

  componentDidUpdate(prevState, prevProps) {
    // To complete later (localStorage etc)
  };

  componentWillUnmount() {
    // To complete later (localStorage etc)
  };

  render() {
    return (
      <div className="content">
        <Modal gameOver={this.state.gameOver} crossesTurn={this.state.crossesTurn} resetGame={this.resetGame}/>
        <h1>Tic-Tac-Toe!</h1>
        <div><h1 className="status">{this.statusText()}</h1></div>
        <Board markCell={this.markCell} crossesTurn={this.state.crossesTurn} board={this.state.board}/>
      </div>
    );
  };
};
