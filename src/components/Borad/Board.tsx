import React from "react";
import {Square} from "./Square/Square";
import "./Board.scss";

interface BoardState {
  board: boolean[][];
  turns: number;
}

export class Board extends React.Component<{}, BoardState> {

  private n: number = 4;
  private m: number = 4;

  constructor(props: {}) {
    super(props);

    const newBoard: boolean[][] = new Array(this.n);
    for (let i = 0; i < this.n; i++) {
      newBoard[i] = new Array(this.m);
      for (let j = 0; j < this.m; j++) {
        newBoard[i][j] = Math.random() >= 0.5;
      }
    }

    this.state = {
      board: newBoard,
      turns: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="Board">
        {this.state.board.map((row, i) => (
          <div className="Board-Row">
            {row.map((cell, j) => (<Square i={i} j={j} value={cell} onChange={this.handleChange}/>))}
          </div>
        ))}
      </div>
    );
  }

  private handleChange(i: number, j: number) {
    const { turns, board } = this.state;
    board[i][j] = !board[i][j];

    this.setState({
      turns: turns + 1,
      board: board
    });
  }
}
