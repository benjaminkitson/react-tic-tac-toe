import React from 'react';
import Board from './Board';

export default class Content extends React.Component {

  state = {
    players: undefined,
    winner: undefined,
    board:
      [
        [[], [], []],
        [[], [], []],
        [[], [], []]
      ],
    crossesTurn: true
  };

  markCell() {
    console.log("hello")
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
        <Board markCell={this.markCell}/>
      </div>
    );
  };
};
