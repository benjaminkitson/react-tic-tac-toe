import React from 'react';
import Board from './Board';

export default class Content extends React.Component {

  state = {
    players: undefined,
    winner: undefined,
    board:
      [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
      ],
    crossesTurn: true
  };

  // Endgame board states:

  // Rows equal
  // board[0][0] === board[0][1] && board[0][0] === board[0][2]
  // board[1][0] === board[1][1] && board[1][0] === board[1][2]
  // board[2][0] === board[2][1] && board[2][0] === board[2][2]

  // Columns equal
  // board[0][0] === board[1][0] && board[0][0] === board[2][0]
  // board[0][1] === board[1][1] && board[0][1] === board[2][1]
  // board[0][2] === board[1][2] && board[0][2] === board[2][2]

  // Diagonals
  // board[0][0] === board[1][1] && board[0][0] === board[2][2]
  // board[0][2] === board[1][1] && board[0[2] === board[2][0]
  //

  markCell = (row, col) => {
    console.log(row, col);
    if (this.state.board[row][col] === undefined) {
      const newBoard = this.state.board;
      newBoard[row][col] = this.state.crossesTurn ? "X" : "O";
      this.setState((prevState) => ({ crossesTurn: !prevState.crossesTurn, board: newBoard }));
      console.log(this.state.board);
    } else {
      console.log("invalid")
    }
  };

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
        <h1>Tic-Tac-Toe!</h1>
        <Board markCell={this.markCell} crossesTurn={this.state.crossesTurn} board={this.state.board}/>
      </div>
    );
  };
};
