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
